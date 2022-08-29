import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'e5f2c05d-3abf-4136-95a0-734ede57770a',
  },
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data)
  },

  authMe() {
    return instance.get(`auth/me`).then((res) => res)
  },

  getUserProfile(userId) {
    return instance.get(`profile/${userId}`)
  },

  follow(userId) {
    return instance.post(`follow/${userId}`).then((res) => res)
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then((res) => res)
  },

  getStatus(userId) {
    return instance.get('profile/status/' + userId)
  },

  updateStatus(status) {
    return instance.put('profile/status/', { status: status })
  },

  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
    })
  },

  logout() {
    return instance.delete(`auth/login`)
  },

  savePhoto(photo) {
    debugger
    const formData = new FormData()
    formData.append('image', photo)

    return instance.put('profile/photo', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },
}
