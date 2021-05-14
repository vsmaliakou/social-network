import React from "react";
import s from './Header.module.css'
import { NavLink } from "react-router-dom";
import {AuthInitialStateType} from "../../redux/auth-reducer";

type HeaderPropsType = {
    auth: AuthInitialStateType
    logout: () => void
}

const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={s.header}>
            <img
                src="https://belarus-online.by/images/obj/21057/0_medium.jpg" alt="img"/>
            <div className={s.loginBlock}>
                {props.auth.isAuth
                    ? <div>
                        {props.auth.login} - <button onClick={props.logout}>Log out</button>
                </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header