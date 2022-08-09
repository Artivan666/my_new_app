import axios from 'axios'
import User from './User/User'

const Users = (props) => {
  if (!props.users.length) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((res) => {
        props.setUsers(res.data.items)
      })
  }

  return (
    <div>
      {props.users.map((u) => (
        <User
          id={u.id}
          follow={props.follow}
          unfollow={props.unfollow}
          followed={u.followed}
          name={u.name}
          photo={u.photos.small}
          status={u.status}
        />
      ))}
    </div>
  )
}

export default Users
