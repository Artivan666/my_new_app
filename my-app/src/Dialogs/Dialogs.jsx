import s from './Dialogs.module.css'
import DialogsList from './DialogsList/DialogsList'
import Messages from './Messages/Messages'

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <DialogsList dialogs={props.dialogs} />
      <Messages
        dispatch={props.dispatch}
        messages={props.messages}
        newMessageText={props.newMessageText}
      />
    </div>
  )
}

export default Dialogs
