import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogItemType} from "../../../redux/store";

const DialogItem: React.FC<DialogItemType> = (props) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src='https://porting-team.ru/wp-content/uploads/2017/11/659407.jpg'/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem