import {AppThunk} from "./redux-store";
import {UserType} from "./types";
import {Dispatch} from "redux";
import {usersAPI} from "../api/users-api";

export type UsersActionType = ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingInProgress>
    | ReturnType<typeof setFilter>

export type UsersInitialStateType = typeof initialState
export type FilterType = typeof initialState.filter

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
    filter: {
        term: "",
        friend: null as boolean | null
    }
}

const usersReducer = (state = initialState, action: UsersActionType): UsersInitialStateType => {
    switch (action.type) {
        case "SN/USERS/FOLLOW": {
            debugger
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case "SN/USERS/UNFOLLOW": {
            debugger
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case "SN/USERS/SET-USERS": {
            return {...state, users: action.users}
        }
        case "SN/USERS/SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SN/USERS/SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case "SN/USERS/TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "SN/USERS/TOGGLE-IS-FOLLOWING-PROGRESS": {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        case "SN/USERS/SET-FILTER": {
            return {
                ...state,
                filter: action.payload
            }
        }
        default:
            return state
    }
}

export const followSuccess = (userID: number) => ({type: "SN/USERS/FOLLOW", userID} as const)
export const unfollowSuccess = (userID: number) => ({type: "SN/USERS/UNFOLLOW", userID} as const)
export const setUsers = (users: Array<UserType>) => ({type: "SN/USERS/SET-USERS", users} as const)
export const setCurrentPage = (currentPage: number) => ({type: "SN/USERS/SET-CURRENT-PAGE", currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: "SN/USERS/SET-TOTAL-USERS-COUNT",
    totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: "SN/USERS/TOGGLE-IS-FETCHING", isFetching} as const)
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => ({
    type: "SN/USERS/TOGGLE-IS-FOLLOWING-PROGRESS",
    isFetching,
    userId
} as const)
export const setFilter = (filter: FilterType) => ({type: "SN/USERS/SET-FILTER", payload: filter} as const)

export const requestUsers = (page: number, pageSize: number, filter: FilterType): AppThunk => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    dispatch(setFilter(filter))
    let data = await usersAPI.getUsers(page, pageSize, filter.term, filter.friend)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}
const _followUnfollowFlow = async (dispatch: Dispatch<UsersActionType>, userId: number, apiMethod: Function, actionCreator: (userId: number) => UsersActionType) => {
    debugger
    dispatch(toggleFollowingInProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}
export const follow = (userId: number): AppThunk => async (dispatch) => {
    debugger
    await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(userId), followSuccess)
}
export const unfollow = (userId: number): AppThunk => async (dispatch) => {
    debugger
    await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(userId), unfollowSuccess)
}

export default usersReducer