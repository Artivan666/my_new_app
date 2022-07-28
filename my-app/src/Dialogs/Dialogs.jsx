import { sendMessageAC, updateNewMessageTextAC } from '../redux/dialogs-reducer'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {
  const dialogs = props.dialogs.map((d) => (
    <Dialog key={d.id} id={d.id} name={d.name} />
  ))

  const messages = props.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ))

  const onNewMessageChange = (e) => {
    const text = e.target.value
    props.onNewMessageChange(text)
  }

  const onSendMessageClick = () => {
    props.onSendMessageClick()
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_list}>{dialogs}</div>

      <div className={s.new_message_box}>
        <div>
          <textarea
            onChange={onNewMessageChange}
            value={props.newMessageText}
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
      <div className={s.messages_list}>{messages}</div>
    </div>
  )
}

export default Dialogs
