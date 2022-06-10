import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCompanies } from 'store/actions/CompanyActions'
import { Input } from 'components/input'
import { Card } from './components/Card'
import { Wrapper } from '.'
import { filterData } from 'utils/array'

const Companies = () => {
  const dispatch = useDispatch()
  const { companies } = useSelector(state => state.company)
  const [dataCompanies, setDataCompanies] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const handleChangeValue = ({ target }) => setSearchValue(target.value)

  useEffect(() => {
    dispatch(getCompanies())
  }, [dispatch])

  useEffect(() => {
    setDataCompanies(companies.data)
  }, [companies])

  const filterCompanies = useCallback(() => {
    if (searchValue.length >= 1) {
      return setDataCompanies(filterData({ data: companies.data, key: 'name', searchValue }))
    }
    setDataCompanies(companies.data)
  }, [companies.data, searchValue])

  useEffect(() => {
    filterCompanies()
  }, [searchValue, filterCompanies])

  return (
    <Wrapper>
      <div className="container__search">
        <Input placeholder="Buscar..." onChange={handleChangeValue} value={searchValue} />
      </div>
      <div className="container__card">
        {dataCompanies?.map((company, index) => (
          <Card key={index} image={company.logo} name={company.name} location={company.location} />
        ))}
      </div>
    </Wrapper>
  )
}

export default Companies
