import {chatAPI, ChatMessageAPIType, StatusType} from "../api/chat-api";
import {AppThunk} from "./redux-store";
import {Dispatch} from "redux";
import {v1} from 'uuid'

export type ChatActionType = ReturnType<typeof messagesReceived> | ReturnType<typeof statusChanged>
export type ChatInitialStateType = typeof initialState
export type ChatMessageType = ChatMessageAPIType & {id: string}

let initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType
}

const chatReducer = (state = initialState, action: ChatActionType): ChatInitialStateType => {
    switch (action.type) {
        case "SN/CHAT/MESSAGES-RECEIVED": {
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages.map(m => ({...m, id: v1()}))].filter((m, index, array) => index >= array.length - 100)
            }
        }
        case "SN/CHAT/STATUS-CHANGED": {
            return {
                ...state,
                status: action.payload.status
            }
        }
        default:
            return state
    }
}

export const messagesReceived = (messages: ChatMessageAPIType[]) => ({type: "SN/CHAT/MESSAGES-RECEIVED", payload: {messages}} as const)
export const statusChanged = (status: StatusType) => ({type: "SN/CHAT/STATUS-CHANGED", payload: {status}} as const)

let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(messagesReceived(messages))
        }
    }
    return  _newMessageHandler
}

let _statusChangedHandler: ((status: StatusType) => void) | null = null
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(statusChanged(status))
        }
    }
    return  _statusChangedHandler
}

export const startMessagesListening = (): AppThunk => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
}
export const stopMessagesListening = (): AppThunk => async (dispatch) => {
    chatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch))
    chatAPI.stop()
}
export const sendMessage = (message: string): AppThunk => async (dispatch) => {
    chatAPI.sendMessage(message)
}

export default chatReducer