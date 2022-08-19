import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { login, logout } from '../redux/auth-reducer'
import s from './Login.module.css'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={'input'} name={'email'} placeholder="Email" />
      </div>
      <div>
        <Field
          component={'input'}
          name={'password'}
          type="password"
          placeholder="Password"
        />
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
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) return <Navigate to="/profile" />

  return (
    <div className={s.login}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login, logout })(Login)
