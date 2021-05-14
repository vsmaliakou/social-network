import React from 'react';
import {connect} from 'react-redux';
import {follow, unfollow, requestUsers, FilterType} from '../../redux/users-reduser';
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
    getFollowingInProgress,
    getUsersFilter
} from '../../redux/users-selectors'
import {UserType} from "../../redux/types";

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
    followingInProgress: Array<number>
    filter: FilterType
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    requestUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
}
type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        const {currentPage, pageSize, filter} = this.props
        this.props.requestUsers(currentPage, pageSize, filter)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize, filter} = this.props
        this.props.requestUsers(pageNumber, pageSize, filter)
    }

    onFilterChanged = (filter: FilterType) => {
        const {pageSize} = this.props
        this.props.requestUsers(1, pageSize, filter)
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
                onFilterChanged={this.onFilterChanged}
            />
        </>
    }

}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getUsersFilter(state)
    }
}

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, null, AppRootStateType>(mapStateToProps, {requestUsers, follow, unfollow}),
)(UsersContainer)
