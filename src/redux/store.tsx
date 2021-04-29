import React from 'react';

// Profile
export type PostType = {
    id: number
    message: string
    likeCount: number
}
export type PhotosType = {
    small: string,
    large: string
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type UserProfileType = {
    aboutMe: string
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: PhotosType
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
    captcha: string | null
}
export type AuthorizationType = {
    data: DataType
    isAuth: boolean
    captchaUrl: string | null
}

//App
export type AppInitializedType = {
    initialized: boolean
}