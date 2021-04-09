import React from 'react';

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