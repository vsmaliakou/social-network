import React from "react";
import {UsersPageType} from "../../../redux/store";
import s from '../users.module.css'
import userPhoto from '../../../assets/images/user.jpg'
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersType = {
    usersPage: UsersPageType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
}

const Users: React.FC<UsersType> = (props) => {

    let pagesCount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.usersPage.currentPage === p ? s.selectedPage : ""}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.usersPage.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingInProgress(true, u.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "15f7a0a9-64c3-4a6a-9f8f-a55a7d8541a6"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleFollowingInProgress(false, u.id)
                                    })
                            }}>Unfollow</button>
                            : <button disabled={props.usersPage.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingInProgress(true, u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "15f7a0a9-64c3-4a6a-9f8f-a55a7d8541a6"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingInProgress(false, u.id)
                                    })
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}


export default Users