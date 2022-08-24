import s from './Users.module.css'
import User from './User/User'
import Paginator from './User/Paginator/Paginator'

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className={s.users}>
      <Paginator
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        portionSize={props.portionSize}
      />
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
          followingInProgress={props.followingInProgress}
          toggleFollowingProgress={props.toggleFollowingProgress}
        />
      ))}
    </div>
  )
}

export default Users
