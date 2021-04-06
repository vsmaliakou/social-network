import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {StateType, UserProfileType} from "../../redux/store";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    profilePage: UserProfileType
    status: string
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
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
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state: StateType): MapStateToPropsType => ({
    profilePage: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)