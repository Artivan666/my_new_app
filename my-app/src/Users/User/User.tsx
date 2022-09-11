import { NavLink } from 'react-router-dom'
//@ts-ignore
import s from './User.module.css'

const User: React.FC<propsType> = ({
  follow,
  unfollow,
  userId,
  photo,
  name,
  followed,
  followingInProgress,
  status,
}) => {
  const onFollow = (userId: number) => {
    console.log(userId)
    follow(userId)
  }

  const onUnfollow = (userId: number) => {
    unfollow(userId)
  }

  return (
    <div className={s.user_box}>
      <div className={s.img_box}>
        <NavLink to={'/profile/' + userId}>
          <img
            src={
              photo
                ? photo
                : 'https://www.clevelanddentalhc.com/wp-content/uploads/2018/03/sample-avatar.jpg'
            }
          />
        </NavLink>
      </div>
      <div>{name}</div>
      <div>
        {followed ? (
          <button
            disabled={followingInProgress.some((id) => userId === id)}
            onClick={() => {
              onUnfollow(userId)
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => userId === id)}
            onClick={() => {
              onFollow(userId)
            }}
          >
            Follow
          </button>
        )}
      </div>
      <div>{status}</div>
    </div>
  )
}

export default User

// -------------------------------------- types ----------------------------------

type propsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  userId: number
  photo: string | null
  name: string
  followed: boolean
  followingInProgress: Array<number>
  status: string
}
