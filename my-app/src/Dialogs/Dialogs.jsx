import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/formsControl/FormsControl'
import { maxLengthCreator, requiredField } from '../utils/validators/validators'
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

  const onSendMessageClick = (val) => {
    props.onSendMessageClick()
  }

  const addNewMessage = (values) => {
    props.onSendMessageClick(values.newMessage)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_list}>{dialogs}</div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
      <div className={s.new_message_box}></div>
      <div className={s.messages_list}>{messages}</div>
    </div>
  )
}

export default Dialogs

const AddMessageForm = (props) => {
  const maxLength10 = maxLengthCreator(10)

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newMessage"
          validate={[requiredField, maxLength10]}
          placeholder="Enter your message"
        ></Field>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({ form: 'newMessageForm' })(
  AddMessageForm
)
