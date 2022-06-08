import { simpleClient } from 'utils/axios'
import { urls } from 'api/ulrs'
import { formatError, login, runLogoutTimer, saveTokenInLocalStorage, signUp } from 'services/AuthService'
import { EMPLOYER } from 'constants/rol'

export const SET_USER = 'SET_USER'
export const SET_ERROR = 'SET_ERROR'
export const SIGNUP_CONFIRMED_ACTION = '[signup action] confirmed signup'
export const SIGNUP_FAILED_ACTION = '[signup action] failed signup'
export const LOGIN_CONFIRMED_ACTION = '[login action] confirmed login'
export const LOGIN_FAILED_ACTION = '[login action] failed login'
export const LOADING_TOGGLE_ACTION = '[Loading action] toggle loading'
export const LOGOUT_ACTION = '[Logout action] logout action'

export function signupAction(email, password, history) {
  return dispatch => {
    signUp(email, password)
      .then(response => {
        saveTokenInLocalStorage(response.data)
        runLogoutTimer(dispatch, response.data.expiresIn * 1000, history)
        dispatch(confirmedSignupAction(response.data))
        history.push('/home')
      })
      .catch(error => {
        const errorMessage = formatError(error.response.data)
        dispatch(signupFailedAction(errorMessage))
      })
  }
}

export function logout(history) {
  localStorage.removeItem('userDetails')
  history.push('/login')
  return {
    type: LOGOUT_ACTION,
  }
}

export function loginAction(email, password, history) {
  return dispatch => {
    login(email, password)
      .then(response => {
        saveTokenInLocalStorage(response.data)
        runLogoutTimer(dispatch, response.data.expiresIn * 1000, history)
        history.push('/home')
      })
      .catch(error => {
        const errorMessage = formatError(error.response.data)
        dispatch(loginFailedAction(errorMessage))
      })
  }
}

export function loginFailedAction(data) {
  return {
    type: LOGIN_FAILED_ACTION,
    payload: data,
  }
}

export function confirmedSignupAction(payload) {
  return {
    type: SIGNUP_CONFIRMED_ACTION,
    payload,
  }
}

export function signupFailedAction(message) {
  return {
    type: SIGNUP_FAILED_ACTION,
    payload: message,
  }
}

export function loadingToggleAction(status) {
  return {
    type: LOADING_TOGGLE_ACTION,
    payload: status,
  }
}

// new code

export const setUser = user => ({
  type: SET_USER,
  payload: user,
})

export const setError = error => ({
  type: SET_ERROR,
  pyaload: error,
})

export const logIn =
  ({ email, password, rol }) =>
  async dispatch => {
    try {
      const {
        auth: { candidateLogin, employerLogin, getCandidate, getEmployer },
      } = urls
      const isEmployer = rol === EMPLOYER
      const loginUrl = isEmployer ? employerLogin : candidateLogin
      const tokenUrl = isEmployer ? getEmployer : getCandidate

      const token = await simpleClient(loginUrl, { ...(isEmployer ? { email } : { user: email }), password }, 'POST')

      if (token) {
        localStorage.setItem('token', token)
        return dispatch(decryptToken({ token, rol }, tokenUrl))
      }
    } catch (error) {
      dispatch(setError(error))
    }
  }

export const decryptToken =
  ({ token, rol }, url) =>
  async dispatch => {
    try {
      const data = await simpleClient(url, { token }, 'POST')
      if (data) {
        const user = { ...data, rol }
        dispatch(setUser(user))
        return user
      }
    } catch (error) {
      dispatch(setError(error))
    }
  }

export const logOut = history => async dispatch => {
  try {
    localStorage.clear()
    dispatch(setUser({}))
    history.push('/login')
  } catch (error) {}
}

export const registerUser = (info, rol) => async dispatch => {
  try {
    const url = rol === 'candidate' ? urls.utils.registerCandidate : urls.utils.registerEmployer
    const { data } = await simpleClient(url, info, 'POST')
    return data ? true : false
  } catch (error) {
    dispatch(setError(error))
  }
}
