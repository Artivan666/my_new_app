import { reduxForm } from 'redux-form'
import { createField, Input } from '../../../common/formsControl/FormsControl'
import { requiredField } from '../../../utils/validators/validators'
import s from './ProfileDataForm.module.css'

const ProfileDataForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.profileDataForm}>
      <div>
        <b>Full name: </b>{' '}
        {createField(Input, 'fullName', [requiredField], null, null, null)}
      </div>
      <div>
        <b>Looking for a job: </b>{' '}
        {createField(
          Input,
          'lookingForAJob',
          [requiredField],
          null,
          'checkbox',
          null
        )}
      </div>
      <div>
        <b>My professional skills: </b>{' '}
        {createField(
          Input,
          'lookingForAJobDescription',
          null,
          null,
          null,
          null
        )}
      </div>
      <div>
        <b>About me: </b>{' '}
        {createField(Input, 'aboutMe', null, null, null, null)}
      </div>
      <b>Contacts: </b>
      <div className={s.contacts}>
        {' '}
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <div key={key}>
              <b>{key}: </b> {createField(Input, 'contacts.' + key, null)}
            </div>
          )
        })}
      </div>
      <div>
        <button>Save</button>
        {props.error ? (
          <div className={s.overallFormError}>{props.error}</div>
        ) : null}
      </div>
    </form>
  )
}

// если не работаем инициализация - добавить два свойства enableReinitialize: true,
// destroyOnUnmount: false,
const ProfileDataReduxForm = reduxForm({
  form: 'profileDataForm',
  enableReinitialize: true,
  destroyOnUnmount: false,
})(ProfileDataForm)

export default ProfileDataReduxForm
