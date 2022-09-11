import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { logout } from '../redux/auth-reducer'
import { appStateType } from '../redux/redux-store'

class HeaderContainer extends React.Component<propsType> {
  // componentDidMount() {
  //   this.props.authMe()
  // }

  render() {
    // if (this.props.isAuth == false) return <Navigate to="/login" />

    return (
      <Header
        isAuth={this.props.isAuth}
        login={this.props.login}
        logout={this.props.logout}
      />
    )
  }
}

const mapStateToProps = (state: appStateType): mapStatePropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export default connect<
  mapStatePropsType,
  mapDispatchPropsType,
  ownPropsType,
  appStateType
>(mapStateToProps, { logout })(HeaderContainer)

//-------------------------------- types -----------------------------------

type mapStatePropsType = {
  isAuth: boolean
  login: string | null
}

type mapDispatchPropsType = {
  logout: () => void
}

type ownPropsType = {}

type propsType = mapStatePropsType & mapDispatchPropsType & ownPropsType
