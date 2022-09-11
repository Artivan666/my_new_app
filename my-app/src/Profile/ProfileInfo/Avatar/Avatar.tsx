//@ts-ignore
import s from './Avatar.module.css'
//@ts-ignore
import avatar from '../../../images/avatar.jpg'
import { ChangeEvent } from 'react'

const Avatar: React.FC<propsType> = (props) => {
  const onSelectMainPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
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

//----------------------------------- types ---------------------------------

type propsType = {
  photo: string | null
  isOwner: boolean
  savePhoto: (photo: File) => void
}
