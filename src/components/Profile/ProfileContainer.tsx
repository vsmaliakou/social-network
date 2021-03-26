import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {StateType, UserProfileType} from "../../redux/store";
import {withRouter, RouteComponentProps, Redirect} from "react-router-dom";

type MapStateToPropsType = {
    profilePage: UserProfileType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
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
        this.props.getUserProfile(userId)
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={'login'}/>

        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state: StateType): MapStateToPropsType => ({
    profilePage: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let withUrlDataContaunerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContaunerComponent)