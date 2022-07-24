import s from './Dialog.module.css'
import { NavLink } from 'react-router-dom'

const Dialog = (props) => {
  const path = '/dialogs/' + props.id

  return (
    <div className={s.dialogs_item + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default Dialog
