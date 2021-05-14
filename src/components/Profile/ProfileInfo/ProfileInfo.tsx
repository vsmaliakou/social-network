import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.jpg'
import ProfileDataForm from "./ProfileDataForm";
import {ProfileType, ContactsType} from "../../../redux/types";

type ProfileInfoPropsType = {
    profilePage: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    // saveProfile: (formData: ProfileType) => Promise<any>
    saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
                                                         profilePage,
                                                         status,
                                                         updateUserStatus,
                                                         isOwner,
                                                         savePhoto,
                                                         saveProfile
                                                     }) => {

    let [editMode, setEditMode] = useState(false)

    if (!profilePage) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profilePage?.photos.large || userPhoto} className={s.mainPhoto} alt="img"/>
                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataForm
                        profilePage={profilePage}
                        initialValues={profilePage}
                        onSubmit={onSubmit}/>
                    : <ProfileData
                        profilePage={profilePage}
                        isOwner={isOwner}
                        goToEditMode={() => {
                            setEditMode(true)
                        }}
                    />}

                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </div>
    )
}

type ProfileDataType = {
    profilePage: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataType> = ({profilePage, isOwner, goToEditMode}) => {

    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}
            <div>
                <b>Full name</b>: {profilePage.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profilePage.lookingForAJob ? "yes" : "no"}
            </div>
            {profilePage.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profilePage.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me</b>: {profilePage.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profilePage.contacts).map((key) => {
                return <Contact key={key} contactTitle={key}
                                contactValue={profilePage.contacts[key as keyof ContactsType]}/>
            })}
            </div>
        </div>
    )
}

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

export const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
    )
}

export default ProfileInfo