import { combineReducers, legacy_createStore as createStore } from 'redux'
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import usersReducer from './users-reducer'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
})

const store = createStore(reducers)

window.store = store

export default store
