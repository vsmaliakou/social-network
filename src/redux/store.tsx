import React from 'react';
import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";

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
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type ActionType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageBodyCreator>
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
        this._onChange()
    }
}

export default store