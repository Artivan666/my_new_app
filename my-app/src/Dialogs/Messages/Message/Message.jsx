import s from './Message.module.css'

const Message = (props) => {
  return <div className={s.messages_item}>{props.message}</div>
}

export default Message
