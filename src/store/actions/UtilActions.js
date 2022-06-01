import { client } from 'utils/axios'
import { urls } from 'api/ulrs'
import { POST_JOB, SET_JOB_UTILS, SET_ERROR } from './UtilTypes'

const setpostJob = data => ({
  type: POST_JOB,
  payload: data,
})

const setJobUtils = data => ({
  type: SET_JOB_UTILS,
  payload: data,
})

const setError = error => ({
  type: SET_ERROR,
  payload: error,
})

export const getJobUtils = () => async dispatch => {
  try {
    const {
      getdepartment,
      getSkills,
      getCountries,
      getCurrencies,
      getGenders,
      getJobType,
      getJobShifts,
      getCities,
      getFunctionalArea,
      ...restUrls
    } = urls.utils
    const { getJobExperiences, getDegreeLevel, getCareerLevels, getSalaryPeriods } = restUrls
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
      client(getCities),
      client(getFunctionalArea),
    ]).then(res => dispatch(setJobUtils(res)))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const postJob = job => async dispatch => {
  try {
    const {
      utils: { postStoreJob },
    } = urls

    const data = await client(postStoreJob, job, 'POST')
    dispatch(setpostJob(data))
    if (data) {
      return true
    }
    return false
  } catch (error) {
    dispatch(setError(error))
  }
}
