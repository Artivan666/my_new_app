import { Action } from 'redux'
import { FormAction, stopSubmit } from 'redux-form'
import { resultCodeEnum, usersAPI } from '../api/api'
import { BaseThunkType } from '../Overall_types/overall-types'
import { inferActionTypes } from './redux-store'

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
}

const authReducer = (
  state: initialStateType = initialState,
  action: actionsTypes
): initialStateType => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.userData,
      }

    case 'GET_CAPTCHA_URL_SUCCESS':
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

const actions = {
  setAuthUserData: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  ) =>
    ({
      type: 'SET_USER_DATA',
      userData: { userId, email, login, isAuth },
    } as const),

  getCaptchaUrlSuccess: (captchaUrl: string) =>
    ({
      type: 'GET_CAPTCHA_URL_SUCCESS',
      captchaUrl,
    } as const),
}

// thunk

// get auth user data
export const authMe = (): thunkType => async (dispatch) => {
  const data = await usersAPI.authMe()

  if (data.resultCode == resultCodeEnum.Success) {
    let { id, email, login } = data.data
    dispatch(actions.setAuthUserData(id, email, login, true))
  }
}

export const login =
  (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null
  ): thunkType =>
  async (dispatch) => {
    const data = await usersAPI.login(email, password, rememberMe, captcha)

    if (data.resultCode === resultCodeEnum.Success) {
      dispatch(authMe())
    } else {
      if (data.resultCode === resultCodeEnum.CaptchaIsRequired) {
        dispatch(getCaptchaUrl())
      }
      const message = data.messages.length > 0 ? data.messages[0] : 'Some error'
      dispatch(stopSubmit('loginForm', { _error: message }))
    }
    // dispatch(
    //   stopSubmit('loginForm', { _error: 'Email or password is incorrect' })
    // )
  }

export const logout = (): thunkType => async (dispatch) => {
  debugger
  const res = await usersAPI.logout()

  if (res.data.resultCode === 0) {
    dispatch(actions.setAuthUserData(null, null, null, false))
  }
}

export const getCaptchaUrl = (): thunkType => async (dispatch) => {
  const data = await usersAPI.getCaptchaUrl()
  const captchaUrl = data.url
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

// types

type initialStateType = typeof initialState

type actionsTypes = inferActionTypes<typeof actions>

type thunkType = BaseThunkType<actionsTypes | FormAction>
