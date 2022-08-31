import { stopSubmit } from 'redux-form'
import { usersAPI } from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.userData,
      }

    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
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

const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  captchaUrl,
})

// thunk

// get auth user data
export const authMe = () => async (dispatch) => {
  const res = await usersAPI.authMe()

  if (res.data.resultCode === 0) {
    let { id, email, login } = res.data.data
    dispatch(setAuthUserData(id, email, login, true))
  }
}

export const login =
  (email, password, rememberMe, captcha) => async (dispatch) => {
    const res = await usersAPI.login(email, password, rememberMe, captcha)

    if (res.data.resultCode === 0) {
      dispatch(authMe())
    } else {
      if (res.data.resultCode === 10) {
        dispatch(getCaptchaUrl())
      }
      const message =
        res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
      dispatch(stopSubmit('loginForm', { _error: message }))
    }
    // dispatch(
    //   stopSubmit('loginForm', { _error: 'Email or password is incorrect' })
    // )
  }

export const logout = () => async (dispatch) => {
  const res = await usersAPI.logout()

  if (res.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export const getCaptchaUrl = () => async (dispatch) => {
  const res = await usersAPI.getCaptchaUrl()
  const captchaUrl = res.data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}
