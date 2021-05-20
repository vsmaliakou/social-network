import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionType} from "./profile-reducer";
import dialogsReducer, {DialogsActionType} from "./dialogs-reducer";
import usersReducer, {UsersActionType} from "./users-reducer";
import authReducer, {AuthActionType} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {FormAction, reducer as formReducer} from 'redux-form'
import appReducer, {AppActionType} from "./app-reducer";
import chatReducer, {ChatActionType} from "./chat-reducer";

export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    chat: chatReducer

})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppActionsType = ProfileActionType
    | DialogsActionType
    | AuthActionType
    | UsersActionType
    | AppActionType
    | ChatActionType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType | FormAction>

//@ts-ignore
window.store = store

export default store