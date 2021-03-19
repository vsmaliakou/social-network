import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {StateType, UserProfileType} from "../../redux/store";
import { withRouter, RouteComponentProps } from "react-router-dom";

type MapStateToPropsType = {
    profilePage: UserProfileType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType | null) => void
}
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
type PathParamType = {
    userId: string
}
type ProfileContainerType = RouteComponentProps<PathParamType> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state: StateType): MapStateToPropsType => ({
    profilePage: state.profilePage.profile
})

let withUrlDataContaunerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContaunerComponent)