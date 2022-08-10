import s from './Users.module.css'
import axios from 'axios'
import React from 'react'
import User from './User/User'

class Users extends React.Component {
  // срабатывает один раз, при загрузке страницы
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items)
      })
  }

  render() {
    const pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    )

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div>
        <div className={s.pagination}>
          {pages.map((p) => (
            <button
              key={p}
              className={this.props.currentPage == p ? s.selected : null}
              onClick={() => {
                this.onPageChanged(p)
              }}
            >
              {p}
            </button>
          ))}
        </div>
        {this.props.users.map((u) => (
          <User
            key={u.id}
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
