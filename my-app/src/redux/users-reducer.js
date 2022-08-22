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
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
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

export const getUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true))
  const res = await usersAPI.getUsers(page, pageSize)

  dispatch(toggleIsFetching(false))
  dispatch(setUsers(res.items))
  dispatch(setTotalUsersCount(res.totalCount))
  dispatch(setCurrentPage(page))
}

const followUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userId))
  const res = await apiMethod(userId)

  if (res.data.resultCode == 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => async (dispatch) => {
  const apiMethod = usersAPI.follow.bind(usersAPI)
  const actionCreator = followSuccess

  followUnfollow(dispatch, userId, apiMethod, actionCreator)
}

export const unfollow = (userId) => async (dispatch) => {
  const apiMethod = usersAPI.unfollow.bind(usersAPI)
  const actionCreator = unfollowSuccess

  followUnfollow(dispatch, userId, apiMethod, actionCreator)
}
