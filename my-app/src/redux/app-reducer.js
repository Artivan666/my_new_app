import { authMe } from './auth-reducer'

const SET_INITIALIZED = 'SET_INITIALIZED'

const initialState = {
  initialized: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
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

const initializedSuccess = () => ({ type: SET_INITIALIZED })

// thunk

export const initialize = () => (dispatch) => {
  const promise = dispatch(authMe())
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess())
  })
}
