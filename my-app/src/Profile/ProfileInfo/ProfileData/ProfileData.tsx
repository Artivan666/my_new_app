import { profileType } from '../../../Overall_types/overall-types'
//@ts-ignore
import s from './ProfileData.module.css'

const ProfileData: React.FC<propsType> = (props) => {
  return (
    <div className={s.profileData}>
      {props.isOwner ? (
        <button onClick={props.activateEditMode}>Edit</button>
      ) : null}
      <div>
        <b>Looking for a job: </b>
        {props.profile.lookingForAJob ? 'Yes' : 'No'}
        {props.profile.lookingForAJob ? (
          <div>
            <b>My professional skills: </b>{' '}
            {props.profile.lookingForAJobDescription}{' '}
          </div>
        ) : null}
      </div>
      <div>
        <b>Обо мне: </b> {props.profile.aboutMe}
      </div>
      <b>Contacts: </b>
      <div className={s.contacts}>
        {Object.keys(props.profile.contacts).map((key) => (
          <Contact
            key={key}
            contactTitle={key}
            contactValue={props.profile.contacts[key as keyof contactsType]}
          />
        ))}
      </div>
    </div>
  )
}

export default ProfileData

const Contact: React.FC<contactPropsType> = (props) => {
  return (
    <div>
      <b> {props.contactTitle}: </b>
      {props.contactValue}
    </div>
  )
}

//------------------------------------- propsType -------------------------------------

type propsType = {
  isOwner: boolean
  profile: profileType
  activateEditMode: () => void
}

type contactPropsType = {
  contactTitle: string
  contactValue: string
}

type contactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
