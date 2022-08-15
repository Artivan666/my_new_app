import { connect } from 'react-redux'
import React from 'react'
import { getUserProfile } from '../redux/profile-reducer'
import Profile from './Profile'
import { useParams } from 'react-router-dom'

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.userId)
  }

  componentDidUpdate(prevProps) {
    let userId = this.props.userId
    if (prevProps.userId !== userId) {
      let userId = 2

      this.props.getUserProfile(this.props.userId)
    }
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

const WithRouterComponent = (props) => {
  const params = useParams()
  return (
    <ProfileContainer
      {...props} // Пропсы из mapStateToProps, {setUserProfile}
      userId={params.userId ? params.userId : '2'} // Если такого userId нету, то отобразить 2
    />
  )
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export default connect(mapStateToProps, { getUserProfile })(WithRouterComponent)
