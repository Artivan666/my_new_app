import { Field } from 'redux-form'
import { fieldValidatorType } from '../../utils/validators/validators'
//@ts-ignore
import s from './FormsControl.module.css'

type formControlParamsType = {
  meta: {
    touched: boolean
    error: string
  }
  input: any // !!!!!!!!!!!!!!!!!!
}

type formControlType = (params: formControlParamsType) => void

// export const Textarea: formControlType = ({ input, meta, ...props }) => {
export const Textarea: formControlType = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={s.formControl + ' ' + (hasError ? s.error : null)}>
      <textarea {...input} {...props} />
      {hasError ? <span>{meta.error}</span> : null}
    </div>
  )
}

export const Input: formControlType = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={s.formControl + ' ' + (hasError ? s.error : null)}>
      <input {...input} {...props} />
      {hasError ? <span>{meta.error}</span> : null}
    </div>
  )
}

export function createField<formKeysType extends string>(
  component: formControlType,
  name: formKeysType,
  validate: Array<fieldValidatorType> = [],
  placeholder: string,
  type = '',
  text = '',
  props = {}
) {
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
