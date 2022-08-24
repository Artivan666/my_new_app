import { createSelector } from 'reselect'

// селектор - функция, которая принимает стэйт, достает из него что-нужно,
// и возвращает это обратно

// export const getUsersSuperSelector = createSelector(() => {
//   state.usersPage.users
// })

export const getUsersFromState = (state) => {
  return state.usersPage.users
}

export const getPageSize = (state) => {
  return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
  return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress
}

export const getPortionSize = (state) => {
  return state.usersPage.portionSize
}
