import { BaseThunkType } from '../Overall_types/overall-types'
import { authMe } from './auth-reducer'
import { inferActionTypes } from './redux-store'

const initialState = {
  initialized: false,
}

const appReducer = (
  state: initialStateType = initialState,
  action: actionsType
): initialStateType => {
  switch (action.type) {
    case 'SET_INITIALIZED':
      return {
        ...state,
        initialized: true,
      }

    default:
      return state
  }
}

export default appReducer

// AC

const actions = {
  initializedSuccess: () => ({ type: 'SET_INITIALIZED' } as const),
}

// thunk
//@ts-ignore
export const initialize = (): thunkType => (dispatch) => {
  //!!!!!!!
  const promise = dispatch(authMe())
  Promise.all([promise]).then(() => {
    dispatch(actions.initializedSuccess())
  })
}

// types

type initialStateType = typeof initialState

type actionsType = inferActionTypes<typeof actions>

type thunkType = BaseThunkType<actionsType>
