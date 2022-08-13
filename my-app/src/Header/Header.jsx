import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) => {
  return (
    <div className={s.header}>
      <div>
        <img src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn" />
      </div>
      <div className={s.login_block}>
        {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
      </div>
      Header
    </div>
  )
}

export default Header
