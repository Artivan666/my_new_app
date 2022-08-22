import { usersAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

const initialState = {
  posts: [
    { id: 1, message: 'Hello!' },
    { id: 2, message: 'Haw are you?' },
    { id: 3, message: 'yo!' },
    { id: 4, message: 'blabla' },
  ],
  profile: null,
  status: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
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
            message: action.newPost,
          },
        ],
      }
    }

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      }

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postId),
      }
    default:
      return state
  }
}

export default profileReducer

export const addPostAC = (newPost) => ({ type: ADD_POST, newPost })

export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
})

const setStatus = (status) => ({
  type: SET_STATUS,
  status,
})

// thunk

export const getUserProfile = (userId) => async (dispatch) => {
  const res = await usersAPI.getUserProfile(userId)

  dispatch(setUserProfile(res.data))
}

export const getUserStatus = (userId) => async (dispatch) => {
  const res = await usersAPI.getStatus(userId).then((res) => {
    dispatch(setStatus(res.data))
  })
}

export const updateUserStatus = (status) => async (dispatch) => {
  const res = await usersAPI.updateStatus(status)

  if (res.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}
