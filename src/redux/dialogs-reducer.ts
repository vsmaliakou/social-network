import { DialogType, MessageType } from "./types"

export type DialogsActionType = ReturnType<typeof sendMessage>

export type DialogsInitialStateType = typeof initialState

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"},
    ] as Array<MessageType>
}

const dialogsReducer = (state = initialState, action: DialogsActionType): DialogsInitialStateType => {
    switch (action.type) {
        case "SN/DIALOGS/SEND-MESSAGE": {
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}],
            }
        }
        default:
            return state
    }
}

export const sendMessage = (newMessageBody: string) => ({type: "SN/DIALOGS/SEND-MESSAGE", newMessageBody} as const)

export default dialogsReducer