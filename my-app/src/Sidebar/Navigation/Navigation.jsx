import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'

const Navigation = (props) => {
  const setActive = ({ isActive }) => (isActive ? s.activeLink : '')

  return (
    <div className={s.nav}>
      <div className={s.nav_item}>
        <NavLink to="/profile" className={setActive}>
          Profile
        </NavLink>
      </div>
      <div className={s.nav_item}>
        <NavLink to="/messages" className={setActive}>
          Messages
        </NavLink>
      </div>
      <div className={s.nav_item}>
        <NavLink to="/users" className={setActive}>
          Users
        </NavLink>
      </div>
      <div className={s.nav_item}>
        <NavLink to="/settings" className={setActive}>
          Settings
        </NavLink>
      </div>
    </div>
  )
}

export default Navigation
