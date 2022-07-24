import s from './Navigation.module.css'

const Navigation = (props) => {
  return (
    <div className={s.nav}>
      <div>
        <a href="#">Profile</a>
      </div>
      <div>
        <a href="#">Messages</a>
      </div>
      <div>
        <a href="#">Settings</a>
      </div>
    </div>
  )
}

export default Navigation
