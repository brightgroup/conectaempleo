import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SidebarMenu } from 'components/sidebar-menu'
import { PageTitle } from 'components/page-title'
import { UserForm } from './components'
import { getProfileUtils } from 'store/actions/UtilActions'
import { Wrapper, Content } from '.'
import { getProfile } from 'store/actions/AuthActions'

const CompanyProfile = () => {
  const dispatch = useDispatch()
  const {
    utils: { profile: utils },
    auth: { profile },
  } = useSelector(state => state)

  const [data, setData] = useState({ marital_status: 1, national__status: 1 })
  const [validate, setValidate] = useState(false)

  useEffect(() => {
    dispatch(getProfileUtils())
    dispatch(getProfile())
  }, [dispatch])

  useEffect(() => setData(profile), [profile])

  const updateUser = e => {
    e.preventDefault()
    setValidate(true)
  }
  console.log('el profile', profile)
  // console.log('urils', utils?.countries)
  // console.log('urils', utils?.genders)

  return (
    <Wrapper className="d-flex justify-content-center px-4">
      <SidebarMenu />

      <Content className="section-content">
        <PageTitle title="Perfil" />
        <UserForm utils={utils} data={data} setData={setData} handleSubmit={updateUser} validate={validate} />
      </Content>
    </Wrapper>
  )
}

export default CompanyProfile
