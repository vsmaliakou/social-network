import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

export type MyPostsType = {
    profilePage: ProfilePageType
    addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MyPostsType> = React.memo((props) => {

    let postsElements = [...props.profilePage.posts].reverse().map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>)

    let onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
})

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps>  = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name="newPostText"
                    component={Textarea}
                    placeholder="Post message"
                    validate={[requiredField, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts