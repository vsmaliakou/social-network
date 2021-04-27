import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/store";

type ProfileType = {
    profilePage: UserProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo
                profilePage={props.profilePage}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile