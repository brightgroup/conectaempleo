import { urls } from 'api/ulrs'
import { client } from 'utils/axios'
import { GET_JOBS_OFFERS, SET_ERROR } from './JobOffersTypes'

const setGetJobs = data => ({
  type: GET_JOBS_OFFERS,
  payload: data,
})

const setError = error => ({
  type: SET_ERROR,
  payload: error,
})

export const getJobs = () => async dispatch => {
  try {
    const { data } = await client({ endpoint: urls.job.getJobs })
    dispatch(setGetJobs(data))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const deleteJobOffer = id => async dispatch => {
  try {
    const { status = false } = await client({ endpoint: urls.job.deleteJobOffer, data: id, method: 'DELETE' })
    dispatch(getJobs())
    return status
  } catch (error) {
    dispatch(setError(error))
  }
}

export const postJob = job => async dispatch => {
  try {
    const data = await client({endpoint:urls.job.postJob, data:job, method:'POST'})
    console.log(data)
    return data ? true : false
  } catch (error) {
    dispatch(setError(error))
  }
}

