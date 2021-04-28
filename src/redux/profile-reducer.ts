import {PhotosType, ProfilePageType, UserProfileType} from "./store";
import {profileAPI, usersAPI} from "../api/api";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";

export type ProfileActionType = ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 12},
        {id: 2, message: "It's my first post", likeCount: 11}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: 3, message: action.newPostText, likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
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
        case "SAVE-PHOTO-SUCCESS": {
            return {
                ...state,
                profile: state.profile && {...state.profile, photos: action.photos}
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
export const savePhotoSuccess = (photos: PhotosType) => ({type: "SAVE-PHOTO-SUCCESS", photos} as const)

export const getUserProfile = (userId: string): AppThunk => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getUserStatus = (userId: string): AppThunk => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response.data))
}
export const updateUserStatus = (status: string): AppThunk => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}
export const savePhoto = (file: File): AppThunk => async (dispatch) => {
    let response = await profileAPI.putPhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile: UserProfileType): AppThunk => async (dispatch, getState) => {
    const userId = JSON.stringify(getState().auth.data.id)
    const response = await profileAPI.putProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer