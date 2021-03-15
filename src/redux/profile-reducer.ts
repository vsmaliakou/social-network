import {ActionType, ProfilePageType, UserProfileType} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 12},
        {id: 2, message: "It's my first post", likeCount: 11}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null
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

export default profileReducer