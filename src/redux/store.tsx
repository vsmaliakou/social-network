import React from 'react';
import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
import usersReducer, {followAC, setUsersAC, unfollowAC} from "./users-reduser";

export type PostType = {
    message: string
    likeCount: number
}
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
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
    followed: boolean
    photoURL: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type UsersPageType = {
    users: Array<UserType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersPageType
}
export type ActionType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageBodyCreator> |
    ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>
export type StoreType = {
    _state: StateType
    _onChange: () => void
    getState: () => StateType
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionType) => void
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {message: "Hi, how are you?", likeCount: 12},
                {message: "It's my first post", likeCount: 11}
            ],
            newPostText: 'it-kamasutra.com'
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
            users: [
                /*{
                    id: 1,
                    fullName: 'Redhead',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'},
                    followed: false,
                    photoURL: 'https://sun9-66.userapi.com/impf/c631628/v631628586/37d83/MIg3YVWTzOM.jpg?size=677x807&quality=96&sign=df68af645de6289b2b31f925882b13db&type=album'
                },
                {
                    id: 2,
                    fullName: 'Raich',
                    status: 'I am a boss too',
                    location: {city: 'Moscow', country: 'Russia'},
                    followed: true,
                    photoURL: 'https://sun9-1.userapi.com/impf/aW_quVdtk_NQQip8yIo-D1z1Wx1we6CM4Bis5g/KcTTeYtbP80.jpg?size=605x807&quality=96&sign=5c39cee2a41038e0844cb7b0a2559f5e&type=album'
                },
                {
                    id: 3,
                    fullName: 'Perch',
                    status: 'I am a boss too',
                    location: {city: 'Kiev', country: 'Ukrane'},
                    followed: false,
                    photoURL: 'https://sun9-60.userapi.com/impg/_Pf4VgI4n7XTcYN-S-sgLQTDguhgd7_b3ZE8Jg/LmUv_FmqnWE.jpg?size=807x807&quality=96&sign=f61cb66ac1f4c199a4139fc22ef80c7e&type=album'
                },*/
            ]
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

export default store