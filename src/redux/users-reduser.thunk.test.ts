import {follow, followSuccess, toggleFollowingInProgress, unfollow, unfollowSuccess} from "./users-reduser";
import {APIResponseType, ResultCodesEnum, usersAPI} from "../api/api";

jest.mock("../api/api")
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
    userAPIMock.follow.mockClear()
    userAPIMock.unfollow.mockClear()
})

const result: APIResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: {}
}

userAPIMock.follow.mockReturnValue(Promise.resolve(result))
userAPIMock.unfollow.mockReturnValue(Promise.resolve(result))

test("success follow thunk", async () => {
    const thunk = follow(1)

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenCalledWith(1, toggleFollowingInProgress(true, 1))
    expect(dispatchMock).toHaveBeenCalledWith(2, followSuccess(1))
    expect(dispatchMock).toHaveBeenCalledWith(3, toggleFollowingInProgress(false, 1))

})
test("success unfollow thunk", async () => {
    const thunk = unfollow(1)

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenCalledWith(1, toggleFollowingInProgress(true, 1))
    expect(dispatchMock).toHaveBeenCalledWith(2, unfollowSuccess(1))
    expect(dispatchMock).toHaveBeenCalledWith(3, toggleFollowingInProgress(false, 1))

})