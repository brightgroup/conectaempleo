import { SET_OFFER, SET_JOBS_OFFERS, SET_ERROR, SHOW_JOBS, SHOW_JOB, SET_FILTER } from 'store/actions/JobOffersTypes'
import { defaultFilter } from 'markup/Pages/home'

const initialState = {
  jobOffers: {},
  currentOffer: {},
  showJobs: [],
  showJob: {},
  filter: defaultFilter,
  error: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS_OFFERS:
      return {
        ...state,
        jobOffers: action.payload,
      }
    case SET_OFFER:
      return {
        ...state,
        currentOffer: action.payload,
      }
    case SHOW_JOBS:
      return {
        ...state,
        showJobs: action.payload,
      }
    case SHOW_JOB:
      return {
        ...state,
        showJob: action.payload,
      }
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
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
