import { NavLink } from 'react-router-dom'
import s from './User.module.css'

const User = (props) => {
  const follow = (userId) => {
    props.follow(userId)
  }

  const unfollow = (userId) => {
    props.unfollow(userId)
  }

  return (
    <div className={s.user_box}>
      <div className={s.img_box}>
        <NavLink to={'/profile/' + props.id}>
          <img
            src={
              props.photo
                ? props.photo
                : 'https://www.clevelanddentalhc.com/wp-content/uploads/2018/03/sample-avatar.jpg'
            }
          />
        </NavLink>
      </div>
      <div>{props.name}</div>
      <div>
        {props.followed ? (
          <button
            disabled={props.followingInProgress.some((id) => id === props.id)}
            onClick={() => {
              unfollow(props.id)
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={props.followingInProgress.some((id) => id === props.id)}
            onClick={() => {
              follow(props.id)
            }}
          >
            Follow
          </button>
        )}
      </div>
      <div>{props.status}</div>
    </div>
  )
}

export default User
