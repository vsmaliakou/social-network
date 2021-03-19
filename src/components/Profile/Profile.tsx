import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/store";

type ProfileType = {
    profilePage: UserProfileType
}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo profilePage={props.profilePage}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile