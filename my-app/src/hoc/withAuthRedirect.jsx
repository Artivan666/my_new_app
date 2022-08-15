import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (this.props.isAuth == false) return <Navigate to="/login" />

      return <Component {...this.props} />
    }
  }

  const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
  })

  const authRedirectComponent = connect(mapStateToProps)(RedirectComponent)

  return authRedirectComponent
}
