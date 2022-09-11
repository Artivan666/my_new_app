import { ComponentType } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../hoc/withAuthRedirect'
import { actions } from '../redux/dialogs-reducer'
import { appStateType } from '../redux/redux-store'
import Dialogs from './Dialogs'

// перерисовка каждый раз когда один из этих трех объктов меняется (копируется)
const mapStateToProps = (state: appStateType) => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
  // newMessageText: state.dialogsPage.newMessageText,
  isAuth: state.auth.isAuth,
})

// const mapDispatchToProps = (dispatch) => ({
//   onSendMessageClick(newMessage) {
//     dispatch(actions.sendMessageAC(newMessage))
//   },
// })
export default compose<ComponentType>(
  connect(mapStateToProps, { sendMessage: actions.sendMessage }),
  withAuthRedirect
)(Dialogs)
