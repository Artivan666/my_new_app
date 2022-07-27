const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer = (state, action) => {
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
