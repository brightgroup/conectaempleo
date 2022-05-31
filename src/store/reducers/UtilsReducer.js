import {
  SET_DEPARTMENTS,
  SET_ERROR,
  SET_SKILLS,
  SET_COUNTRIES,
  SET_CAREER_LEVELS,
  SET_JOB_SHIFTS,
  SET_GENDERS,
  SET_JOB_TYPE,
  SET_JOB_EXPERIENCES,
  SET_CURRENCIES,
  SET_DEGREE_LEVEL,
  SET_SALARY_PERIODS,
  POST_JOB,
  SET_JOB_UTILS,
} from '../actions/UtilTypes'

const initialState = {
  departments: [],
  skills: [],
  countries: [],
  currencies: [],
  jobType: [],
  jobShifts: [],
  genders: [],
  jobExperiences: [],
  degreeLevel: [],
  salaryPeriods: [],
  jobUtils: [],
  error: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEPARTMENTS:
      return {
        ...state,
        departments: action.payload,
      }
    case SET_SKILLS:
      return {
        ...state,
        skills: action.payload,
      }
    case SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      }
    case SET_CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
      }
    case SET_CAREER_LEVELS:
      return {
        ...state,
        current: action.payload,
      }
    case SET_JOB_TYPE:
      return {
        ...state,
        jobType: action.payload,
      }
    case SET_JOB_SHIFTS:
      return {
        ...state,
        jobShifts: action.payload,
      }
    case SET_GENDERS:
      return {
        ...state,
        genders: action.payload,
      }
    case SET_JOB_EXPERIENCES:
      return {
        ...state,
        jobExperiences: action.payload,
      }
    case SET_DEGREE_LEVEL:
      return {
        ...state,
        degreeLevel: action.payload,
      }
    case SET_SALARY_PERIODS:
      return {
        ...state,
        salaryPeriods: action.payload,
      }
    case POST_JOB:
      return {
        ...state,
        postJob: action.payload,
      }
    case SET_JOB_UTILS:
      const [{ data: departments }, { data: skills }] = action.payload
      return {
        ...state,
        jobUtils: {
          departments,
          skills: skills.data,
        },
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
