import Preloader from '../../common/Preloader/Preloader'
import Status from '../../Status/Status'
import StatusWitnHooks from '../../Status/StatusWithHooks'
//@ts-ignore
import s from './ProfileInfo.module.css'
import Avatar from './Avatar/Avatar'
import { useState } from 'react'
import ProfileData from './ProfileData/ProfileData'
import ProfileDataReduxForm from './ProfileDataForm/ProfileDataForm'
import { profileType } from '../../Overall_types/overall-types'

const ProfileInfo: React.FC<propsType> = (props) => {
  let [editMode, setEditMode] = useState(false)

  const onSubmit = (formData: profileType) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false)
    })
  }

  if (!props.profile) {
    // return <Preloader />
    return <div>loading...</div>
  }

  return (
    <div className={s.profileInfo}>
      dfdfd
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

// -------------------------------- types ---------------------------

type propsType = {
  profile: profileType
  isOwner: boolean
  status: string
  saveProfile: (profile: profileType) => Promise<any>
  savePhoto: (photo: File) => void
  updateUserStatus: (status: string) => void
}
