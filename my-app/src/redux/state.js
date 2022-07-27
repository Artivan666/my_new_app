const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

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
    if (action.type === ADD_POST) {
      const newPost = { id: 5, message: this._state.profilePage.newPostText }
      this._state.profilePage.posts.push(newPost)
      this._callSubscriber(this._state)
      this._state.profilePage.newPostText = ''
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText
      this._callSubscriber(this._state)
    } else if (action.type === SEND_MESSAGE) {
      const newMessage = {
        id: 5,
        message: this._state.dialogsPage.newMessageText,
      }
      this._state.dialogsPage.messages.push(newMessage)
      this._callSubscriber(this._state)
      this._state.dialogsPage.newMessageText = ''
    }
  },
}

export const updateNewPostTextAC = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newText,
})

export const addPostAC = () => ({ type: ADD_POST })

export const updateNewMessageTextAC = (newText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: newText,
})

export const sendMessageAC = () => ({ type: SEND_MESSAGE })

window.store = store

export default store
