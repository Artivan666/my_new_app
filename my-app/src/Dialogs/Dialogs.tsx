import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import {
  createField,
  Input,
  Textarea,
} from '../common/formsControl/FormsControl'
import { dialogType, messageType } from '../redux/dialogs-reducer'
import { maxLengthCreator, requiredField } from '../utils/validators/validators'
import Dialog from './Dialog/Dialog'
//@ts-ignore
import s from './Dialogs.module.css'
import Message from './Message/Message'

const AddMessageForm: React.FC<
  InjectedFormProps<newMessageFormValuesType, loginFormOwnPropsType> &
    loginFormOwnPropsType
> = (props) => {
  const maxLength10 = maxLengthCreator(10)

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {createField<loginFormFieldsNameType>(
          Textarea,
          'newMessage',
          [requiredField, maxLength10],
          'New post'
        )}
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm<
  newMessageFormValuesType,
  loginFormOwnPropsType
>({ form: 'newMessageForm' })(AddMessageForm)

const Dialogs: React.FC<propsType> = (props) => {
  const dialogs = props.dialogs.map((d) => (
    <Dialog key={d.id} id={d.id} name={d.name} />
  ))

  const messages = props.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ))

  const onSubmit = (formData: newMessageFormValuesType) => {
    props.sendMessage(formData.newMessage)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_list}>{dialogs}</div>
      <AddMessageFormRedux onSubmit={onSubmit} />
      <div className={s.new_message_box}></div>
      <div className={s.messages_list}>{messages}</div>
    </div>
  )
}

export default Dialogs

//------------------------------- types ----------------------------------

type propsType = {
  dialogs: Array<dialogType>
  messages: Array<messageType>
  sendMessage: (newMessage: string) => void
}

type newMessageFormValuesType = {
  newMessage: string
}

type loginFormFieldsNameType = Extract<keyof newMessageFormValuesType, string>

type loginFormOwnPropsType = {}
