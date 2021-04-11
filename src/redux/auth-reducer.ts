import {DataType, AuthorizationType} from "./store"
import {authAPI} from "../api/api";
import {AppThunk} from "./redux-store";

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
        case "SET-USER-DATA":
            return {
                ...state,
                data: action.data,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

export const setAuthUserData = (data: DataType, isAuth: boolean) => ({type: "SET-USER-DATA",  data: data, isAuth} as const)

export const getAuthUserData = (): AppThunk => {
    return (dispatch) => {
        return (
            authAPI.me()
                .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(setAuthUserData(response.data.data, true))
                    }
                })
        )
    }
}
export const login = (email: string, password: string, rememberMe: boolean): AppThunk => {
    return (dispatch) => {
        return (
            authAPI.login(email, password, rememberMe)
                .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(getAuthUserData())
                    }
                })
        )
    }
}
export const logout = (): AppThunk => {
    return (dispatch) => {
        return (
            authAPI.logout()
                .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(setAuthUserData({email: null, id: null, login: null}, false))
                    }
                })
        )
    }
}

export default authReducer
