import { Field, reduxForm } from 'redux-form'
import s from './Login.module.css'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={'input'} name={'login'} placeholder="Login" />
      </div>
      <div>
        <Field component={'input'} name={'password'} placeholder="Password" />
      </div>
      <div>
        <Field component={'input'} type={'checkbox'} name={'rememberMe'} />{' '}
        remember me.
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className={s.login}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login
