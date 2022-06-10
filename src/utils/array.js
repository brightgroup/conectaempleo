import { lowerCase } from './text'

export const getFields = (data, exceptions = ['password']) => {
  return Object.keys(data)?.filter(key => !exceptions.includes(key))
}

export const filterData = ({ data, key, searchValue }) => {
  return data.filter(item => lowerCase(item[key]).includes(lowerCase(searchValue)))
}
