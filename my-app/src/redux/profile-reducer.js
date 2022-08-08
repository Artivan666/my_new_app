const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_POST = 'ADD_POST'

const initialState = {
  posts: [
    { id: 1, message: 'Hello!' },
    { id: 2, message: 'Haw are you?' },
    { id: 3, message: 'yo!' },
    { id: 4, message: 'blabla' },
  ],
  newPostText: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      }
    }
    case ADD_POST: {
      const newPost = {
        id: 5,
        message: state.newPostText,
      }
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 5,
            message: state.newPostText,
          },
        ],
        newPostText: '',
      }
    }
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
