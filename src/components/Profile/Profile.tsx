import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/store";

type ProfileType = {
    profilePage: UserProfileType
    status: string
    updateUserStatus: (status: string) => void
}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo
                profilePage={props.profilePage}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile