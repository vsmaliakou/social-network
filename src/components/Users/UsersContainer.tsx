import React from 'react';
import {connect} from 'react-redux';
import {StateType, UsersPageType, UserType} from '../../redux/store';
import {
    follow,
    setCurrentPage,
    setUsers,
    unfollow,
    setTotalUsersCount,
    toggleIsFetching, toggleFollowingInProgress
} from '../../redux/users-reduser';
import Users from './Users/Users';
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

type MapStateToPropsType = {
    usersPage: UsersPageType
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
}
type UsersContainerType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.usersPage.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {

        return <>
            {this.props.usersPage.isFetching ? <Preloader/> : null}
            <Users usersPage={this.props.usersPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
            />
        </>
    }

}

let mapStatetoProps = (state: StateType) => {
    return {
        usersPage: state.usersPage
    }
}

export default connect(mapStatetoProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingInProgress
})(UsersContainer)
