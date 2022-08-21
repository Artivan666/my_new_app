import { connect } from 'react-redux'
import {
  follow,
  getUsers,
  toggleFollowingProgress,
  unfollow,
} from '../redux/users-reducer'
import React from 'react'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsersFromState,
} from '../redux/users-selectors'

class UsersAPIComponent extends React.Component {
  // срабатывает один раз, при загрузке страницы
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {
    return (
      <>
        <Preloader isFetching={this.props.isFetching} />
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    )
  }
}

// срабатывает всегда при изменении в стэйт
// формирует объект из свойств и сравнивает с объектом котороый уже был до изменений в стэйт
// но компонент перерисовывается только если приходит объект с новыми свойствами (значениями)
const mapStateToProps = (state) => ({
  users: getUsersFromState(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state),
})
const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  toggleFollowingProgress,
  getUsers, // thunkCreatore
})(UsersAPIComponent)

export default UsersContainer
