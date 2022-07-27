const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText
      return state
    case SEND_MESSAGE:
      const newMessage = {
        id: 5,
        message: state.newMessageText,
      }
      state.messages.push(newMessage)
      state.newMessageText = ''
      return state
    default:
      return state
  }
}

export default dialogsReducer

export const updateNewMessageTextAC = (newText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: newText,
})

export const sendMessageAC = () => ({ type: SEND_MESSAGE })
