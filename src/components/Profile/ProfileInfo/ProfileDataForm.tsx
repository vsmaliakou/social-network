import React from "react";
import s from './ProfileInfo.module.css'
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../Common/FormsControls/FormsControls";
import {UserProfileType} from "../../../redux/store";

type ProfileDataFormType = {
    profilePage: UserProfileType                    //   FIX CONTACTS ---> Object.keys(profilePage ?  profilePage.contacts : "")
}

const ProfileDataForm: React.FC<InjectedFormProps<UserProfileType, ProfileDataFormType> & ProfileDataFormType> = ({handleSubmit, profilePage, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>save</button></div>
            {
                error && <div className={s.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <b>Full name</b>: {createField("Full name", "fullName", Input, [])}
            </div>
            <div>
                <b>Looking for a job</b>: {createField("", "lookingForAJob", Input, [], "checkbox")}
            </div>
            <div>
                <b>My professional skills</b>: {createField("My professional skills", "lookingForAJobDescription", Textarea, [])}
            </div>
            <div>
                <b>About me</b>: {createField("About me", "aboutMe", Textarea, [])}
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
const ProfileDataFormReduxForm = reduxForm<UserProfileType, ProfileDataFormType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm