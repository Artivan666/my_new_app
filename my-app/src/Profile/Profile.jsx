import PostsContainer from './Posts/PostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
        // authUserId={props.authUserId}
        // userId={props.userId}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
      />
      <PostsContainer />
    </div>
  )
}

export default Profile
