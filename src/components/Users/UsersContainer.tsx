import React from "react";
import {connect} from "react-redux";
import {ActionType, StateType, UserType} from "../../redux/store";
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC, setTotalUsersCountAC} from "../../redux/users-reduser";
import Users from "./Users";

let mapStatetoProps = (state: StateType) => {
    return {
        usersPage: state.usersPage
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

const UsersContainer = connect(mapStatetoProps, mapDispatchToProps)(Users)

export default UsersContainer
