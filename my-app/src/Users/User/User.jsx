import s from './User.module.css'

// followed: false
// id: 25339
// name: "av3210"
// photos: {small: null, large: null}
// status: null
// uniqueUrlName: null

const User = (props) => {
  return (
    <div className={s.user_box}>
      <div className={s.img_box}>
        <img
          src={
            props.photo
              ? props.photo
              : 'https://www.clevelanddentalhc.com/wp-content/uploads/2018/03/sample-avatar.jpg'
          }
        />
      </div>
      <div>{props.name}</div>
      <div>
        {props.followed ? (
          <button
            onClick={() => {
              props.unfollow(props.id)
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            onClick={() => {
              props.follow(props.id)
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
