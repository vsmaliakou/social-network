import React from 'react';
import {connect} from 'react-redux';
import {UserType} from '../../redux/store';
import {setCurrentPage, follow, unfollow, requestUsers} from '../../redux/users-reduser';
import Users from './Users/Users';
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import { AppRootStateType } from '../../redux/redux-store';
import {
    getPageSize,
    getUsers,
    getCurrentPage,
    getTotalUsersCount,
    getIsFetching,
    getFollowingInProgress
} from '../../redux/users-selectors'

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
}
type UsersContainerType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                followingInProgress={this.props.followingInProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
            />
        </>
    }

}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setCurrentPage, requestUsers, follow, unfollow}),
)(UsersContainer)
