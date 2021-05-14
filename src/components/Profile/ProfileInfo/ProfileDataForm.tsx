import React from "react";
import s from './ProfileInfo.module.css'
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input, Textarea} from "../../Common/FormsControls/FormsControls";
import { ProfileType } from "../../../redux/types";

type ProfileDataFormType = {
    profilePage: ProfileType
}
type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, ProfileDataFormType> & ProfileDataFormType> = ({handleSubmit, profilePage, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>save</button></div>
            {
                error && <div className={s.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <b>Full name</b>: {createField<ProfileTypeKeys>("Full name", "fullName", Input, [])}
            </div>
            <div>
                <b>Looking for a job</b>: {createField<ProfileTypeKeys>("", "lookingForAJob", Input, [], "checkbox")}
            </div>
            <div>
                <b>My professional skills</b>: {createField<ProfileTypeKeys>("My professional skills", "lookingForAJobDescription", Textarea, [])}
            </div>
            <div>
                <b>About me</b>: {createField<ProfileTypeKeys>("About me", "aboutMe", Textarea, [])}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profilePage ?  profilePage.contacts : "").map((key) => {
                return <div key={key} className={s.contact}>
                    <b>{key}: {createField(key, "contacts." + key, Input, [])}</b>
                </div>
            })}
            </div>
        </form>
    )
}
const ProfileDataFormReduxForm = reduxForm<ProfileType, ProfileDataFormType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm