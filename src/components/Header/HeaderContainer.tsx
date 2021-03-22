import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {StateType, DataType, AuthorizationType} from "../../redux/store";
import {setAuthUserData} from "../../redux/auth-reducer";

type MapStateToPropsType = {
    auth: AuthorizationType
}
type mapDispatchToProps = {
    setAuthUserData: (data: DataType) => void
}
type HeaderContainerType = MapStateToPropsType & mapDispatchToProps

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data)
                }
            })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)