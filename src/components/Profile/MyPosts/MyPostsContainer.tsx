import React from "react";
import {ActionType, ProfilePageType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

export type MyPostsContainerType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = (text: string) => {
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts profilePage={props.profilePage}
                 addPost={addPost}
                 updateNewPostText={onPostChange}/>
    )
}

export default MyPostsContainer