import {chatAPI, ChatMessageType} from "../api/chat-api";
import {AppThunk} from "./redux-store";
import {Dispatch} from "redux";

export type ChatActionType = ReturnType<typeof messagesReceived>

export type ChatInitialStateType = typeof initialState

let initialState = {
    messages: [] as ChatMessageType[]
}

const chatReducer = (state = initialState, action: ChatActionType): ChatInitialStateType => {
    switch (action.type) {
        case "SN/CHAT/MESSAGES-RECEIVED": {
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            }
        }
        default:
            return state
    }
}

export const messagesReceived = (messages: ChatMessageType[]) => ({type: "SN/CHAT/MESSAGES-RECEIVED", payload: {messages}} as const)

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(messagesReceived(messages))
        }
    }
    return  _newMessageHandler
}

export const startMessagesListening = (): AppThunk => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe(newMessageHandlerCreator(dispatch))
}
export const stopMessagesListening = (): AppThunk => async (dispatch) => {
    chatAPI.unsubscribe(newMessageHandlerCreator(dispatch))
    chatAPI.stop()
}
export const sendMessage = (message: string): AppThunk => async (dispatch) => {
    chatAPI.sendMessage(message)
}

export default chatReducer