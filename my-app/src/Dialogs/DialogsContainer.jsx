import { sendMessageAC, updateNewMessageTextAC } from '../redux/dialogs-reducer'
import StoreContext from '../StoreContext'
import Dialogs from './Dialogs'

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().dialogsPage

        const onNewMessageChange = (text) => {
          store.dispatch(updateNewMessageTextAC(text))
        }

        const onSendMessageClick = () => {
          store.dispatch(sendMessageAC())
        }

        return (
          <Dialogs
            onNewMessageChange={onNewMessageChange}
            onSendMessageClick={onSendMessageClick}
            dialogs={state.dialogs}
            messages={state.messages}
            newMessageText={state.newMessageText}
          />
        )
      }}
    </StoreContext.Consumer>
  )
}

export default DialogsContainer
