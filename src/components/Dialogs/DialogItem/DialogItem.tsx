import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogType} from "../../../redux/types";

const DialogItem: React.FC<DialogType> = (props) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src='https://porting-team.ru/wp-content/uploads/2017/11/659407.jpg' alt='img'/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem