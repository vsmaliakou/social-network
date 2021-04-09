import React from "react";
import {addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        profilePage: state.profilePage
    }
}

export default connect(mapStateToProps, {
    addPost})(MyPosts)