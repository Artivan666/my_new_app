import Posts from './Posts/Posts'
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.profile}>
      <div>ava + description</div>
      <Posts />
    </div>
  )
}

export default Profile
