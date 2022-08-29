import Preloader from '../../common/Preloader/Preloader'
import Status from '../../Status/Status'
import StatusWitnHooks from '../../Status/StatusWithHooks'
import s from './ProfileInfo.module.css'
import Avatar from './Avatar/Avatar'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={s.profileInfo}>
      <Avatar
        // userId={props.userId}
        // authUserId={props.authUserId}
        photo={props.profile.photos.large}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
      />
      <div>{props.profile.fullName}</div>
      <div>
        {/* <Status
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        /> */}

        <StatusWitnHooks
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />
      </div>
      <div>Обо мне: {props.profile.aboutMe}</div>
    </div>
  )
}

export default ProfileInfo
