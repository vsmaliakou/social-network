import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer profilePage={props.profilePage}
                              dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile