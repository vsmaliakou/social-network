import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {StateType, AuthorizationType} from "../../redux/store";
import {getAuthUserData} from "../../redux/auth-reducer";

type MapStateToPropsType = {
    auth: AuthorizationType
}
type mapDispatchToProps = {
    getAuthUserData: () => void
}
type HeaderContainerType = MapStateToPropsType & mapDispatchToProps

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        auth: state.auth
    }


}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)