export const getMessageError = errors => {
  const { emptyFields, email } = errors
  if (emptyFields) return emptyFields === 1 ? '*Hay un campo con error' : '*Hay campos con error'
  return email ? '*Hay un  campo con error' : ''
}
