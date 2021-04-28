import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import {ContactsType, UserProfileType} from "../../../redux/store";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.jpg'
import ProfileDataForm from "./ProfileDataForm";

type ProfileInfoType = {
    profilePage: UserProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (formData: UserProfileType) => Promise<any>
}
type ProfileDataType = {
    profilePage: UserProfileType
    isOwner: boolean
    goToEditMode: () => void
}
type ContactType = {
    contactTitle: string
    contactValue: string
}

const ProfileInfo: React.FC<ProfileInfoType> = ({
                                                    profilePage,
                                                    status,
                                                    updateUserStatus,
                                                    isOwner,
                                                    savePhoto,
                                                    saveProfile
                                                }) => {

    let [editMode, setEditMode] = useState(false)

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: UserProfileType) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profilePage?.photos.large || userPhoto} className={s.mainPhoto}/>
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

const ProfileData: React.FC<ProfileDataType> = ({profilePage, isOwner, goToEditMode}) => {

    if (!profilePage) {
        return <Preloader/>
    }

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
export const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
    )
}

export default ProfileInfo