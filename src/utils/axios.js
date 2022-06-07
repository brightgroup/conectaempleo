import axios from 'axios'
// import { toggleLoader } from './loader'
import { toggleLoader } from 'store/actions/UtilActions'
import { store } from 'store/store'

const baseUrl = process.env.REACT_APP_API_URL

export const simpleClient = async (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`
  store.dispatch(toggleLoader(true))

  if (method === 'GET') {
    const { data } = await axios(url)
    store.dispatch(toggleLoader())
    return data
  } else {
    try {
      const res = await axios(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(data),
      })
      store.dispatch(toggleLoader())
      return res?.data || res
    } catch (error) {
      store.dispatch(toggleLoader())
    }
  }
}

export const client = async (endpoint, data = {}, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`
  const token = localStorage['token'] || ''

  store.dispatch(toggleLoader(true))
  if (token) {
    if (method === 'GET') {
      try {
        const res = await axios(url, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        store.dispatch(toggleLoader())
        return res?.data || res
      } catch (error) {
        store.dispatch(toggleLoader())
      }
    } else {
      try {
        const res = await axios(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
          },
          data: JSON.stringify(data),
        })
        store.dispatch(toggleLoader())
        return res?.data || res
      } catch (error) {
        store.dispatch(toggleLoader())
      }
    }
  }
  return { error: 'Unauthorized' }
}

// export const client = async (endpoint, data = {}, method = 'GET') => {
//   const url = `${baseUrl}/${endpoint}`
//   const token = localStorage['token'] || ''
//   toggleLoader()
//   if (token) {
//     if (method === 'GET') {
//       console.log('el token', token)
//       const res = await axios(url, {
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       })
//       console.log('nada', res)
//       console.log('antes de')
//       toggleLoader('false')
//       return res?.data || res
//     } else {
//       const res = await axios(url, {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//           authorization: `Bearer ${token}`,
//         },
//         data: JSON.stringify(data),
//       })
//       toggleLoader('false')
//       return res?.data || res
//     }
//   }
//   toggleLoader('false')
//   return { error: 'Unauthorized' }
// }
