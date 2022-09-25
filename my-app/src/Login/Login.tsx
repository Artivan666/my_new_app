import { connect, useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { createField, Input } from '../common/formsControl/FormsControl'
import { login, logout } from '../redux/auth-reducer'
import { appStateType } from '../redux/redux-store'
import { requiredField } from '../utils/validators/validators'
//@ts-ignore
import s from './Login.module.css'

// компонента loginForm принимает заинжекченные пропсы InjectedFormProps
// какие именно пропсы собирает форма(то что будет сабмитится)
const LoginForm: React.FC<
  InjectedFormProps<loginFormValuesType, loginFormOwnPropsType> &
    loginFormOwnPropsType
> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {createField<loginFormFieldsNameType>(
          Input,
          'email',
          [requiredField],
          'Enter email',
          '',
          ''
        )}
      </div>
      <div>
        {createField<loginFormFieldsNameType>(
          Input,
          'password',
          [requiredField],
          'Password',
          'password',
          ''
        )}
      </div>
      <div>
        {createField<loginFormFieldsNameType>(
          Input,
          'rememberMe',
          [],
          'null',
          'checkbox',
          'remember me'
        )}
      </div>
      {props.captchaUrl ? <img src={props.captchaUrl} /> : null}
      {props.captchaUrl
        ? createField<loginFormFieldsNameType>(
            Input,
            'captcha',
            [requiredField],
            '',
            '',
            ''
          )
        : null}
      {props.error ? (
        <div className={s.overallFormError}>{props.error}</div>
      ) : null}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<loginFormValuesType, loginFormOwnPropsType>({
  form: 'loginForm',
})(LoginForm)

export const Login: React.FC = () => {
  const captchaUrl = useSelector((state: appStateType) => state.auth.captchaUrl)
  const isAuth = useSelector((state: appStateType) => state.auth.isAuth)

  const dispatch = useDispatch()

  const loginCB = (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null
  ) => {
    dispatch(login(email, password, rememberMe, captcha) as any) // !!!!!!!!!!!!!!!
  }

  const logout = () => {
    dispatch(logout() as any)
  }

  const onSubmit = (formData: loginFormValuesType) => {
    loginCB(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    )
  }

  if (isAuth) return <Navigate to="/profile" />

  return (
    <div className={s.login}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  )
}

// ------------------------------ types ---------------------------------

type loginFormOwnPropsType = {
  captchaUrl: string | null
}

type loginFormValuesType = {
  captcha: string | null
  rememberMe: boolean
  password: string
  email: string
}

// there are two options:
// type loginFormFieldsNameType = keyof loginFormValuesType
type loginFormFieldsNameType = Extract<keyof loginFormValuesType, string>

// type propsType = {}
