import {AppInitializedType} from "./store"
import {AppThunk} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

export type AppActionType = ReturnType<typeof initializedSuccess>

let initialState = {
    initialized: false
}

const appReducer = (state: AppInitializedType = initialState, action: AppActionType) => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: "INITIALIZED-SUCCESS"} as const)

export const initializeApp = (): AppThunk => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

export default appReducer
