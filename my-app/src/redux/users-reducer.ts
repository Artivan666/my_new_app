import { Action, Dispatch } from 'redux'
import { ActionTypes } from 'redux-form'
import { ThunkAction } from 'redux-thunk'
import { usersAPI } from '../api/api'
import { BaseThunkType, photosType } from '../Overall_types/overall-types'
import { appStateType, inferActionTypes } from './redux-store'

const initialState = {
  users: [] as Array<userType>,
  totalUsersCount: 0,
  pageSize: 10,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>,
  portionSize: 10,
  filter: {
    term: '',
    friend: null as null | boolean,
  },
}

const usersReducer = (
  state: initialStateType = initialState,
  action: actionsTypes
): initialStateType => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.users,
      }

    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
        }),
      }

    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
        }),
      }

    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage,
      }

    case 'SET_TATALUSERS_COUNT':
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      }

    case 'TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      }

    case 'TOGGLE_IS_FOLLOWING_PROGRESS':
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      }

    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      }

    default:
      return state
  }
}

export default usersReducer

export const actions = {
  setUsers: (users: Array<userType>) =>
    ({
      type: 'SET_USERS',
      users,
    } as const),

  followSuccess: (userId: number) =>
    ({
      type: 'FOLLOW',
      userId,
    } as const),

  unfollowSuccess: (userId: number) =>
    ({
      type: 'UNFOLLOW',
      userId,
    } as const),

  setCurrentPage: (currentPage: number) =>
    ({
      type: 'SET_CURRENT_PAGE',
      currentPage,
    } as const),

  setFilter: (filter: filterType) =>
    ({
      type: 'SET_FILTER',
      payload: filter,
    } as const),

  setTotalUsersCount: (totalUsersCount: number) =>
    ({
      type: 'SET_TATALUSERS_COUNT',
      totalUsersCount,
    } as const),

  toggleIsFetching: (isFetching: boolean) =>
    ({
      type: 'TOGGLE_IS_FETCHING',
      isFetching,
    } as const),

  toggleFollowingProgress: (isFetching: boolean, userId: number) =>
    ({
      type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
      isFetching,
      userId,
    } as const),
}

// thunk

// first version of typing

type dispatchType = Dispatch<actionsTypes>
type getStateType = () => appStateType

// export const getUsers =
//   (page: number, pageSize: number) =>
//   async (dispatch: dispatchType, getState: getStateType) => {
//     dispatch(toggleIsFetching(true))
//     const res = await usersAPI.getUsers(page, pageSize)

//     dispatch(toggleIsFetching(false))
//     dispatch(setUsers(res.items))
//     dispatch(setTotalUsersCount(res.totalCount))
//     dispatch(setCurrentPage(page))
//   }

// second version of typing
export const getUsers =
  (page: number, pageSize: number, filter: filterType): thunkType =>
  async (dispatch) => {
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.setFilter(filter))
    const res = await usersAPI.getUsers(
      page,
      pageSize,
      filter.term,
      filter.friend
    )

    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(res.items))
    dispatch(actions.setTotalUsersCount(res.totalCount))
    dispatch(actions.setCurrentPage(page))
  }

const followUnfollow = async (
  dispatch: dispatchType,
  userId: number,
  apiMethod: any,
  actionCreator: (userId: number) => actionsTypes
) => {
  dispatch(actions.toggleFollowingProgress(true, userId))
  const res = await apiMethod(userId)
  if (res.resultCode == 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(actions.toggleFollowingProgress(false, userId))
}

export const follow =
  (userId: number): thunkType =>
  async (dispatch) => {
    const apiMethod = usersAPI.follow.bind(usersAPI)
    const actionCreator = actions.followSuccess

    followUnfollow(dispatch, userId, apiMethod, actionCreator)
  }

export const unfollow =
  (userId: number): thunkType =>
  async (dispatch) => {
    const apiMethod = usersAPI.unfollow.bind(usersAPI)
    const actionCreator = actions.unfollowSuccess

    followUnfollow(dispatch, userId, apiMethod, actionCreator)
  }

// ---------------------------------------- types --------------------------

type initialStateType = typeof initialState

type actionsTypes = inferActionTypes<typeof actions>

type thunkType = BaseThunkType<actionsTypes>

export type userType = {
  id: number
  name: string
  status: string
  photos: photosType
  followed: boolean
}

export type filterType = typeof initialState.filter
