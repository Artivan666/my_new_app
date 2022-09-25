//@ts-ignore
import s from './Users.module.css'
import User from './User/User'
import Paginator from './User/Paginator/Paginator'
import {
  filterType,
  follow,
  getUsers,
  unfollow,
  userType,
} from '../redux/users-reducer'
import UsersSearchForm from './UsersSearchForm/UsersSearchForm'
import { useDispatch, useSelector } from 'react-redux'
import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getPortionSize,
  getTotalUsersCount,
  getUsersFilter,
  getUsersFromState,
} from '../redux/users-selectors'
import { useEffect } from 'react'

type propsType = {}

const Users: React.FC<propsType> = (props) => {
  // const pagesCount = Math.ceil(totalUsersCount / pageSize)

  // const pages = []
  // for (let i = 1; i <= pagesCount; i++) {
  //   pages.push(i)
  // }

  const users = useSelector(getUsersFromState)
  const totalUsersCount = useSelector(getTotalUsersCount)
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const filter = useSelector(getUsersFilter)
  const followingInProgress = useSelector(getFollowingInProgress)
  const portionSize = useSelector(getPortionSize)

  const dispatch = useDispatch()

  // пустая зависимость [] означает когда компанента вмонтируется сделать что-то
  // не передать зависимость это не тоже самое что передать пустой массив []
  useEffect(() => {
    dispatch(getUsers(currentPage, pageSize, filter) as any) // !!!!!!!!!!!!!!!!!!!!
  }, [])

  const onPageChanged = (pageNumber: number) => {
    dispatch(getUsers(pageNumber, pageSize, filter) as any)
  } // !!!!!!!!!!!!!!!!!!!!!!!

  const onFilterChanged = (filter: filterType) => {
    dispatch(getUsers(1, pageSize, filter) as any) // !!!!!!!!!!!!!!!!!!!!!!
  }

  const followCB = (userId: number) => {
    dispatch(follow(userId) as any) // !!!!!!!!!!!!
  }
  const unfollowCB = (userId: number) => {
    dispatch(unfollow(userId) as any) // !!!!!!!!!!!!
  }

  return (
    <div className={s.users}>
      <UsersSearchForm onFilterChanged={onFilterChanged} />
      <Paginator
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        portionSize={portionSize}
      />
      {users.map((u) => (
        <User
          key={u.id}
          userId={u.id}
          follow={followCB}
          unfollow={unfollowCB}
          followed={u.followed}
          name={u.name}
          photo={u.photos.small}
          status={u.status}
          followingInProgress={followingInProgress}
        />
      ))}
    </div>
  )
}

export default Users
