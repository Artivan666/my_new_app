import { Field } from 'redux-form'
import s from './FormsControl.module.css'

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={s.formControl + ' ' + (hasError ? s.error : null)}>
      <textarea {...input} {...props} />
      {hasError ? <span>{meta.error}</span> : null}
    </div>
  )
}

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={s.formControl + ' ' + (hasError ? s.error : null)}>
      <input {...input} {...props} />
      {hasError ? <span>{meta.error}</span> : null}
    </div>
  )
}

export const createField = (
  component,
  name,
  validate = [],
  placeholder,
  type = null,
  text = '',
  props = {}
) => {
  return (
    <div>
      <Field
        component={component}
        name={name}
        validate={validate}
        placeholder={placeholder}
        type={type}
        {...props}
      />
      {text}
    </div>
  )
}
