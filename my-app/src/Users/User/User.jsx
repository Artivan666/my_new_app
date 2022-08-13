import axios from 'axios'
import { NavLink } from 'react-router-dom'
import s from './User.module.css'

// followed: false
// id: 25339
// name: "av3210"
// photos: {small: null, large: null}
// status: null
// uniqueUrlName: null

const User = (props) => {
  const follow = (userId) => {
    console.log('follow')
    axios
      .post(
        `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        {},
        {
          withCredentials: true,
          headers: {
            'API-KEY': 'e5f2c05d-3abf-4136-95a0-734ede57770a',
          },
        }
      )
      .then((res) => {
        if (res.data.resultCode == 0) {
          props.follow(userId)
        }
      })
  }

  const unfollow = (userId) => {
    console.log('unfollow')
    axios
      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
        withCredentials: true,
        headers: {
          'API-KEY': 'e5f2c05d-3abf-4136-95a0-734ede57770a',
        },
      })
      .then((res) => {
        if (res.data.resultCode == 0) {
          props.unfollow(userId)
        }
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
            onClick={() => {
              unfollow(props.id)
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
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
