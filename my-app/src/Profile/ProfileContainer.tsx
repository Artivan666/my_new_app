import { connect } from 'react-redux'
import React from 'react'
import {
  getUserProfile,
  getUserStatus,
  savePhoto,
  saveProfile,
  updateUserStatus,
} from '../redux/profile-reducer'
//@ts-ignore
import Profile from './Profile.tsx'
import { appStateType } from '../redux/redux-store'
import { profileType } from '../Overall_types/overall-types'
import { useParams } from 'react-router-dom'

class ProfileContainer extends React.Component<propsType> {
  refreshProfile() {
    let userId = this.props.userId
    console.log('refreshProfile ' + userId)

    if (!userId) {
      console.log('ID should exists')
    } else {
      this.props.getUserProfile(25328)
      this.props.getUserStatus(25328)
    }
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: propsType, prevState: propsType) {
    console.log(this.props.userId == prevProps.userId)
    if (this.props.userId != prevProps.userId) {
      debugger
      this.refreshProfile()
    }
  }

  render() {
    console.log('render')
    return (
      <Profile
        {...this.props} // ???????????
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
        isOwner={this.props.authUserId == this.props.userId}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
      />
    )
  }
}

const WithRouterComponent = (props: propsType) => {
  const params = useParams()

  return (
    <ProfileContainer
      {...props} // Пропсы из mapStateToProps, {setUserProfile}
      userId={params.userId ? Number(params.userId) : props.authUserId} // Если такого userId нету, то отобразить 2
    />
  )
}

const mapStateToProps = (state: appStateType): mapStatePropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUserId: state.auth.userId,
  userId: state.profilePage.profile?.userId,
})

export default connect<
  mapStatePropsType,
  mapDispatchPropsType,
  ownPropsType,
  appStateType
>(mapStateToProps, {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  savePhoto,
  saveProfile,
})(WithRouterComponent)

// ---------------------------- types --------------------------------

type mapStatePropsType = {
  profile: profileType | null
  status: string
  authUserId: number | null
  userId: number | undefined | null
}

type mapDispatchPropsType = {
  getUserProfile: (userId: number) => void
  getUserStatus: (userId: number) => void
  updateUserStatus: (status: string) => void
  savePhoto: (file: File) => void
  saveProfile: (profile: profileType) => void
}

type ownPropsType = {}

type propsType = mapStatePropsType & mapDispatchPropsType & ownPropsType
