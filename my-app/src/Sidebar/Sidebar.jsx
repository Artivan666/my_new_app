import Navigation from './Navigation/Navigation'
import s from './Sidebar.module.css'

const Sidebar = (props) => {
  return (
    <div className={s.sidebar}>
      <Navigation />
    </div>
  )
}

export default Sidebar
