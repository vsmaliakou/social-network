import React from 'react';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

export type PostType = {
    message: string
    likeCount: number
}
export type DialogItemType = {
    id: number
    name: string
}
export type MessageType = {
    message: string
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
export  type ActionType = {
    type: string
    newText?: string | any
    body?: string | any
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let store = {
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
                {message: "Hi"},
                {message: "How is your it-kamasutra?"},
                {message: "Yo"},
                {message: "Yo"},
                {message: "Yo"},
                {message: "Yo"},
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber(state: StateType) {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionType) { //{type: 'ADD-POST'}
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this.getState())
    }
}

export default store