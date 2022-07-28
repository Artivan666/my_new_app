import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hello!' },
        { id: 2, message: 'Haw are you?' },
        { id: 3, message: 'yo!' },
        { id: 4, message: 'blabla' },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Dimuch' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Liza' },
      ],

      messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'Haw are you?' },
        { id: 3, message: 'Lets go!' },
        { id: 4, message: 'Hello!!!!!!' },
      ],
      newMessageText: '',
    },
  },

  _callSubscriber() {
    console.log('State was changed')
  },

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber(this._state)
  },
}

window.store = store

export default store