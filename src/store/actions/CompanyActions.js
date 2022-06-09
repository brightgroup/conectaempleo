import { client } from 'utils/axios'
import { urls } from 'api/ulrs'
import { SET_ERROR, SET_COMPANIES, SET_COMPANY } from './CompanyTypes'

const setCompanies = data => ({
  type: SET_COMPANIES,
  payload: data,
})

const setCompany = data => ({
  type: SET_COMPANY,
  payload: data,
})

const setError = error => ({
  type: SET_ERROR,
  payload: error,
})

export const getCompanies = () => async dispatch => {
  try {
    const { data } = await client({ endpoint: urls.company.getCompanies })
    console.log(data)
    dispatch(setCompanies(data?.companies))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const getCompany = () => async dispatch => {
  try {
    const { data } = await client({ endpoint: urls.company.getCompany })
    dispatch(setCompany(data))
  } catch (error) {
    dispatch(setError(error))
  }
}
