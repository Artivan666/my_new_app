import s from './Dialogs.module.css'
import DialogsList from './DialogsList/DialogsList'
import Messages from './Messages/Messages'

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <DialogsList dialogs={props.dialogs} />
      <Messages messages={props.messages} />
    </div>
  )
}

export default Dialogs
