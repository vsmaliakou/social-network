import React from 'react';
import {addPost, setUserProfile, updateNewPostText, setUserStatus} from "./profile-reducer";
import {sendMessage, updateNewMessageBody} from "./dialogs-reducer";
import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollowSuccess,
    toggleFollowingInProgress
} from "./users-reduser";
import { setAuthUserData } from './auth-reducer';
import {ThunkAction} from "redux-thunk";
import {reducers} from "./redux-store";

// Profile
export type PostType = {
    message: string
    likeCount: number
}
export type UserProfileType = {
    aboutMe: string
    contacts: {
        facebook: string,
        vk: string,
        instagram: string,
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
} | null
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: UserProfileType
    status: string
}

// Dialogs
export type DialogItemType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageBody: string
}

// Users
export type UserType = {
    id: number
    name: string
    status: string
    location: {
        city: string
        country: string
    }
    followed: boolean
    photos: {
        small: string
    }
}
export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

//  Authorization
export type DataType = {
    email: string | null
    id: number | null
    login: string | null
}
export type AuthorizationType = {
    data: DataType
    isAuth: boolean
}

// redusers
type ReducerType = typeof reducers
export type StateType = ReturnType<ReducerType>

// Action
export type ActionType = ReturnType<typeof addPost> | ReturnType<typeof updateNewPostText> |
    ReturnType<typeof setUserProfile> | ReturnType<typeof setUserStatus> |
    ReturnType<typeof sendMessage> | ReturnType<typeof updateNewMessageBody> |
    ReturnType<typeof followSuccess> | ReturnType<typeof unfollowSuccess> |
    ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> | ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof toggleFollowingInProgress> | ReturnType<typeof setAuthUserData>

// Thunks
export type UsersThunkType = ThunkAction<Promise<void> | void, UsersPageType, unknown, ActionType>
export type ProfileThunkType = ThunkAction<Promise<void> | void, ProfilePageType, unknown, ActionType>
export type AuthThunkType = ThunkAction<Promise<void> | void, AuthorizationType, unknown, ActionType>
