//@ts-ignore
import s from './Users.module.css'
import User from './User/User'
import Paginator from './User/Paginator/Paginator'
import { filterType, userType } from '../redux/users-reducer'
import UsersSearchForm from './UsersSearchForm/UsersSearchForm'

type propsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  portionSize: number
  followingInProgress: Array<number>
  users: Array<userType>
  onPageChanged: (pageNumber: number) => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  onFilterChanged: (filter: filterType) => void
}

const Users: React.FC<propsType> = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className={s.users}>
      <UsersSearchForm onFilterChanged={props.onFilterChanged} />
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
          userId={u.id}
          follow={props.follow}
          unfollow={props.unfollow}
          followed={u.followed}
          name={u.name}
          photo={u.photos.small}
          status={u.status}
          followingInProgress={props.followingInProgress}
        />
      ))}
    </div>
  )
}

export default Users
