import { useEffect, useState } from 'react'
//@ts-ignore
import s from './Chat.module.css'

export const ChatPage: React.FC = () => {
  return <Chat />
}

const Chat: React.FC = () => {
  const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)

  // создание канала
  useEffect(() => {
    let ws: WebSocket
    const closeHandler = () => {
      console.log('ws closed')
      setTimeout(createChannel, 5000)
    }
    function createChannel() {
      // отписка
      ws?.removeEventListener('close', closeHandler)
      ws?.close()

      ws = new WebSocket(
        'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
      )
      console.log('ws created')
      ws.addEventListener('close', closeHandler)
      setWsChannel(ws)
    }

    createChannel()

    return () => {
      ws.removeEventListener('close', closeHandler)
      ws.close()
    }
  }, [])

  return (
    <div>
      <Messages wsChannel={wsChannel} />
      <AddMessageForm wsChannel={wsChannel} />
    </div>
  )
}

const Messages: React.FC<{ wsChannel: WebSocket | null }> = ({ wsChannel }) => {
  const [messages, setMessages] = useState<chatMessageType[]>([])

  // на событие message
  useEffect(() => {
    const messageHandler = (e: MessageEvent) => {
      const newMessages = JSON.parse(e.data)
      console.log(newMessages)
      setMessages((prevMessages) => [...prevMessages, ...newMessages])
    }

    wsChannel?.addEventListener('message', messageHandler)
    return () => {
      wsChannel?.removeEventListener('message', messageHandler)
    }
  }, [wsChannel])

  // формируем массив сообщений
  const allMessages = messages.map((m, index) => (
    <div key={index} className={s.message}>
      <div className={s.user_info}>
        <div>
          <img src={m.photo} />
        </div>
        <div>{m.userName}</div>
        <div>{m.userId}</div>
      </div>
      <div className={s.message_text}>{m.message}</div>
    </div>
  ))

  return <div className={s.messages_block}>{allMessages}</div>
}

const AddMessageForm: React.FC<{ wsChannel: WebSocket | null }> = ({
  wsChannel,
}) => {
  const [message, setMessage] = useState('')
  const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

  // на событие открытие канала
  useEffect(() => {
    const openHandler = () => {
      setReadyStatus('ready')
    }
    wsChannel?.addEventListener('open', openHandler)
    return () => {
      wsChannel?.removeEventListener('open', openHandler)
    }
  }, [wsChannel])

  const sendMessage = () => {
    if (!message) return
    wsChannel?.send(message)
    setMessage('')
  }

  return (
    <div className={s.new_message_block}>
      <div>
        <textarea
          onChange={(e) => setMessage(e.currentTarget.value)}
          value={message}
        ></textarea>
      </div>
      <div>
        <button
          disabled={readyStatus == null || readyStatus !== 'ready'}
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  )
}

// ------------------------------------- types --------------------------------

type chatMessageType = {
  userId: number
  userName: string
  photo: string
  message: string
}
