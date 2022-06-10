import { SET_COMPANIES, SET_COMPANY } from 'store/actions/CompanyTypes'

export const initialCompany = {
  id: '',
  name: '',
  email: '',
  ceo: '',
  industry_id: '',
  ownership_type_id: '',
  description: '123456789',
  location: 'Calle 5 #2-03',
  website: 'http://',
  no_of_employees: '1-10',
  established_in: '2003',
  phone: '3227748294',
  logo: 'buu-1654699535-186.PNG',
  country_id: '',
  state_id: '',
  city_id: '',
  facebook: '',
  twitter: '',
  linkedin: '',
  tipo_identificacion: '',
  identificacion: '',
  camara_comercio: '',
  instagram: '',
}

const initialState = {
  companies: {},
  company: initialCompany,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      }
    case SET_COMPANY:
      return {
        ...state,
        company: action.payload,
      }
    default:
      return state
  }
}
