import {DataType, AuthorizationType} from "./store"
import {authAPI} from "../api/api";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";

export type AuthActionType = ReturnType<typeof setAuthUserData>

let initialState = {
    data: {
        email: null,
        id: null,
        login: null,
    },
    isAuth: false
}

const authReducer = (state: AuthorizationType = initialState, action: AuthActionType) => {
    switch (action.type) {
        case "social-network/auth/SET-USER-DATA":
            return {
                ...state,
                data: action.data,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

export const setAuthUserData = (data: DataType, isAuth: boolean) => ({
    type: "social-network/auth/SET-USER-DATA",
    data: data,
    isAuth
} as const)

export const getAuthUserData = (): AppThunk => async (dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(response.data.data, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const logout = (): AppThunk => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData({email: null, id: null, login: null}, false))
    }
}

export default authReducer
