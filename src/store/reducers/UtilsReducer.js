import { getUtilsData } from 'utils/job'
import { getProfileData } from 'utils/profile'
import { POST_JOB, SET_JOB_UTILS, SET_CITIES, SET_PROFILE_UTILS, SET_ERROR } from '../actions/UtilTypes'

const initialState = {
  jobUtils: {
    skills: [],
    departments: [],
    salaryPeriods: [],
    countries: [],
    currencies: [],
    functionalArea: [],
    jobTypes: [],
    gradeLevels: [],
    jobExperiences: [],
  },
  profile: {
    genders: [],
    countries: [],
    departments: [],
    careerLevels: [],
    functionalArea: [],
    industries: [],
    entities: [],
    populationGroup: [],
    civilStatus: [],
  },
  cities: [],
  showLoader: false,
  error: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_JOB:
      return {
        ...state,
        postJob: action.payload,
      }
    case SET_JOB_UTILS:
      return {
        ...state,
        jobUtils: getUtilsData(action.payload),
      }
    case SET_PROFILE_UTILS:
      return {
        ...state,
        profile: getProfileData(action.payload),
      }
    case SET_CITIES:
      return {
        ...state,
        cities: action.payload,
      }
    case 'TOGGLE_LOADER':
      return {
        ...state,
        showLoader: action.payload,
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
