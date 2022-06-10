import { client } from 'utils/axios'
import { urls } from 'api/ulrs'
import { createFormData } from 'utils/formData'
import { getRequestKeys } from 'utils/user'

export const SET_PROFILE = 'SET_PROFILE'
export const SET_ERROR = 'SET_ERROR'

export const setProfile = profile => ({
  type: SET_PROFILE,
  payload: profile,
})

export const setError = error => ({
  type: SET_ERROR,
  pyaload: error,
})

export const updateUser = user => async dispatch => {
  try {
    const data = createFormData(user, getRequestKeys(user))
    const request = { endpoint: urls.user.updateUser, data, method: 'POST', contentType: 'multipart/form-data' }
    const { status = false } = await client(request)
    dispatch(getProfile())
    return status
  } catch (error) {
    dispatch(setError(error))
  }
}

export const getProfile = () => async dispatch => {
  try {
    const { data } = await client({ endpoint: urls.user.getProfile })
    dispatch(setProfile(data))
  } catch (error) {
    dispatch(setError(error))
  }
}
