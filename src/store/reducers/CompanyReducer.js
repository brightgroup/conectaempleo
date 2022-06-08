import { SET_COMPANIES } from 'store/actions/CompanyTypes'

const initialState = {
  companies: {},
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      }
    default:
      return state
  }
}
