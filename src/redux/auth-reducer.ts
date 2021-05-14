import {ResultCodesEnum, ResultCodesForCaptcha} from "../api/api";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";
import { authAPI } from "../api/auth-api";
import {securityAPI} from "../api/security-api";

export type AuthActionType = ReturnType<typeof setAuthUserData> | ReturnType<typeof getCaptchaUrlSuccess>
export type AuthInitialStateType = typeof initialState

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

const authReducer = (state = initialState, action: AuthActionType): AuthInitialStateType => {
    switch (action.type) {
        case "social-network/auth/SET-USER-DATA":
            return {
                ...state,
                ...action.payload,
                isAuth: action.isAuth
            }
        case "social-network/auth/GET-CAPTCHA-URL-SUCCESS":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: "social-network/auth/SET-USER-DATA",
    payload: {userId, email, login},
    isAuth
} as const)
export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
    type: "social-network/auth/GET-CAPTCHA-URL-SUCCESS",
    payload: {captchaUrl}
} as const)

export const getAuthUserData = (): AppThunk => async (dispatch) => {
    let data = await authAPI.me()
    if (data.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string): AppThunk => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        if (data.resultCode === ResultCodesForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        let message = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const logout = (): AppThunk => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUserData( null, null, null, false))
    }
}
export const getCaptchaUrl = (): AppThunk => async (dispatch) => {
    let data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer
