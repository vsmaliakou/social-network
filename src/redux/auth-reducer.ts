import {ActionType, DataType, AuthorizationType, UserType, AuthThunkType} from "./store"
import {authAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";

const SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
    data: {
        email: null,
        id: null,
        login: null,
    },
    isAuth: false
}

const authReducer = (state: AuthorizationType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: action.data,
                isAuth: true
            }

        default:
            return state
    }
}

export const setAuthUserData = (data: DataType) => {
    return {
        type: SET_USER_DATA,
        data: data
    } as const
}
export const getAuthUserData = (): AuthThunkType => {

    return (dispatch: ThunkDispatch<DataType, unknown, ActionType>) => {

        return (
            authAPI.me()
                .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(setAuthUserData(response.data.data))
                    }
                })
        )
    }
}

export default authReducer
