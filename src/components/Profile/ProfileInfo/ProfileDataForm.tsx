import React from "react";
import {UserProfileType} from "../../../redux/store";
import {createField, Input} from "../../Common/FormsControls/FormsControls";

type ProfileDataFormType = {
    profilePage: UserProfileType
}
const ProfileDataForm: React.FC<ProfileDataFormType> = ({profilePage}) => {
    return (
        <form>
            {/*<div><button onClick={goToEditMode}>save</button></div>*/}
            {/*<div>*/}
            {/*    <b>Full name</b>: {createField("Full name", "fullName", Input, [])}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <b>Looking for a job</b>: {profilePage.lookingForAJob ? "yes" : "no"}*/}
            {/*</div>*/}
            {/*{profilePage.lookingForAJob &&*/}
            {/*<div>*/}
            {/*    <b>My professional skills</b>: {profilePage.lookingForAJobDescription}*/}
            {/*</div>*/}
            {/*}*/}
            {/*<div>*/}
            {/*    <b>About me</b>: {profilePage.aboutMe}*/}
            {/*</div>*/}
            {/*/!*<div>*!/*/}
            {/*/!*    <b>Contacts</b>: {Object.keys(profilePage.contacts).map(key => {*!/*/}
            {/*/!*        return <Contact key={key} contactTitle={key} contactValue={profilePage.contacts[key]}/>*!/*/}
            {/*/!*})}*!/*/}
            {/*/!*</div>*!/*/}
        </form>
    )
}

export default ProfileDataForm