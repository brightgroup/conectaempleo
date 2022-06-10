export const getFields = (data, exceptions = ['password']) => {
  return Object.keys(data)?.filter(key => !exceptions.includes(key))
}
