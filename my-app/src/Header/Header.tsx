import { NavLink } from 'react-router-dom'
//@ts-ignore
import s from './Header.module.css'

const Header: React.FC<propsType> = ({ isAuth, login, logout }) => {
  return (
    <div className={s.header}>
      <div>
        <img src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn" />
      </div>
      <div className={s.login_block}>
        {isAuth ? (
          <div>
            {login} - <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
      Header
    </div>
  )
}

export default Header

// -------------------------------- types ----------------------------------

type propsType = {
  isAuth: boolean
  login: string | null
  logout: () => void
}
