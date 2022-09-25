import { useSelector } from 'react-redux'
import React from 'react'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { getIsFetching } from '../redux/users-selectors'

export const UsersPage: React.FC<usersPagePropsType> = (props) => {
  const isFetching = useSelector(getIsFetching)

  return (
    <>
      {/* логика опрдеделения показаывать предлоадер или нет должна быть здесь */}
      <Preloader isFetching={isFetching} />
      <Users />
    </>
  )
}

// --------------------------------- type --------------------------------

type usersPagePropsType = {}
