import { connect } from 'react-redux'
import { sendMessageAC, updateNewMessageTextAC } from '../redux/dialogs-reducer'
import Dialogs from './Dialogs'

// перерисовка каждый раз когда один из этих трех объктов меняется (копируется)
const mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
  newMessageText: state.dialogsPage.newMessageText,
})

const mapDispatchToProps = (dispatch) => ({
  onNewMessageChange(text) {
    dispatch(updateNewMessageTextAC(text))
  },
  onSendMessageClick() {
    dispatch(sendMessageAC())
  },
})

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
