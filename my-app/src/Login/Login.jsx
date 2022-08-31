import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { createField, Input } from '../common/formsControl/FormsControl'
import { login, logout } from '../redux/auth-reducer'
import { requiredField } from '../utils/validators/validators'
import s from './Login.module.css'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {createField(Input, 'email', requiredField, 'Email', null, null)}
      </div>
      <div>
        {createField(
          Input,
          'password',
          requiredField,
          'Password',
          'password',
          null
        )}
      </div>
      <div>
        {createField(
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
        ? createField(Input, 'captcha', [requiredField], null, null, null)
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

const LoginReduxForm = reduxForm({ form: 'loginForm' })(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    )
  }

  if (props.isAuth) return <Navigate to="/profile" />

  return (
    <div className={s.login}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, { login, logout })(Login)
