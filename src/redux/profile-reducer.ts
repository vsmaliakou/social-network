import {ProfilePageType, UserProfileType} from "./store";
import {profileAPI, usersAPI} from "../api/api";
import {AppThunk} from "./redux-store";

export type ProfileActionType = ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 12},
        {id: 2, message: "It's my first post", likeCount: 11}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: ""
}

const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: 3, message: state.newPostText, likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        case "SET-USER-STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export const addPost = () => ({type: "ADD-POST"} as const)
export const updateNewPostText = (text: string) => ({type: "UPDATE-NEW-POST-TEXT", newText: text} as const)
export const setUserProfile = (profile: UserProfileType) => ({type: "SET-USER-PROFILE", profile: profile} as const)
export const setUserStatus = (status: string) => ({type: "SET-USER-STATUS", status} as const)

export const getUserProfile = (userId: string): AppThunk => {

    return (dispatch) => {

        return (
            usersAPI.getProfile(userId)
                .then(response => {
                    dispatch(setUserProfile(response.data))
                })
        )
    }

}
export const getUserStatus = (userId: string): AppThunk => {

    return (dispatch) => {

        return (
            profileAPI.getStatus(userId)
                .then(response => {
                    dispatch(setUserStatus(response.data))
                })
        )
    }

}
export const updateUserStatus = (status: string): AppThunk => {

    return (dispatch) => {

        return (
            profileAPI.updateStatus(status)
                .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(setUserStatus(status))
                    }
                })
        )
    }

}

export default profileReducer