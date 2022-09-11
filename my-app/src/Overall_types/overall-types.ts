import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { appStateType } from '../redux/redux-store'

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  appStateType,
  null,
  A
>

export type profileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  aboutMe: string
  contacts: {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
  }
  photos: photosType
}

export type photosType = {
  small: string | null
  large: string | null
}
