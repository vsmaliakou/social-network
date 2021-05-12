import usersReducer, {followSuccess, unfollowSuccess, UsersInitialStateType} from "./users-reduser";

let state: UsersInitialStateType = {
    users: [
        {
            id: 0, name: "Vik 0", followed: false, photos: {large: null, small: null},
            status: "status 0", location: {country: "Belarus", city: "Minsk"}
        },
        {
            id: 1, name: "Vik 1", followed: false, photos: {large: null, small: null},
            status: "status 1", location: {country: "Belarus", city: "Minsk"}
        },
        {
            id: 2, name: "Vik 2", followed: true, photos: {large: null, small: null},
            status: "status 2", location: {country: "Belarus", city: "Minsk"}
        },
        {
            id: 3, name: "Vik 3", followed: true, photos: {large: null, small: null},
            status: "status 3", location: {country: "Belarus", city: "Minsk"}
        }
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

beforeEach(() => {
    state = {
        users: [
            {
                id: 0, name: "Vik 0", followed: false, photos: {large: null, small: null},
                status: "status 0", location: {country: "Belarus", city: "Minsk"}
            },
            {
                id: 1, name: "Vik 1", followed: false, photos: {large: null, small: null},
                status: "status 1", location: {country: "Belarus", city: "Minsk"}
            },
            {
                id: 2, name: "Vik 2", followed: true, photos: {large: null, small: null},
                status: "status 2", location: {country: "Belarus", city: "Minsk"}
            },
            {
                id: 3, name: "Vik 3", followed: true, photos: {large: null, small: null},
                status: "status 3", location: {country: "Belarus", city: "Minsk"}
            }
        ],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    }
})

test("follow success", () => {

    const newState = usersReducer(state, followSuccess(1))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})

test("unfollow success", () => {

    const newState = usersReducer(state, unfollowSuccess(3))

    expect(newState.users[2].followed).toBeTruthy()
    expect(newState.users[3].followed).toBeFalsy()
})