export const isEmpty = value => !String(value)

export const errorEmail = email => {
  // eslint-disable-next-line
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (regex.test(email)) return false
  return true
}

export const isLength = password => {
  if (password.length < 6) return true
  return false
}

export const errorPassword = password => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
  if (regex.test(password)) return false
  return true
}

export const hasEmptyFields = (data, keys) => {
  const errors = []
  if (keys) {
    keys.forEach(key => {
      if (!data[key]) errors.push(key)
    })
  }

  return !!errors.length
}
