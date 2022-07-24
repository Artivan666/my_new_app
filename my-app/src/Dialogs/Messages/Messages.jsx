import Message from './Message/Message'
import s from './Messages.module.css'

const Messages = (props) => {
  return (
    <div className={s.messages}>
      <Message message="Hi!" />
      <Message message="Haw are you?" />
      <Message message="Lets go!" />
    </div>
  )
}

export default Messages
