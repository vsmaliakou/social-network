import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
            store => {
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                let onPostChange = (text: string) => {
                    store.dispatch(updateNewPostTextActionCreator(text))
                }
                return <MyPosts profilePage={store.getState().profilePage}
                         addPost={addPost}
                         updateNewPostText={onPostChange}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer