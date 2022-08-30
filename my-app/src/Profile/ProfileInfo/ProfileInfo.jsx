import Preloader from '../../common/Preloader/Preloader'
import Status from '../../Status/Status'
import StatusWitnHooks from '../../Status/StatusWithHooks'
import s from './ProfileInfo.module.css'
import Avatar from './Avatar/Avatar'
import { useState } from 'react'
import ProfileData from './ProfileData/ProfileData'
import ProfileDataReduxForm from './ProfileDataForm/ProfileDataForm'

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false)

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false)
    })
  }

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
      {editMode ? (
        <ProfileDataReduxForm
          initialValues={props.profile}
          onSubmit={onSubmit}
          profile={props.profile}
        />
      ) : (
        <ProfileData
          profile={props.profile}
          isOwner={props.isOwner}
          activateEditMode={() => {
            setEditMode(true)
          }}
        />
      )}
    </div>
  )
}

export default ProfileInfo
