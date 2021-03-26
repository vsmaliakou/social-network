import React from 'react';
import profileReducer, {addPost, setUserProfile, updateNewPostText} from "./profile-reducer";
import dialogsReducer, {sendMessage, updateNewMessageBody} from "./dialogs-reducer";
import usersReducer, {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollowSuccess,
    toggleFollowingInProgress
} from "./users-reduser";
import { setAuthUserData } from './auth-reducer';

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
export type DialogItemType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
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
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: UserProfileType
}
export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
export type DataType = {
    email: string | null
    id: number | null
    login: string | null
}
export type AuthorizationType = {
    data: DataType
    isAuth: boolean
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersPageType
    auth: AuthorizationType
}
export type ActionType = ReturnType<typeof addPost> | ReturnType<typeof updateNewPostText> |
    ReturnType<typeof setUserProfile> | ReturnType<typeof sendMessage> |
    ReturnType<typeof updateNewMessageBody> | ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess> | ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> | ReturnType<typeof toggleFollowingInProgress> |
    ReturnType<typeof setAuthUserData>
export type StoreType = {
    _state: StateType
    _onChange: () => void
    getState: () => StateType
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionType) => void
}
/*

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {message: "Hi, how are you?", likeCount: 12},
                {message: "It's my first post", likeCount: 11}
            ],
            newPostText: 'it-kamasutra.com',
            profile: {
                aboutMe: "",
                contacts: {
                    facebook: "",
                    vk: "",
                    instagram: "",
                },
                lookingForAJob: false,
                lookingForAJobDescription: "",
                fullName: "",
                userId: 0,
                photos: {
                    small: "",
                    large: ""
                }
            }
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Valera"},
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your it-kamasutra?"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"},
                {id: 6, message: "Yo"},
            ],
            newMessageBody: ""
        },
        usersPage: {
            users: [],
            pageSize: 0,
            totalUsersCount: 0,
            currentPage: 0,
            isFetching: false
        }
    },
    _onChange() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(callback) {
        this._onChange = callback
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.usersPage = usersReducer(this._state.usersPage, action)
        this._onChange()
    }
}

export default store*/
