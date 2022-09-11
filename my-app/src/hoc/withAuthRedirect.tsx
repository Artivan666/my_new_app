import React from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { appStateType } from '../redux/redux-store'

let mapStateToPropsForRedirect = (state: appStateType) =>
  ({
    isAuth: state.auth.isAuth,
  } as MapPropsType)

type MapPropsType = {
  isAuth: boolean
}
type DispatchPropsType = {}

export function withAuthRedirect(WrappedComponent: React.ComponentType) {
  const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (
    props
  ) => {
    let { isAuth, ...restProps } = props

    if (!isAuth) return <Navigate to="/login" />

    return <WrappedComponent {...restProps} />
  }

  let ConnectedAuthRedirectComponent = connect<
    MapPropsType,
    DispatchPropsType,
    {},
    appStateType
  >(
    mapStateToPropsForRedirect,
    {}
  )(RedirectComponent)

  return ConnectedAuthRedirectComponent
}
