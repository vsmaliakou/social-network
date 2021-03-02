import React from "react";
import {UsersPageType, UserType} from "../../redux/store";
import s from './users.module.css'

export type UsersType = {
    usersPage: UsersPageType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}

const Users: React.FC<UsersType> = (props) => {

    if(props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                fullName: 'Redhead',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'},
                followed: false,
                photoURL: 'https://sun9-66.userapi.com/impf/c631628/v631628586/37d83/MIg3YVWTzOM.jpg?size=677x807&quality=96&sign=df68af645de6289b2b31f925882b13db&type=album'
            },
            {
                id: 2,
                fullName: 'Raich',
                status: 'I am a boss too',
                location: {city: 'Moscow', country: 'Russia'},
                followed: true,
                photoURL: 'https://sun9-1.userapi.com/impf/aW_quVdtk_NQQip8yIo-D1z1Wx1we6CM4Bis5g/KcTTeYtbP80.jpg?size=605x807&quality=96&sign=5c39cee2a41038e0844cb7b0a2559f5e&type=album'
            },
            {
                id: 3,
                fullName: 'Perch',
                status: 'I am a boss too',
                location: {city: 'Kiev', country: 'Ukrane'},
                followed: false,
                photoURL: 'https://sun9-60.userapi.com/impg/_Pf4VgI4n7XTcYN-S-sgLQTDguhgd7_b3ZE8Jg/LmUv_FmqnWE.jpg?size=807x807&quality=96&sign=f61cb66ac1f4c199a4139fc22ef80c7e&type=album'
            }
        ])
    }


    return (
        <div>
            {props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoURL} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users
