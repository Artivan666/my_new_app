import { combineReducers, legacy_createStore as createStore } from 'redux'
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
})

const store = createStore(reducers)

window.store = store

export default store
