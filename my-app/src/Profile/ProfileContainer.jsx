import { connect } from 'react-redux'
import axios from 'axios'
import React from 'react'
import { setUserProfile } from '../redux/profile-reducer'
import Profile from './Profile'
import { useParams } from 'react-router-dom'

class ProfileContainer extends React.Component {
  componentDidMount() {
    // this.props.userId - наша переданная id из url :)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`
      )
      .then((res) => {
        this.props.setUserProfile(res.data)
      })
  }

  componentDidUpdate(prevProps) {
    let userId = this.props.userId
    if (prevProps.userId !== userId) {
      let userId = 2
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then((response) => {
          this.props.setUserProfile(response.data)
        })
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

export default connect(mapStateToProps, { setUserProfile })(WithRouterComponent)
