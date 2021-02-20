import {ActionType, DialogsPageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ""
            state.messages.push({message: body})
            return state
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text: string | any) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: text})

export default dialogsReducer