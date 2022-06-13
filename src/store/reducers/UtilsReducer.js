import { getUtilsData } from 'utils/job'
import { getOfferData } from 'utils/offer'
import { getProfileData } from 'utils/profile'
import { SET_JOB_UTILS, SET_CITIES, SET_PROFILE_UTILS, SET_ERROR, SET_OFFER_UTILS } from '../actions/UtilTypes'

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
  offerUtils: {
    skills: [],
    countries: [],
    departments: [],
    functionalArea: [],
    currencies: [],
    jobExperiences: [],
    gradeLevels: [],
    salaryPeriods: [],
    jobTypes: [],
  },
  cities: [],
  showLoader: false,
  error: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    case SET_OFFER_UTILS:
      return {
        ...state,
        offerUtils: getOfferData(action.payload),
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
