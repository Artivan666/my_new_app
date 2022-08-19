import { stopSubmit } from 'redux-form'
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
      }

    default:
      return state
  }
}

export default authReducer

// AC

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  userData: { userId, email, login, isAuth },
})

// thunk

export const authMe = () => {
  return (dispatch) => {
    usersAPI.authMe().then((res) => {
      if (res.data.resultCode === 0) {
        let { id, email, login } = res.data.data
        dispatch(setAuthUserData(id, email, login, true))
      }
    })
  }
}

export const login = (email, password, rememberMe) => (dispatch) => {
  usersAPI.login(email, password, rememberMe).then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(authMe())
    } else {
      const message =
        res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
      dispatch(stopSubmit('loginForm', { _error: message }))

      // dispatch(
      //   stopSubmit('loginForm', { _error: 'Email or password is incorrect' })
      // )
    }
  })
}

export const logout = () => (dispatch) => {
  usersAPI.logout().then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  })
}
