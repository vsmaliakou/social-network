import {AppThunk} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

export type AppActionType = ReturnType<typeof initializedSuccess>

export type AppInitialStateType = typeof initialState

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action: AppActionType): AppInitialStateType => {
    switch (action.type) {
        case 'SN/APP/INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: 'SN/APP/INITIALIZED-SUCCESS'} as const)

export const initializeApp = (): AppThunk => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

export default appReducer
