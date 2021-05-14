import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "./types";
import { profileAPI } from "../api/profile-api";
import {ResultCodesEnum} from "../api/api";

export type ProfileActionType = ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>

export type ProfileInitialStateType = typeof initialState

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 12},
        {id: 2, message: "It's my first post", likeCount: 11}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ""
}

const profileReducer = (state = initialState, action: ProfileActionType): ProfileInitialStateType => {
    switch (action.type) {
        case "SN/PROFILE/ADD-POST": {
            let newPost = {
                id: 3, message: action.newPostText, likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case "SN/PROFILE/SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        case "SN/PROFILE/SET-USER-STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        case "SN/PROFILE/DELETE-POST": {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case "SN/PROFILE/SAVE-PHOTO-SUCCESS": {
            return {
                ...state,
                profile: state.profile && {...state.profile, photos: action.photos}
            }
        }
        default:
            return state
    }
}

export const addPost = (newPostText: string) => ({type: "SN/PROFILE/ADD-POST", newPostText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: "SN/PROFILE/SET-USER-PROFILE", profile} as const)
export const setUserStatus = (status: string) => ({type: "SN/PROFILE/SET-USER-STATUS", status} as const)
export const deletePost = (postId: number) => ({type: "SN/PROFILE/DELETE-POST", postId} as const)
export const savePhotoSuccess = (photos: PhotosType) => ({type: "SN/PROFILE/SAVE-PHOTO-SUCCESS", photos} as const)

export const getUserProfile = (userId: number): AppThunk => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}
export const getUserStatus = (userId: number): AppThunk => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(data))
}
export const updateUserStatus = (status: string): AppThunk => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(setUserStatus(status))
    }
}
export const savePhoto = (file: File): AppThunk => async (dispatch) => {
    let data = await profileAPI.putPhoto(file)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(savePhotoSuccess(data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType): AppThunk => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await profileAPI.putProfile(profile)
    if (data.resultCode === ResultCodesEnum.Success) {
        if(userId !== null){
            dispatch(getUserProfile(userId))
        } else {
            throw new Error ("userId can't be null")
        }
    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}))
        return Promise.reject(data.messages[0])
    }
}

export default profileReducer