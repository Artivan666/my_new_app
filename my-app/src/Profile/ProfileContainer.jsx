import { connect } from 'react-redux'
import React from 'react'
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
} from '../redux/profile-reducer'
import Profile from './Profile'
import { useParams } from 'react-router-dom'

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.userId)
    this.props.getUserStatus(this.props.userId)
  }

  componentDidUpdate(prevProps) {
    let userId = this.props.userId
    if (prevProps.userId !== userId) {
      let userId = 25328

      this.props.getUserProfile(this.props.userId)
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
      />
    )
  }
}

const WithRouterComponent = (props) => {
  const params = useParams()
  return (
    <ProfileContainer
      {...props} // Пропсы из mapStateToProps, {setUserProfile}
      userId={params.userId ? params.userId : '25328'} // Если такого userId нету, то отобразить 2
    />
  )
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
})
export default connect(mapStateToProps, {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
})(WithRouterComponent)
