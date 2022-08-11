import s from './Users.module.css'
import User from './User/User'

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

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
            className={props.currentPage == p ? s.selected : null}
            onClick={() => {
              props.onPageChanged(p)
            }}
          >
            {p}
          </button>
        ))}
      </div>
      {props.users.map((u) => (
        <User
          key={u.id}
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
