import { upload } from '@testing-library/user-event/dist/upload'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../api/api'
import s from './User.module.css'

// followed: false
// id: 25339
// name: "av3210"
// photos: {small: null, large: null}
// status: null
// uniqueUrlName: null

const User = (props) => {
  const follow = (userId) => {
    props.toggleFollowingProgress(true, userId)
    usersAPI.follow(userId).then((res) => {
      if (res.data.resultCode == 0) {
        props.follow(userId)
      }
      props.toggleFollowingProgress(false, userId)
    })
  }

  const unfollow = (userId) => {
    props.toggleFollowingProgress(true, userId)
    usersAPI.unfollow(userId).then((res) => {
      if (res.data.resultCode == 0) {
        props.unfollow(userId)
      }
      props.toggleFollowingProgress(false, userId)
    })
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
