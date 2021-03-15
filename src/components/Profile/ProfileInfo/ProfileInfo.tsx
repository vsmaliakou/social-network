import React from "react";
import s from './ProfileInfo.module.css'
import {UserProfileType} from "../../../redux/store";
import Preloader from "../../Common/Preloader/Preloader";

type ProfileInfoType = {
    profile: UserProfileType
}

const ProfileInfo: React.FC<ProfileInfoType> = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src='https://www.laoistoday.ie/wp-content/uploads/2018/01/Digital-technology.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo