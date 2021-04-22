import {ProfilePageType, UserProfileType} from "./store";
import {profileAPI, usersAPI} from "../api/api";
import {AppThunk} from "./redux-store";

export type ProfileActionType = ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof deletePost>

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 12},
        {id: 2, message: "It's my first post", likeCount: 11}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: 3, message: action.newPostText, likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
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
        case "DELETE-POST": {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        default:
            return state
    }
}

export const addPost = (newPostText: string) => ({type: "ADD-POST", newPostText} as const)
export const setUserProfile = (profile: UserProfileType) => ({type: "SET-USER-PROFILE", profile: profile} as const)
export const setUserStatus = (status: string) => ({type: "SET-USER-STATUS", status} as const)
export const deletePost = (postId: number) => ({type: "DELETE-POST", postId} as const)

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