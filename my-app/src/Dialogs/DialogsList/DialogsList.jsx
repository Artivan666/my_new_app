import Dialog from './Dialog/Dialog'
import s from './DialogsList.module.css'

const DialogsList = (props) => {
  const dialogs = props.dialogs.map((d) => (
    <Dialog key={d.id} id={d.id} name={d.name} />
  ))

  return <div className={s.dialogs_list}>{dialogs}</div>
}

export default DialogsList
