import s from './Users.module.css'

const Users = (props) => {
  if (!props.users.length) {
    props.setUsers([
      {
        id: 1,
        photoURL: 'https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg',
        followed: false,
        fullName: 'Dmitry',
        status: 'Boss',
        location: { city: 'Moskow', country: 'Russia' },
      },
      {
        id: 2,
        photoURL: 'https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg',
        followed: true,
        fullName: 'Ivan',
        status: 'Boss',
        location: { city: 'Moskow', country: 'Russia' },
      },
      {
        id: 3,
        photoURL: 'https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg',
        followed: false,
        fullName: 'Sasha',
        status: 'Boss',
        location: { city: 'Moskow', country: 'Russia' },
      },
    ])
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id} className={s.user_box}>
          <div className={s.user_avatar}>
            <img src={u.photoURL} />
          </div>
          <div className={s.user_name}></div>
          <div>Status</div>
          <div>
            {u.followed ? (
              <button
                onClick={() => {
                  props.unfollow(u.id)
                }}
              >
                True
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(u.id)
                }}
              >
                False
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Users
