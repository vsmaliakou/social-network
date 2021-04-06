import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

export let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store

export default store