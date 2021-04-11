import React from "react";
import s from './Header.module.css'
import { NavLink } from "react-router-dom";
import {AuthorizationType} from "../../redux/store";

type HeaderType = {
    auth: AuthorizationType
    logout: () => void
}

const Header: React.FC<HeaderType> = (props) => {
    return (
        <header className={s.header}>
            <img
                src="https://belarus-online.by/images/obj/21057/0_medium.jpg"/>
            <div className={s.loginBlock}>
                {props.auth.isAuth
                    ? <div>
                        {props.auth.data.login} - <button onClick={props.logout}>Log out</button>
                </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header