import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfileInitialStateType} from "../../../redux/profile-reducer";
import AddPostForm, {AddPostFormValuesType} from "./AddPostForm/AddPostForm";

export type MapPropsType = {
    profilePage: ProfileInitialStateType
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = React.memo((props) => {

    let postsElements = [...props.profilePage.posts].reverse().map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>)

    let onAddPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
})

export default MyPosts