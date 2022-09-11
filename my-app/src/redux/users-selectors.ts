import { createSelector } from 'reselect'
import { appStateType } from './redux-store'

// селектор - функция, которая принимает стэйт, достает из него что-нужно,
// и возвращает это обратно

// export const getUsersSuperSelector = createSelector(() => {
//   state.usersPage.users
// })

export const getUsersFromState = (state: appStateType) => {
  return state.usersPage.users
}

export const getPageSize = (state: appStateType) => {
  return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: appStateType) => {
  return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: appStateType) => {
  return state.usersPage.currentPage
}

export const getIsFetching = (state: appStateType) => {
  return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: appStateType) => {
  return state.usersPage.followingInProgress
}

export const getPortionSize = (state: appStateType) => {
  return state.usersPage.portionSize
}
