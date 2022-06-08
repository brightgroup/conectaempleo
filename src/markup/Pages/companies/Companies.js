import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCompanies } from 'store/actions/CompanyActions'
import { Input } from 'components/input'
import { Card } from './components/Card'
import { Wrapper } from '.'

const Companies = () => {
  const dispatch = useDispatch()
  const { companies } = useSelector(state => state.company)

  useEffect(() => {
    dispatch(getCompanies())
  }, [dispatch])

  return (
    <Wrapper>
      <div className="container__search">
        <Input placeholder="Buscar..." />
      </div>
      <div className="container__card">
        {companies?.data?.map((company, index) => (
          <Card key={index} image={company.logo} name={company.name} location={company.location} />
        ))}
      </div>
    </Wrapper>
  )
}

export default Companies
