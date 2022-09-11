import { InjectedFormProps, reduxForm } from 'redux-form'
import { createField, Input } from '../../../common/formsControl/FormsControl'
import { profileType } from '../../../Overall_types/overall-types'
import { requiredField } from '../../../utils/validators/validators'
//@ts-ignore
import s from './ProfileDataForm.module.css'

const ProfileDataForm: React.FC<
  InjectedFormProps<profileDataFormValuesType, profileDataFormOwnPropsType> &
    profileDataFormOwnPropsType
> = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.profileDataForm}>
      <div>
        <b>Full name: </b>{' '}
        {createField<profileDataFormFieldsNameType>(
          Input,
          'fullName',
          [requiredField],
          '',
          '',
          ''
        )}
      </div>
      <div>
        <b>Looking for a job: </b>{' '}
        {createField<profileDataFormFieldsNameType>(
          Input,
          'lookingForAJob',
          [requiredField],
          '',
          'checkbox',
          ''
        )}
      </div>
      <div>
        <b>My professional skills: </b>{' '}
        {createField<profileDataFormFieldsNameType>(
          Input,
          'lookingForAJobDescription',
          [],
          '',
          '',
          ''
        )}
      </div>
      <div>
        <b>About me: </b>{' '}
        {createField<profileDataFormFieldsNameType>(
          Input,
          'aboutMe',
          [],
          '',
          '',
          ''
        )}
      </div>
      <b>Contacts: </b>
      <div className={s.contacts}>
        {' '}
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <div key={key}>
              <b>{key}: </b>{' '}
              {createField(Input, 'contacts.' + key, [], '', '', '')}
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
const ProfileDataReduxForm = reduxForm<
  profileDataFormValuesType,
  profileDataFormOwnPropsType
>({
  form: 'profileDataForm',
  enableReinitialize: true,
  destroyOnUnmount: false,
})(ProfileDataForm)

export default ProfileDataReduxForm

//-------------------------------------- types -----------------------------------

// типизация формы
// 1. указываем заинжекченные пропсы
{
  /* <InjectedFormProps<FormValuesType, FormOwnPropsType> & FormOwnPropsType> */
}
// 2. выводим тип даных, которые сабмитит форма FormValuesType
// 3. из этих данные выводим типы для name филдов
// Extract<keyof FormValuesType, string>
// 4. сообщаем redux-form какие пропсы он принимает
// reduxForm<formValuesType, formOwnPropsType>({form: 'nameForm'})(form)

type profileDataFormValuesType = profileType

type profileDataFormOwnPropsType = {
  profile: profileType
}

type profileDataFormFieldsNameType = Extract<
  keyof profileDataFormValuesType,
  string
>
