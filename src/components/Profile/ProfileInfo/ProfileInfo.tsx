import React from "react";
import s from './ProfileInfo.module.css'
import {UserProfileType} from "../../../redux/store";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type ProfileInfoType = {
    profilePage: UserProfileType
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileInfo: React.FC<ProfileInfoType> = ({profilePage, status, updateUserStatus}) => {

    if (!profilePage) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.imgBlock}>
                <img src='https://www.laoistoday.ie/wp-content/uploads/2018/01/Digital-technology.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profilePage.photos.large}/>
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo