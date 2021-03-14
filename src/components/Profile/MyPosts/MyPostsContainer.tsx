import React from "react";
import {addPost, updateNewPostText} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/store";

let mapStateToProps = (state: StateType) => {
    return {
        profilePage: state.profilePage
    }
}

export default connect(mapStateToProps, {
    addPost, updateNewPostText})(MyPosts)