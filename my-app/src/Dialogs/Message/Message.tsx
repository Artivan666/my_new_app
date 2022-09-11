//@ts-ignore
import s from './Message.module.css'

const Message: React.FC<propsType> = (props) => {
  return <div className={s.messages_item}>{props.message}</div>
}

export default Message

// ------------------- types

type propsType = {
  message: string
}
