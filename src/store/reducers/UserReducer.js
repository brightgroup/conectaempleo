export const initialProfile = {
  career_level_id: '',
  city_id: '',
  civil_status_id: '',
  country_id: '',
  current_salary: '',
  date_of_birth: '',
  email: '',
  expected_salary: '',
  first_lastname: '',
  first_name: '',
  functional_area_id: '',
  gender_id: '',
  id: '',
  image: '',
  marital_status_id: '',
  middle_name: '',
  mobile_num: '',
  name: '',
  nationality_id: '',
  phone: '',
  rol: '',
  second_lastname: '',
  state_id: '',
  street_address: '',
  industry_id: '',
  national_id_card_number: '',
  password: '',
}

const initialState = {
  profile: initialProfile,
  error: '',
}

export function UserReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_PROFILE':
      return {
        ...state,
        profile: action.payload,
      }

    default:
      return state
  }
}
