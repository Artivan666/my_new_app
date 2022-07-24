import Dialog from './Dialog/Dialog'
import s from './DialogsList.module.css'

const DialogsList = (props) => {
  return (
    <div className={s.dialogs_list}>
      <Dialog id="1" name="Dimuch" />
      <Dialog id="2" name="Andrew" />
      <Dialog id="3" name="Sveta" />
      <Dialog id="4" name="Sasha" />
    </div>
  )
}

export default DialogsList
