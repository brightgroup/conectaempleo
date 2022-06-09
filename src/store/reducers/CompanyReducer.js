import { SET_COMPANIES, SET_COMPANY } from 'store/actions/CompanyTypes'

const initialState = {
  companies: {},
  company: {
    id: 231,
    name: 'buu',
    email: 'angielalinde77@gmail.com',
    ceo: 'Marta',
    industry_id: 249,
    ownership_type_id: 2,
    description: '123456789',
    location: 'Calle 5 #2-03',
    no_of_offices: 3,
    website: 'http://',
    no_of_employees: '1-10',
    established_in: '2003',
    fax: 'null',
    phone: '3227748294',
    logo: 'buu-1654699535-186.PNG',
    country_id: 47,
    state_id: 782,
    city_id: 12874,
    slug: 'buu-231',
    is_active: 1,
    is_featured: 0,
    verified: 0,
    map: 'null',
    created_at: '2022-03-01T14:43:18.000000Z',
    updated_at: '2022-06-08T14:45:36.000000Z',
    facebook: 'ies cinoc',
    twitter: 'ies cinoc',
    linkedin: 'ies cinoc',
    google_plus: 'iescinoc',
    pinterest: 'iescinoc',
    package_id: 0,
    package_start_date: null,
    package_end_date: null,
    jobs_quota: 0,
    availed_jobs_quota: 0,
    is_subscribed: 1,
    tipo_identificacion: 'null',
    identificacion: 'null',
    camara_comercio: null,
    email_verified_at: null,
  },
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
