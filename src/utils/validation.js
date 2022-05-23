export const isEmpty = value => {
    if(!value) return true
    return false
}

export const isEmail = email => {
    // eslint-disable-next-line
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

export const isLength = password => {
    if(password.length < 6) return true
    return false
}