import Navigation from './Navigation/Navigation'
//@ts-ignore
import s from './Sidebar.module.css'

const Sidebar: React.FC<propsType> = (props) => {
  return (
    <div className={s.sidebar}>
      <Navigation />
    </div>
  )
}

export default Sidebar

// --------------------------------------- props --------------------------------

type propsType = {}
