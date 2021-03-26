import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {StateType, UserProfileType} from "../../redux/store";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    profilePage: UserProfileType
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
type PathParamType = {
    userId: string
}
export type ProfileContainerType = RouteComponentProps<PathParamType> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state: StateType): MapStateToPropsType => ({
    profilePage: state.profilePage.profile,
})

let withUrlDataContaunerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContaunerComponent)