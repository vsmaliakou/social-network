import {ActionType, UsersPageType, UserType} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        /*{
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
        },*/
    ]
}

const usersReducer = (state: UsersPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userID: number) => {
    return {
        type: FOLLOW,
        userID: userID
    } as const
}
export const unfollowAC = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID: userID
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users: users
    } as const
}

export default usersReducer