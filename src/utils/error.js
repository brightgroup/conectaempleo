export const getMessageError = errors => {
  const { emptyFields, email, hasEmptyFields } = errors
  if (hasEmptyFields) return emptyFields === 1 ? '*Hay un campo con error' : '*Hay campos con error'
  return email ? '*Hay un  campo con error' : ''
}
