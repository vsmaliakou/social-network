import React from "react";
import s from './ProfileInfo.module.css'
import {UserProfileType} from "../../../redux/store";
import Preloader from "../../Common/Preloader/Preloader";

type ProfileInfoType = {
    profilePage: UserProfileType
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
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo