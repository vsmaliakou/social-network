import React from "react";
import {connect} from "react-redux";
import {ActionType, StateType, UserType} from "../../redux/store";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reduser";
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
        }
    }
}

const UsersContainer = connect(mapStatetoProps, mapDispatchToProps)(Users)

export default UsersContainer
