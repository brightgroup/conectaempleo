import { getFields } from './array'
import { initialCompany } from 'store/reducers/CompanyReducer'

export const getRequestKeys = data => {
  const exceptions = []
  if (!data?.newImage) exceptions.push('logo')
  if (!data?.password) exceptions.push('password')
  return getFields(initialCompany, exceptions)
}
