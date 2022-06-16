const initialState = {
  auth: {
    email: '',
    idToken: '',
    localId: '',
    expiresIn: '',
    refreshToken: '',
  },
  errorMessage: '',
  successMessage: '',
  showLoading: false,
  isCandidate: false,
  user: {},
}

export function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isCandidate: action.payload?.isCandidate,
      }
    default:
      return state
  }
}
