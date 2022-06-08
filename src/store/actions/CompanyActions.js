import { client } from 'utils/axios'
import { urls } from 'api/ulrs'
import { SET_ERROR, SET_COMPANIES } from './CompanyTypes'

const setCompanies = data => ({
  type: SET_COMPANIES,
  payload: data,
})

const setError = error => ({
  type: SET_ERROR,
  payload: error,
})

export const getCompanies = () => async dispatch => {
  try {
    const { data } = await client(urls.company.getCompanies)
    dispatch(setCompanies(data?.companies))
  } catch (error) {
    dispatch(setError(error))
  }
}
