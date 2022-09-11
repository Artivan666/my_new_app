import { inferActionTypes } from './redux-store'

const initialState = {
  dialogs: [
    { id: 1, name: 'Dimuch' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Liza' },
  ] as Array<dialogType>,

  messages: [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'Haw are you?' },
    { id: 3, message: 'Lets go!' },
    { id: 4, message: 'Hello!!!!!!' },
  ] as Array<messageType>,
}

const dialogsReducer = (
  state: initialStateType = initialState,
  action: actionsType
): initialStateType => {
  switch (action.type) {
    case 'SEND_MESSAGE':
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

export const actions = {
  sendMessage: (newMesage: string) => ({
    type: 'SEND_MESSAGE',
    newMesage,
  }),
}

// types

type initialStateType = typeof initialState

type actionsType = inferActionTypes<typeof actions>

export type dialogType = {
  id: number
  name: string
}

export type messageType = {
  id: number
  message: string
}
