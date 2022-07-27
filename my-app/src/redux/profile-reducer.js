const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_POST = 'ADD_POST'

const profileReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText
      return state
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
      }
      state.posts.push(newPost)
      state.newPostText = ''
      return state
    default:
      return state
  }
}

export default profileReducer

export const updateNewPostTextAC = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newText,
})

export const addPostAC = () => ({ type: ADD_POST })
