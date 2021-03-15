import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {StateType, UserProfileType} from "../../redux/store";

type ProfileContainerType = {
    profile: UserProfileType
    setUserProfile: (profile: UserProfileType | null) => void
}

class ProfileContainer extends React.Component<ProfileContainerType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                debugger
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)