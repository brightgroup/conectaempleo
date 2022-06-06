export const isEmpty = value => !String(value)

export const isValidEmail = email => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(email)
}

export const isLength = password => {
  if (password.length < 6) return true
  return false
}

export const isValidPassword = password => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
  return regex.test(password)
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
