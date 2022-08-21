import { usersAPI } from '../api/api'

const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TATALUSERS_COUNT = 'SET_TATALUSERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
  users: [],
  totalUsersCount: 0,
  pageSize: 10,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
  fake: 1,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FAKE':
      return { ...state, fake: state.fake + 1 }
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      }

    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
        }),
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
        }),
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      }

    case SET_TATALUSERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      }

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      }

    default:
      return state
  }
}

export default usersReducer

export const setUsers = (users) => ({ type: SET_USERS, users })
export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
})
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TATALUSERS_COUNT,
  totalUsersCount,
})

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
})

export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
})

// thunk

export const getUsers = (page, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(page, pageSize).then((data) => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
      dispatch(setCurrentPage(page))
    })
  }
}

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.follow(userId).then((res) => {
      if (res.data.resultCode == 0) {
        dispatch(followSuccess(userId))
      }
      dispatch(toggleFollowingProgress(false, userId))
    })
  }
}

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.unfollow(userId).then((res) => {
      if (res.data.resultCode == 0) {
        dispatch(unfollowSuccess(userId))
      }
      dispatch(toggleFollowingProgress(false, userId))
    })
  }
}
