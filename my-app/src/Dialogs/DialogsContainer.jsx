import { connect } from 'react-redux'
import { withAuthRedirect } from '../hoc/withAuthRedirect'
import { sendMessageAC, updateNewMessageTextAC } from '../redux/dialogs-reducer'
import Dialogs from './Dialogs'

// перерисовка каждый раз когда один из этих трех объктов меняется (копируется)
const mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
  newMessageText: state.dialogsPage.newMessageText,
  isAuth: state.auth.isAuth,
})

const mapDispatchToProps = (dispatch) => ({
  onNewMessageChange(text) {
    dispatch(updateNewMessageTextAC(text))
  },
  onSendMessageClick() {
    dispatch(sendMessageAC())
  },
})

const AuthRedirectComponent = withAuthRedirect(Dialogs)

let DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent)

export default DialogsContainer
