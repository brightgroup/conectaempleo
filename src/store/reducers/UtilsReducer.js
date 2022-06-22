import { getHomedata } from 'utils/home'
import { getUtilsData, setFilterJobUtils } from 'utils/job'
import { getOfferData } from 'utils/offer'
import { getProfileData } from 'utils/profile'
import {
  SET_JOB_UTILS,
  SET_CITIES,
  SET_PROFILE_UTILS,
  SET_ERROR,
  SET_OFFER_UTILS,
  SET_HOME_UTILS,
  SET_FILTERED_JOB_UTILS,
} from '../actions/UtilTypes'

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

  homeUtils: {
    skills: [],
    departments: [],
  },

  filteredJobUtils: {
    companies: [],
    skills: [],
    jobTypes: [],
    gradeLevels: [],
    jobExperiences: [],
    currencies: [],
    departments: [],
    careerLevels: [],
    functionalArea: [],
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
    case SET_HOME_UTILS:
      return {
        ...state,
        homeUtils: getHomedata(action.payload),
      }
    case SET_FILTERED_JOB_UTILS:
      return {
        ...state,
        filteredJobUtils: setFilterJobUtils(action.payload),
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
