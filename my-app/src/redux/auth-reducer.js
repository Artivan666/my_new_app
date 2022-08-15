import { usersAPI } from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.userData,
        isAuth: true,
      }

    default:
      return state
  }
}

export default authReducer

export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  userData: { userId, email, login },
})

// thunk

export const authMe = () => {
  return (dispatch) => {
    usersAPI.authMe().then((res) => {
      if (res.data.resultCode === 0) {
        let { id, email, login } = res.data.data
        dispatch(setAuthUserData(id, email, login))
      }
    })
  }
}
