import s from './Avatar.module.css'
import avatar from '../../../images/avatar.jpg'

const Avatar = (props) => {
  const onSelectMainPhoto = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <div className={s.avatar}>
      <img src={props.photo ? props.photo : avatar} />
      <div>
        {props.isOwner ? (
          <input type="file" onChange={onSelectMainPhoto} />
        ) : null}
      </div>
    </div>
  )
}

export default Avatar
