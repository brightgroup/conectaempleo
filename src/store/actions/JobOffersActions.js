import { urls } from 'api/ulrs'
import { client, simpleClient } from 'utils/axios'
import { SET_OFFER, SET_JOBS_OFFERS, SET_ERROR, SHOW_JOBS, SHOW_JOB, SET_FILTER } from './JobOffersTypes'

const setJobs = data => ({
  type: SET_JOBS_OFFERS,
  payload: data,
})

export const setOffer = data => ({
  type: SET_OFFER,
  payload: data,
})

const setShowJobs = data => ({
  type: SHOW_JOBS,
  payload: data,
})

const setShowJob = data => ({
  type: SHOW_JOB,
  payload: data,
})

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter,
})

const setError = error => ({
  type: SET_ERROR,
  payload: error,
})

export const getJobs = () => async dispatch => {
  try {
    const { data } = await client({ endpoint: urls.job.getJobs })
    dispatch(setJobs(data))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const getOffer = id => async dispatch => {
  try {
    const { data } = await client({ endpoint: urls.job.getOffer(id) })
    const skills = data?.job_skills[0]?.job_skill_id
    dispatch(setOffer({ ...data, skills }))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const updateOffer = (offer, id) => async dispatch => {
  try {
    const { status = false } = await client({ endpoint: `${urls.job.updateOffer}${id}`, data: offer, method: 'POST' })
    dispatch(getJobs())
    return status
  } catch (error) {
    dispatch(setError(error))
  }
}

export const deleteJobOffer = id => async dispatch => {
  try {
    const { status = false } = await client({ endpoint: urls.job.deleteJobOffer, data: { id }, method: 'DELETE' })
    dispatch(getJobs())
    return status
  } catch (error) {
    dispatch(setError(error))
  }
}

export const postJob = job => async dispatch => {
  try {
    const data = await client({ endpoint: urls.job.postJob, data: job, method: 'POST' })
    return data ? true : false
  } catch (error) {
    dispatch(setError(error))
  }
}

export const showJobs = () => async dispatch => {
  try {
    const { data } = await simpleClient(urls.job.showJobs)
    dispatch(setShowJobs(data.data))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const showjob = slug => async dispatch => {
  try {
    const { data } = await client({ endpoint: urls.job.showJob(slug) })
    dispatch(setShowJob(data.job))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const applyJob = (slug, data) => async dispatch => {
  try {
    const { status } = await client({ endpoint: urls.job.applyJob(slug), data, method: 'POST' })
    return status
  } catch (error) {
    dispatch(setError(error))
  }
}
