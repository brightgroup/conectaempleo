import { lowerCase } from './text'

export const getFields = (data, exceptions = ['password']) => {
  return Object.keys(data)?.filter(key => !exceptions.includes(key))
}

export const filterData = ({ data, key, searchValue }) => {
  return data.filter(item => lowerCase(item[key]).includes(lowerCase(searchValue)))
}

export const sortArray = (data = [], { key, higher = false, subKey, isDate = false }) => {
  if (subKey) {
    return [...data]?.sort((a, b) =>
      higher ? Number(b[key][subKey]) - Number(a[key][subKey]) : Number(a[key][subKey]) - Number(b[key][subKey])
    )
  }
  if (isDate)
    return [...data]?.sort((a, b) =>
      higher ? new Date(b[key]) - new Date(a[key]) : new Date(a[key]) - new Date(b[key])
    )
  return [...data]?.sort((a, b) => (higher ? Number(b[key]) - Number(a[key]) : Number(a[key]) - Number(b[key])))
}
