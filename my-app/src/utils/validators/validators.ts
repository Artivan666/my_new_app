export type fieldValidatorType = (value: string) => string | undefined

export const requiredField: fieldValidatorType = (value) => {
  if (value) return undefined
  return 'Field is required'
}

export const maxLengthCreator =
  (maxLength: number): fieldValidatorType =>
  (value) => {
    if (value && value.length > maxLength)
      return `Max length is ${maxLength} symbols`
    return undefined
  }
