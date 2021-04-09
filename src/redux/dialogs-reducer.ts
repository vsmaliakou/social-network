import {DialogsPageType} from "./store";

export type DialogsActionType = ReturnType<typeof sendMessage>
    | ReturnType<typeof updateNewMessageBody>

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
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"},
    ],
    newMessageBody: ""
}

const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionType) => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            let body = state.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}],
                newMessageBody: ""
            }
        }
        case "UPDATE-NEW-MESSAGE-BODY": {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        default:
            return state
    }
}

export const sendMessage = () => ({type: "SEND-MESSAGE"} as const)
export const updateNewMessageBody = (text: string) => ({type: "UPDATE-NEW-MESSAGE-BODY", body: text} as const)

export default dialogsReducer