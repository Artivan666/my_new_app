import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../hoc/withAuthRedirect'
import { sendMessageAC } from '../redux/dialogs-reducer'
import Dialogs from './Dialogs'

// перерисовка каждый раз когда один из этих трех объктов меняется (копируется)
const mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
  newMessageText: state.dialogsPage.newMessageText,
  isAuth: state.auth.isAuth,
})

const mapDispatchToProps = (dispatch) => ({
  onSendMessageClick(newMessage) {
    dispatch(sendMessageAC(newMessage))
  },
})
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
