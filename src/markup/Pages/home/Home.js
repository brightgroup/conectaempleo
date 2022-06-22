import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCities, getHomeUtils } from 'store/actions/UtilActions'
import { Banner } from './components'
import { defaultFilter, WrapperHome } from '.'

const Home = () => {
  const dispatch = useDispatch()
  const { homeUtils, cities } = useSelector(state => state.utils)

  const [filter, setfilter] = useState(defaultFilter)

  const handleChangeData = ({ target }) => setfilter({ ...filter, [target.name]: target.value })

  useEffect(() => {
    dispatch(getHomeUtils())
  }, [dispatch])

  useEffect(() => {
    dispatch(getCities(filter?.department))
  }, [filter.department, dispatch])

  return (
    <WrapperHome className="home">
      <Banner handleChangeData={handleChangeData} homeUtils={homeUtils} cities={cities} filter={filter} />
    </WrapperHome>
  )
}
export default Home
