import { getUtilsData } from 'utils/job'
import { POST_JOB, SET_JOB_UTILS, SET_CITIES, SET_ERROR } from '../actions/UtilTypes'

const initialState = {
  jobUtils: {},
  cities: [],
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
    case SET_CITIES:
      return {
        ...state,
        cities: action.payload,
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
