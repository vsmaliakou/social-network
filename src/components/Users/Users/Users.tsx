import React from "react";
import Paginator from "../../Common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../../redux/types";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType} from "../../../redux/users-reduser";

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    totalUsersCount: number
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    onFilterChanged: (filter: FilterType) => void
}

const Users: React.FC<UsersPropsType> = ({pageSize, currentPage, totalUsersCount, onPageChanged, ...props}) => {
    return (
        <div>
            <UsersSearchForm onFilterChanged={props.onFilterChanged}/>
            <Paginator
                pageSize={pageSize}
                currentPage={currentPage}
                totalItemsCount={totalUsersCount}
                onPageChanged={onPageChanged}
            />
            <div>
                {props.users.map(u =>
                    <User
                        key={u.id}
                        user={u}
                        followingInProgress={props.followingInProgress}
                        follow={props.follow}
                        unfollow={props.unfollow}
                    />
                )}
            </div>
        </div>
    )
}

export default Users