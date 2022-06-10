export const initialProfile = {
  career_level_id: 32,
  city_id: '12874',
  civil_status_id: 22,
  country_id: '47',
  current_salary: '1.500.000',
  date_of_birth: '2003-03-19',
  email: 'angielalinde77@gmail.com',
  expected_salary: '4.000.000',
  first_lastname: 'Monsalve',
  first_name: 'Anlly',
  functional_area_id: 10024,
  gender_id: 1,
  id: '',
  image: 'anlly-carolina-monsalve-lalinde-1654294263-101.PNG',
  marital_status_id: 23,
  middle_name: 'Carolina',
  mobile_num: '3227748294',
  name: 'Anlly Carolina Monsalve Lalinde',
  nationality_id: 47,
  phone: '3227748294',
  rol: 'Estudiante',
  second_lastname: 'Lalinde',
  state_id: '782',
  street_address: 'Calle 5#2-03',
  industry_id: 248,
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
