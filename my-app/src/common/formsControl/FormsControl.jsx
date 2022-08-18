import s from './FormsControl.module.css'

const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={s.formControl + ' ' + (hasError ? s.error : null)}>
      <textarea {...input} {...props} />
      {hasError ? <span>{meta.error}</span> : null}
    </div>
  )
}

export default Textarea

// сделать контрол для Input
