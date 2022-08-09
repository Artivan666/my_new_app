import axios from 'axios'
import React from 'react'
import User from './User/User'

class Users extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((res) => {
        this.props.setUsers(res.data.items)
      })
  }

  render() {
    return (
      <div>
        {this.props.users.map((u) => (
          <User
            id={u.id}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followed={u.followed}
            name={u.name}
            photo={u.photos.small}
            status={u.status}
          />
        ))}
      </div>
    )
  }
}

export default Users
