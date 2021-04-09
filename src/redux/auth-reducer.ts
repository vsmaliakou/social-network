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
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (data: DataType) => ({type: "SET-USER-DATA",  data: data} as const)

export const getAuthUserData = (): AppThunk => {
    return (dispatch) => {
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
