import { FormAction, stopSubmit } from 'redux-form'
import { usersAPI } from '../api/api'
import {
  BaseThunkType,
  photosType,
  profileType,
} from '../Overall_types/overall-types'
import { inferActionTypes } from './redux-store'

const initialState = {
  posts: [
    { id: 1, message: 'Hello!' },
    { id: 2, message: 'Haw are you?' },
    { id: 3, message: 'yo!' },
    { id: 4, message: 'blabla' },
  ] as Array<postType>,
  profile: null as profileType | null,
  status: '',
}

const profileReducer = (
  state: initialStateType = initialState,
  action: actionsType
): initialStateType => {
  switch (action.type) {
    case 'ADD_POST': {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 5,
            message: action.newPostText,
          },
        ],
      }
    }

    case 'SET_USER_PROFILE':
      return {
        ...state,
        profile: action.profile,
      }

    case 'SET_STATUS':
      return {
        ...state,
        status: action.status,
      }

    case 'SAVE_PHOTO':
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as profileType, //!!!!!!!!!!!!!
      }

    default:
      return state
  }
}

export default profileReducer

// Actions

export const actions = {
  addPost: (newPostText: string) =>
    ({
      type: 'ADD_POST',
      newPostText,
    } as const),

  deletePost: (postId: number) =>
    ({
      type: 'DELETE_POST',
      postId,
    } as const),

  setUserProfile: (profile: profileType) =>
    ({
      type: 'SET_USER_PROFILE',
      profile,
    } as const),

  setStatus: (status: string) =>
    ({
      type: 'SET_STATUS',
      status,
    } as const),

  savePhotoSuccess: (photos: photosType) =>
    ({
      type: 'SAVE_PHOTO',
      photos,
    } as const),
}

// thunk
// возвращает промис
export const getUserProfile =
  (userId: number): thunkType =>
  async (dispatch) => {
    console.log('Thunk getUserProfile: ' + userId)
    const data = await usersAPI.getUserProfile(userId)

    dispatch(actions.setUserProfile(data))
  }

export const getUserStatus =
  (userId: number): thunkType =>
  async (dispatch) => {
    console.log('Thunk getUserStatus: ' + userId)
    const data = await usersAPI.getStatus(userId).then((data) => {
      dispatch(actions.setStatus(data))
    })
  }

export const updateUserStatus =
  (status: string): thunkType =>
  async (dispatch) => {
    const data = await usersAPI.updateStatus(status)

    if (data.resultCode === 0) {
      dispatch(actions.setStatus(status))
    }
  }

export const savePhoto =
  (photo: File): thunkType =>
  async (dispatch) => {
    const data = await usersAPI.savePhoto(photo)

    if (data.resultCode == 0) {
      dispatch(actions.savePhotoSuccess(data.data.photos))
    }
  }

export const saveProfile =
  (profile: profileType): thunkType =>
  async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await usersAPI.saveProfile(profile)

    if (data.resultCode == 0) {
      if (userId != null) {
        dispatch(getUserProfile(userId))
      } else {
        throw new Error('UserId cant be null')
      }
    } else {
      // const message =
      //   res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
      // dispatch(stopSubmit('profileDataForm', { _error: 'Some error' }))
      dispatch(
        stopSubmit('profileDataForm', {
          contacts: { facebook: data.messages[0] },
        })
      )
      return Promise.reject(data.messages[0])
    }
  }

// использование try catch
// try {
//   api request
// } catch(error) {debbuger}

// ----------------------------- types ----------------------------------

type initialStateType = typeof initialState

type actionsType = inferActionTypes<typeof actions>

type thunkType = BaseThunkType<actionsType | FormAction>

export type postType = { id: number; message: string }
