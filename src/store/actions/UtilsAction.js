import axios from 'axios'
import { formatDepartments } from 'utils/options'
import { client } from 'utils/axios'
import { urls } from 'api/ulrs'
import {
  SET_DEPARTMENTS,
  SET_ERROR,
  SET_SKILLS,
  SET_COUNTRIES,
  SET_CURRENCIES,
  SET_CAREER_LEVELS,
  SET_JOB_TYPE,
  SET_JOB_SHIFTS,
  SET_GENDERS,
  SET_JOB_EXPERIENCES,
  SET_DEGREE_LEVEL,
  SET_SALARY_PERIODS,
} from './UtilTypes'

const setDepartments = data => ({
  type: SET_DEPARTMENTS,
  payload: data,
})

const setSkills = data => ({
  type: SET_SKILLS,
  payload: data,
})

const setCountries = data => ({
  type: SET_COUNTRIES,
  payload: data,
})

const setCurrencies = data => ({
  type: SET_CURRENCIES,
  payload: data,
})

const setCareerLevels = data => ({
  type: SET_CAREER_LEVELS,
  payload: data,
})

const setJobType = data => ({
  type: SET_JOB_TYPE,
  payload: data,
})

const setJobShifts = data => ({
  type: SET_JOB_SHIFTS,
  payload: data,
})

const setGenders = data => ({
  type: SET_GENDERS,
  payload: data,
})

const setJobExperiences = data => ({
  type: SET_JOB_EXPERIENCES,
  payload: data,
})

const setDegreeLevel = data => ({
  type: SET_DEGREE_LEVEL,
  payload: data,
})

const setSalaryPeriods = data => ({
  type: SET_SALARY_PERIODS,
  payload: data,
})

const setError = error => ({
  type: SET_ERROR,
  payload: error,
})

export const getDepartments = () => async dispatch => {
  try {
    const { data } = await axios(urls.getDepartments)
    dispatch(setDepartments(formatDepartments(data)))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const getSkills = () => async dispatch => {
  try {
    const { data } = await client(urls.utils.getSkills)
    dispatch(setSkills(data))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const getCountries = () => async dispatch => {
  try {
    const { data } = await client(urls.utils.getCountries)
    dispatch(setCountries(data))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const getCurrencies = () => async dispatch => {
  try {
    const { data } = await client(urls.utils.getCurrencies)
    dispatch(setCurrencies(data))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const getCareerLevels = () => async dispatch => {
  try {
    const { data } = await client(urls.utils.getCareerLevels)
    dispatch(setCareerLevels(data))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const getJobType = () => async dispatch => {
  try {
    const { data } = await client(urls.utils.getJobType)
    dispatch(setJobType(data))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const getJobShifts = () => async dispatch => {
  try {
    const { data } = await client(urls.utils.getJobShifts)
    dispatch(setJobShifts(data))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const getGenders = () => async dispatch => {
  try {
    const { data } = await client(urls.utils.getGenders)
    dispatch(setGenders(data))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const getJobExperiences = () => async dispatch => {
  try {
    const { data } = await client(urls.utils.getJobExperiences)
    dispatch(setJobExperiences(data))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const getDegreeLevel = () => async dispatch => {
  try {
    const { data } = await client(urls.utils.getDegreeLevel)
    dispatch(setDegreeLevel(data))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const getSalaryPeriods = () => async dispatch => {
  try {
    const { data } = await client(urls.utils.getSalaryPeriods)
    dispatch(setSalaryPeriods(data))
  } catch (error) {
    dispatch(setError(error))
  }
}
