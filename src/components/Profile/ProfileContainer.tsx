import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, savePhoto, updateUserStatus} from "../../redux/profile-reducer";
import {UserProfileType} from "../../redux/store";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import { AppRootStateType } from "../../redux/redux-store";

type MapStateToPropsType = {
    profilePage: UserProfileType
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
    savePhoto: (file: File) => void
}
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
type PathParamType = {
    userId: string
}
export type ProfileContainerType = RouteComponentProps<PathParamType> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = JSON.stringify(this.props.authorizedUserId)
            if(!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<ProfileContainerType>, prevState: Readonly<{}>, snapshot?: any) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                isOwner={!this.props.match.params.userId}
            />
        )
    }
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.data.id,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)