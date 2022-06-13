import { SET_OFFER, SET_JOBS_OFFERS, SET_ERROR } from 'store/actions/JobOffersTypes'

const initialState = {
  jobsOffers: [],
  currentOffer: {},
  error: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS_OFFERS:
      return {
        ...state,
        jobsOffers: action.payload,
      }
    case SET_OFFER:
      return {
        ...state,
        currentOffer: action.payload,
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
