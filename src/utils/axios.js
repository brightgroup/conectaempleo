import axios from 'axios'
import { logOut } from 'store/actions/AuthActions'
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
      return false
    }
  }
}

export const client = async ({ endpoint, data = {}, method = 'GET', contentType = 'application/json' }) => {
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
        if ([401].includes(error.response.status)) store.dispatch(logOut())
      }
    } else {
      try {
        const res = await axios(url, {
          method,
          headers: {
            'Content-Type': contentType,
            authorization: `Bearer ${token}`,
          },
          data: contentType === 'application/json' ? JSON.stringify(data) : data,
        })
        store.dispatch(toggleLoader())
        return res?.data || res
      } catch (error) {
        store.dispatch(toggleLoader())
        return error
      }
    }
  }
}
