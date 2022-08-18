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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 5,
            message: action.newMesage,
          },
        ],
      }

    default:
      return state
  }
}

export default dialogsReducer

// AC

export const sendMessageAC = (newMesage) => ({ type: SEND_MESSAGE, newMesage })
