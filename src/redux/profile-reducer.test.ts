import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 12},
        {id: 2, message: "It's my first post", likeCount: 11}
    ],
    profile: null,
    status: ""
}

test('length of posts should be incremented', () => {

    //start data
    let action = addPost("it-kamasutra.com")

    //action
    let newState = profileReducer(state, action)

    //expectation
    expect(newState.posts.length).toBe(3)
})

test('after deleting length of messages should be decrement', () => {

    //start data
    let action = deletePost(1)

    //action
    let newState = profileReducer(state, action)

    //expectation
    expect(newState.posts.length).toBe(1)
})