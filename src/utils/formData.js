export const createFormData = (data, fields = []) => {
  const formData = new FormData()
  if (fields?.length) fields.forEach(field => formData.set(field, data[field] || ''))
  return formData
}
