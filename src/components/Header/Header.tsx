import React from "react";
import s from './Header.module.css'
import { NavLink } from "react-router-dom";
import {AuthorizationType} from "../../redux/store";

type HeaderType = {
    auth: AuthorizationType
}

const Header: React.FC<HeaderType> = (props) => {
    debugger



    return (
        <header className={s.header}>
            <img
                src="https://belarus-online.by/images/obj/21057/0_medium.jpg"/>
            <div className={s.loginBlock}>
                {props.auth.isAuth ? props.auth.data.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header