import React from "react";
import {ActionType, PostType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

export type MyPostsContainerType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionType) => void
}

const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = (text: string|undefined) => {
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return (
        <MyPosts posts={props.posts}
                 newPostText={props.newPostText}
                 addPost={addPost}
                 updateNewPostText={onPostChange}/>
    )
}

export default MyPostsContainer