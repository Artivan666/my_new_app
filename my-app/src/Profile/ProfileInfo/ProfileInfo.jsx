import Preloader from '../../common/Preloader/Preloader'
import Status from '../../Status/Status'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={s.profileInfo}>
      <div>
        <img src={props.profile.photos.large} />
      </div>
      <div>{props.profile.fullName}</div>
      <div>
        <Status
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />
      </div>
      <div>Обо мне: {props.profile.aboutMe}</div>
    </div>
  )
}

export default ProfileInfo
