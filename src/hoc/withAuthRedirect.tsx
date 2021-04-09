import React, {Component, ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import { AppRootStateType } from "../redux/redux-store";

type MapStateToProps = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppRootStateType): MapStateToProps => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect <T>(Component: ComponentType<T>) {
    class RedirectComponent extends React.Component<MapStateToProps> {
        render() {
            let {isAuth, ...restProps} = this.props
            if (!isAuth) return <Redirect to={'login'}/>
            return <Component {...restProps as T}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}