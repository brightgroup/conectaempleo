import { client } from 'utils/axios'
import { urls } from 'api/ulrs'
import { POST_JOB, SET_JOB_UTILS, SET_ERROR, SET_CITIES } from './UtilTypes'

const setpostJob = data => ({
  type: POST_JOB,
  payload: data,
})

const setJobUtils = data => ({
  type: SET_JOB_UTILS,
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
    const { getdepartment, getSkills, getCountries, getCurrencies, getGenders, getJobType, getJobShifts, ...restUrls } =
      urls.utils
    const { getJobExperiences, getDegreeLevel, getCareerLevels, getSalaryPeriods, getFunctionalArea } = restUrls

    await Promise.all([
      client(getdepartment),
      client(getSkills),
      client(getCountries),
      client(getCurrencies),
      client(getCareerLevels),
      client(getJobType),
      client(getJobShifts),
      client(getGenders),
      client(getJobExperiences),
      client(getDegreeLevel),
      client(getSalaryPeriods),
      client(getFunctionalArea),
    ]).then(res => dispatch(setJobUtils(res)))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const getCities = departmentId => async dispatch => {
  try {
    const { data } = await client(urls.utils.getCities(departmentId))
    dispatch(setCities(data))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const postJob = job => async dispatch => {
  try {
    const data = await client(urls.job.postJob, job, 'POST')
    dispatch(setpostJob(data))
    return data ? true : false
  } catch (error) {
    dispatch(setError(error))
  }
}
