import s from './ProfileData.module.css'

const ProfileData = (props) => {
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
            contactValue={props.profile.contacts[key]}
          />
        ))}
      </div>
    </div>
  )
}

export default ProfileData

const Contact = (props) => {
  return (
    <div>
      <b> {props.contactTitle}: </b>
      {props.contactValue}
    </div>
  )
}
