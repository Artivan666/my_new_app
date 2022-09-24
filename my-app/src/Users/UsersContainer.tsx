import { connect } from 'react-redux'
import {
  filterType,
  follow,
  getUsers,
  // toggleFollowingProgress,
  unfollow,
  userType,
} from '../redux/users-reducer'
import React from 'react'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getPortionSize,
  getTotalUsersCount,
  getUsersFilter,
  getUsersFromState,
} from '../redux/users-selectors'
import { appStateType } from '../redux/redux-store'

class UsersAPIComponent extends React.Component<propsType> {
  // optional type stateType
  // срабатывает один раз, при загрузке страницы
  componentDidMount() {
    const { currentPage, pageSize, filter } = this.props
    this.props.getUsers(currentPage, pageSize, filter)
  }

  onPageChanged = (pageNumber: number) => {
    const { pageSize, filter } = this.props
    this.props.getUsers(pageNumber, pageSize, filter)
  }

  onFilterChanged = (filter: filterType) => {
    const { pageSize } = this.props
    this.props.getUsers(1, pageSize, filter)
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
          followingInProgress={this.props.followingInProgress}
          portionSize={this.props.portionSize}
          onFilterChanged={this.onFilterChanged}
        />
      </>
    )
  }
}

// срабатывает всегда при изменении в стэйт
// формирует объект из свойств и сравнивает с объектом котороый уже был до изменений в стэйт
// но компонент перерисовывается только если приходит объект с новыми свойствами (значениями)
const mapStateToProps = (state: appStateType): mapStatePropsType => ({
  users: getUsersFromState(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state),
  portionSize: getPortionSize(state),
  filter: getUsersFilter(state),
})
const UsersContainer = connect<
  mapStatePropsType,
  mapDispatchPropsType,
  ownPropsType,
  appStateType
>(mapStateToProps, {
  follow,
  unfollow,
  getUsers, // thunkCreatore
})(UsersAPIComponent)

export default UsersContainer

// --------------------------------- type --------------------------------

type mapStatePropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  users: Array<userType>
  followingInProgress: Array<number>
  portionSize: number
  filter: filterType
}

type mapDispatchPropsType = {
  getUsers: (currentPage: number, pageSize: number, filter: filterType) => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

type ownPropsType = {}

type propsType = mapStatePropsType & mapDispatchPropsType & ownPropsType
