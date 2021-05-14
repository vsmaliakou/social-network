import React, {useEffect} from "react";
import Paginator from "../../Common/Paginator/Paginator";
import User from "./User";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType, follow, requestUsers, unfollow} from "../../../redux/users-reduser";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage, getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "../../../redux/users-selectors";

export const Users = () => {

    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter))
    }, [])

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }
    const followUser = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollowUser = (userId: number) => {
        dispatch(unfollow(userId))
    }

    return (
        <div>
            <UsersSearchForm onFilterChanged={onFilterChanged}/>
            <Paginator
                pageSize={pageSize}
                currentPage={currentPage}
                totalItemsCount={totalUsersCount}
                onPageChanged={onPageChanged}
            />
            <div>
                {users.map(u =>
                    <User
                        key={u.id}
                        user={u}
                        followingInProgress={followingInProgress}
                        follow={followUser}
                        unfollow={unfollowUser}
                    />
                )}
            </div>
        </div>
    )
}