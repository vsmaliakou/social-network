import React from "react";
import s from './Paginator.module.css'

type UsersType = {
    pageSize: number
    currentPage: number
    totalUsersCount: number
    onPageChanged: (pageNumber: number) => void
}

const Paginator: React.FC<UsersType> = ({pageSize, currentPage, totalUsersCount, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={currentPage === p ? s.selectedPage : ""}
                             onClick={(e) => {onPageChanged(p)}}>{p}</span>
            })}
        </div>
    )
}


export default Paginator