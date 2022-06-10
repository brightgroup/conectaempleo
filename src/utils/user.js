import { initialProfile } from 'store/reducers/UserReducer'
import { getFields } from './array'

export const getRequestKeys = data => {
  const exceptions = []
  if (!data?.newImage) exceptions.push('image')
  if (!data?.password) exceptions.push('password')
  return getFields(initialProfile, exceptions)
}
