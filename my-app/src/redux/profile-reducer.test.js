import profileReducer, { addPostAC, deletePost } from './profile-reducer'

const state = {
  posts: [
    { id: 1, message: 'Hello!' },
    { id: 2, message: 'Haw are you?' },
    { id: 3, message: 'yo!' },
    { id: 4, message: 'blabla' },
  ],
  profile: null,
  status: '',
}

test('New post should be added', () => {
  const action = addPostAC('Hello world')

  const newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(5)
})

test('Message of new post should be correct', () => {
  const action = addPostAC('Hello world')

  const newState = profileReducer(state, action)

  expect(newState.posts[4].message).toBe('Hello world')
})

test('The length of the array should decrease after delition  ', () => {
  const action = deletePost(1)

  const newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(3)
})
