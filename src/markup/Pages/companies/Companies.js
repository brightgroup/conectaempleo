import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCompanies } from 'store/actions/CompanyActions'
import { Input } from 'components/input'
import { Card } from './components/Card'
import { Wrapper } from '.'

const Companies = () => {
  const dispatch = useDispatch()
  const { companies } = useSelector(state => state.company)
  const [dataCompanies, setDataCompanies] = useState([])
  const [search, setSearch] = useState('')
  let searchCharacter = []

  const handleChangeDate = ({ target }) => {
    setSearch(target.value)
  }

  useEffect(() => {
    dispatch(getCompanies())
  }, [dispatch])

  useEffect(() => {
    setDataCompanies(companies.data)
  }, [companies])

  if (search.length >= 1) {
    searchCharacter = dataCompanies.filter(company => {
      const nameCompany = company.name.toLowerCase()
      const searchText = search.toLocaleLowerCase()
      return nameCompany.includes(searchText)
    })
  } else {
    searchCharacter = dataCompanies
  }

  return (
    <Wrapper>
      <div className="container__search">
        <Input placeholder="Buscar..." onChange={handleChangeDate} value={search} />
      </div>
      <div className="container__card">
        {searchCharacter?.map((company, index) => (
          <Card key={index} image={company.logo} name={company.name} location={company.location} />
        ))}
      </div>
    </Wrapper>
  )
}

export default Companies
