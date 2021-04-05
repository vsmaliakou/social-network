import {ActionType, ProfilePageType, ProfileThunkType, UserProfileType} from "./store";
import {profileAPI, usersAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 12},
        {id: 2, message: "It's my first post", likeCount: 11}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: ""
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3, message: state.newPostText, likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export const addPost = () => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostText = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}
export const setUserProfile = (profile: UserProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    } as const
}
export const setUserStatus = (status: string) => {
    return {
        type: SET_USER_STATUS,
        status
    } as const
}
export const getUserProfile = (userId: string): ProfileThunkType => {

    return (dispatch: ThunkDispatch<ProfilePageType, unknown, ActionType>) => {

        return (
            usersAPI.getProfile(userId)
                .then(response => {
                    dispatch(setUserProfile(response.data))
                })
        )
    }

}
export const getUserStatus = (userId: string): ProfileThunkType => {

    return (dispatch: ThunkDispatch<ProfilePageType, unknown, ActionType>) => {

        return (
            profileAPI.getStatus(userId)
                .then(response => {
                    dispatch(setUserStatus(response.data))
                })
        )
    }

}
export const updateUserStatus = (status: string): ProfileThunkType => {

    return (dispatch: ThunkDispatch<ProfilePageType, unknown, ActionType>) => {

        return (
            profileAPI.updateStatus(status)
                .then(response => {
                    if(response.data.resultCode === 0) {
                        dispatch(setUserStatus(status))
                    }
                })
        )
    }

}

export default profileReducer