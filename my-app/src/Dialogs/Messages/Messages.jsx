import { sendMessageAC, updateNewMessageTextAC } from '../../redux/state'
import Message from './Message/Message'
import s from './Messages.module.css'

const Messages = (props) => {
  const messages = props.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ))

  const onNewMessageChange = (e) => {
    const text = e.target.value
    props.dispatch(updateNewMessageTextAC(text))
  }

  const onSendMessageClick = () => {
    props.dispatch(sendMessageAC())
  }

  return (
    <div className={s.messages}>
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

export default Messages
