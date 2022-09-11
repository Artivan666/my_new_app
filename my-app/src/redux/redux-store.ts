import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux'
import authReducer from './auth-reducer'
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import usersReducer from './users-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer'

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})

type rootReducerType = typeof rootReducer
export type appStateType = ReturnType<rootReducerType>

// AC
// если переданный T тип является объектом
// у которого есть ключ
// а значением является что-либо
// определи тип этого с помощью infer U
// и верни этот тип
// в противном случаи (если там не такая конструкция, как ключ: значение) верни never
// type propertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
// передаем в T только тип, который является объектом {[key: string]: infer U}
// который возвращает функцию (экшен крейтер)
// которая принимает набор каких либо аргументов (массив any[])
// и возвращает any

// export type inferActionTypes<
//   T extends { [key: string]: (...args: any[]) => any }
// > = ReturnType<propertiesTypes<T>>

export type inferActionTypes<T> = T extends {
  [keys: string]: (...args: any[]) => infer U
}
  ? U
  : never

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
//@ts-ignore
window.store = store

export default store
