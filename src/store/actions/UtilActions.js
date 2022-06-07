import { simpleClient } from 'utils/axios'
import { urls } from 'api/ulrs'
import { POST_JOB, SET_JOB_UTILS, SET_PROFILE_UTILS, SET_ERROR, SET_CITIES } from './UtilTypes'
export const TOGGLE_LOADER = 'TOGGLE_LOADER'

const setpostJob = data => ({
  type: POST_JOB,
  payload: data,
})

const setJobUtils = data => ({
  type: SET_JOB_UTILS,
  payload: data,
})

const setProfileUtils = data => ({
  type: SET_PROFILE_UTILS,
  payload: data,
})

const setCities = data => ({
  type: SET_CITIES,
  payload: data,
})

const setError = error => ({
  type: SET_ERROR,
  payload: error,
})

export const getJobUtils = () => async dispatch => {
  try {
    const { getdepartments, getSkills, getCountries, getCurrencies, getGenders, getFunctionalArea, ...restUrls } =
      urls.utils
    const { getJobExperiences, getDegreeLevel, getCareerLevels, getSalaryPeriods, getJobType, getJobShifts } = restUrls

    await Promise.all([
      simpleClient(getdepartments),
      simpleClient(getSkills),
      simpleClient(getCountries),
      simpleClient(getCurrencies),
      simpleClient(getCareerLevels),
      simpleClient(getJobType),
      simpleClient(getJobShifts),
      simpleClient(getGenders),
      simpleClient(getJobExperiences),
      simpleClient(getDegreeLevel),
      simpleClient(getSalaryPeriods),
      simpleClient(getFunctionalArea),
    ]).then(res => dispatch(setJobUtils(res)))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const getProfileUtils = () => async dispatch => {
  try {
    const { getGenders, getCountries, getdepartments, getCareerLevels, getFunctionalArea } = urls.utils

    await Promise.all([
      simpleClient(getGenders),
      simpleClient(getCountries),
      simpleClient(getdepartments),
      simpleClient(getCareerLevels),
      simpleClient(getFunctionalArea),
    ]).then(res => dispatch(setProfileUtils(res)))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const getCities = departmentId => async dispatch => {
  try {
    const { data } = await simpleClient(urls.utils.getCities(departmentId))
    dispatch(setCities(data))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const postJob = job => async dispatch => {
  try {
    const data = await simpleClient(urls.job.postJob, job, 'POST')
    dispatch(setpostJob(data))
    return data ? true : false
  } catch (error) {
    dispatch(setError(error))
  }
}

export const toggleLoader = (status = false) => ({
  type: TOGGLE_LOADER,
  payload: status,
})
