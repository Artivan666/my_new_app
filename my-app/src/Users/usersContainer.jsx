import { connect } from 'react-redux'
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
} from '../redux/users-reducer'
import Users from './Users'

// срабатывает всегда
// но компонент перерисовывается только если приходит объект с новыми свойствами (значениями)
const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
})

const mapDispatchToProps = (dispatch) => ({
  setUsers: (users) => {
    dispatch(setUsersAC(users))
  },
  follow: (userId) => {
    dispatch(followAC(userId))
  },
  unfollow: (userId) => {
    dispatch(unfollowAC(userId))
  },
  setCurrentPage: (currentPage) => {
    dispatch(setCurrentPageAC(currentPage))
  },
  setTotalUsersCount: (totalUsersCount) => {
    dispatch(setTotalUsersCountAC(totalUsersCount))
  },
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
