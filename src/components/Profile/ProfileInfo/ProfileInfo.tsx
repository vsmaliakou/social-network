import React from "react";
import s from './ProfileInfo.module.css'
import {UserProfileType} from "../../../redux/store";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type ProfileInfoType = {
    profilePage: UserProfileType
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileInfo: React.FC<ProfileInfoType> = (props) => {

    if (!props.profilePage) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.imgBlock}>
                <img src='https://www.laoistoday.ie/wp-content/uploads/2018/01/Digital-technology.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profilePage.photos.large}/>
                {/*<ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>*/}
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo