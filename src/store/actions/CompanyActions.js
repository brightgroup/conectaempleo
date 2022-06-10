import { client } from 'utils/axios'
import { urls } from 'api/ulrs'
import { SET_ERROR, SET_COMPANIES, SET_COMPANY } from './CompanyTypes'
import { createFormData } from 'utils/formData'
import { getRequestKeys } from 'utils/company'

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

export const updateCompany = company => async dispatch => {
  try {
    const data = createFormData(company, getRequestKeys(company))
    const request = { endpoint: urls.company.updateProfile, data, method: 'POST', contentType: 'multipart/form-data' }
    const { status } = await client(request)
    dispatch(getCompany())
    return status
  } catch (error) {
    dispatch(setError(error))
  }
}
