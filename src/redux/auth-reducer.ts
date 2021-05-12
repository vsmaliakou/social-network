import {DataType, AuthorizationType} from "./store"
import {authAPI, securityAPI} from "../api/api";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";

export type AuthActionType = ReturnType<typeof setAuthUserData> | ReturnType<typeof getCaptchaUrlSuccess>

let initialState = {
    data: {
        email: null,
        id: null,
        login: null,
        captcha: null
    },
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state: AuthorizationType = initialState, action: AuthActionType) => {
    switch (action.type) {
        case "social-network/auth/SET-USER-DATA":
            return {
                ...state,
                data: action.data,
                isAuth: action.isAuth
            }
        case "social-network/auth/GET-CAPTCHA-URL-SUCCESS":
            return {
                ...state,
                captchaUrl: action.captchaUrl
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
export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
    type: "social-network/auth/GET-CAPTCHA-URL-SUCCESS",
    captchaUrl
} as const)

console.log('test')

export const getAuthUserData = (): AppThunk => async (dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(response.data.data, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string): AppThunk => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if(response.data.resultCode === 10){
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const logout = (): AppThunk => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData({email: null, id: null, login: null, captcha: null}, false))
    }
}
export const getCaptchaUrl = (): AppThunk => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer
