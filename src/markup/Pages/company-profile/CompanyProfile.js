import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SidebarMenu } from 'components/sidebar-menu'
import { PageTitle } from 'components/page-title'
import { UserForm } from './components'
import { getCities, getProfileUtils } from 'store/actions/UtilActions'
import { getProfile } from 'store/actions/AuthActions'
import { hasEmptyFields } from 'utils/validation'
import { Wrapper, Content } from '.'

const CompanyProfile = () => {
  const dispatch = useDispatch()
  const {
    utils: { profile: utils, cities },
    auth: { profile },
  } = useSelector(state => state)

  const [data, setData] = useState({ marital_status: 1, national__status: 1 })
  const [validate, setValidate] = useState(false)
  const [hasUtils, stateId] = [utils?.genders?.length, data?.state_id]

  const getData = useCallback(async () => {
    await Promise.all([!hasUtils && dispatch(getProfileUtils()), dispatch(getProfile())])
  }, [dispatch, hasUtils])

  useEffect(() => {
    if (stateId) dispatch(getCities(stateId))
  }, [dispatch, stateId])

  useEffect(() => {
    getData()
  }, [dispatch, hasUtils, getData])

  useEffect(() => setData(profile), [profile])

  const updateUser = e => {
    e.preventDefault()
    setValidate(true)
    if (hasErrors()) return
    alert('NO HAY ERRORES (AUN NO ESTA LA EDICIÓN xd)')
  }

  const hasErrors = () => {
    if (hasEmptyFields(data, ['city_id'])) return true
  }

  return (
    <Wrapper className="d-flex justify-content-center px-4">
      <SidebarMenu />
      <Content className="section-content">
        <PageTitle title="Perfil" />
        <UserForm utils={utils} data={data} setData={setData} handleSubmit={updateUser} {...{ cities, validate }} />
      </Content>
    </Wrapper>
  )
}

export default CompanyProfile
