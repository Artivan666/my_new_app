import { profileType } from '../Overall_types/overall-types'
import PostsContainer from './Posts/PostsContainer'
//@ts-ignore
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile: React.FC<propsType> = ({
  profile,
  status,
  updateUserStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  return (
    <div className={s.profile}>
      <ProfileInfo
        profile={profile}
        status={status}
        updateUserStatus={updateUserStatus}
        isOwner={isOwner}
        savePhoto={savePhoto}
        saveProfile={saveProfile}
      />
      <PostsContainer />
    </div>
  )
}

export default Profile

// ---------------------------------------- types ----------------------------------

type propsType = {
  profile: profileType
  status: string
  updateUserStatus: (newStatus: string) => void
  isOwner: boolean
  savePhoto: (photo: File) => void
  saveProfile: (profile: profileType) => Promise<any>
}
