import React from 'react';
import {useSelector} from 'react-redux';
import Preloader from "../Common/Preloader/Preloader";
import {getIsFetching} from '../../redux/users-selectors'
import {Users} from "./Users/Users";

export const UsersPage  = () => {

    const isFetching = useSelector(getIsFetching)

    return(
        <div>
            {isFetching ? <Preloader/> : null}
            <Users/>
        </div>
    )
}