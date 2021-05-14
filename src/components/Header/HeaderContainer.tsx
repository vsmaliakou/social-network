import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AuthInitialStateType, logout} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    auth: AuthInitialStateType
}
type mapDispatchToProps = {
    logout: () => void
}
type HeaderContainerType = MapStateToPropsType & mapDispatchToProps

class HeaderContainer extends React.Component<HeaderContainerType> {

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        auth: state.auth
    }
}

export default connect<MapStateToPropsType, mapDispatchToProps, {}, AppRootStateType>(mapStateToProps, {logout})(HeaderContainer)