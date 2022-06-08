import { client } from 'utils/axios'
import { urls } from 'api/ulrs'
import { createFormData } from 'utils/formData'
import { initialProfile } from 'store/reducers/UserReducer'

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
    let keys = Object.keys(initialProfile)
    if (!user?.newImage) keys = keys.filter(key => key !== 'image')
    const data = createFormData(user, keys)
    const request = { endpoint: urls.user.updateUser, data, method: 'POST', contentType: 'multipart/form-data' }
    const { status = false } = await client(request)
    dispatch(getProfile())
    return status
  } catch (error) {
    console.log('error', error)
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
