import Message from './Message/Message'
import s from './Messages.module.css'

const Messages = (props) => {
  const messages = props.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ))

  return <div className={s.messages}>{messages}</div>
}

export default Messages
