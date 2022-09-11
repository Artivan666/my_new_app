import axios from 'axios'
import { photosType, profileType } from '../Overall_types/overall-types'
import { userType } from '../redux/users-reducer'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'e5f2c05d-3abf-4136-95a0-734ede57770a',
  },
})

export const usersAPI = {
  async getUsers(currentPage: number, pageSize: number) {
    const res = await instance.get<getItemsType>(
      `users?page=${currentPage}&count=${pageSize}`
    )
    return res.data
  },

  authMe() {
    return instance
      .get<responseType<authResponseType>>(`auth/me`)
      .then((res) => res.data)
  },

  getUserProfile(userId: number) {
    return instance.get<profileType>(`profile/${userId}`).then((res) => {
      return res.data
    })
  },

  follow(userId: number) {
    return instance
      .post<responseType>(`follow/${userId}`)
      .then((res) => res.data)
  },

  unfollow(userId: number) {
    // .then(res => res.data) as AxiosPromise<responseType>
    return instance
      .delete<responseType>(`follow/${userId}`)
      .then((res) => res.data)
  },

  getStatus(userId: number) {
    return instance
      .get<string>('profile/status/' + userId)
      .then((res) => res.data)
  },

  updateStatus(status: string) {
    return instance
      .put<responseType>('profile/status/', { status: status })
      .then((res) => res.data)
  },

  login(
    email: string,
    password: string,
    rememberMe: boolean = false,
    captcha: string | null
  ) {
    return instance
      .post<responseType<resultCodeEnum | resultCodeForCaptchaEnum>>(
        `auth/login`,
        {
          email,
          password,
          rememberMe,
          captcha,
        }
      )
      .then((res) => res.data)
  },

  logout() {
    return instance.delete(`auth/login`).then((res) => res.data)
  },

  savePhoto(photo: any) {
    const formData = new FormData()
    formData.append('image', photo)

    return instance
      .put<responseType<savePhotoResponseDataType>>('profile/photo', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => res.data)
  },

  saveProfile(profile: profileType) {
    return instance
      .put<responseType>('/profile', profile)
      .then((res) => res.data)
  },

  getCaptchaUrl() {
    return instance
      .get<getCaptchaUrlType>('security/get-captcha-url')
      .then((res) => res.data)
  },
}

// types

type responseType<D = {}, RC = resultCodeEnum> = {
  // D = {} Означает что параметр равен пустому типу (объекту)
  data: D // D - object with data
  messages: Array<string>
  resultCode: RC
}

type authResponseType = {
  id: number
  email: string
  login: string
}

type loginResponseType = {
  userId: number
}

// перечисление
export enum resultCodeEnum {
  Success = 0,
  Error = 1,
  CaptchaIsRequired = 10,
}

export enum resultCodeForCaptchaEnum {
  CaptchaIsRequired = 10,
}

type getItemsType = {
  items: Array<userType>
  totalCount: number
  error: string | null
}

type getCaptchaUrlType = {
  url: string
}

type savePhotoResponseDataType = {
  photos: photosType
}
