export const getOptions = values => {
  const options = []
  values.forEach((name, id) => options.push({ name, id: id + 1 }))
  return options
}
