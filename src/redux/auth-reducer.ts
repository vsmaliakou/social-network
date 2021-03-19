import { ActionType, DataType, AuthorizationType } from "./store"

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
            debugger
            return {
                ...state,
                data: action.data,
                isAuth: true
            }

        default:
            return state
    }
}

export const setAuthUserData = (data: DataType) => { // ПОПРОБОВАТЬ ДЕСТРУКТУРИРОВАТЬ
    debugger
    return {
        type: SET_USER_DATA,
        data: data
    } as const
}

export default authReducer
