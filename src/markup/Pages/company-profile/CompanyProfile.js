import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { SidebarMenu } from 'components/sidebar-menu'
import { PageTitle } from 'components/page-title'
import { UserForm } from './components'
import { getCities, getProfileUtils } from 'store/actions/UtilActions'
import { getProfile, updateUser } from 'store/actions/UserActions'
import { hasEmptyFields } from 'utils/validation'
import { initialProfile } from 'store/reducers/UserReducer'
import { Wrapper, Content } from '.'
import { swal } from 'utils/swal'

const CompanyProfile = () => {
  const dispatch = useDispatch()
  const {
    utils: { profile: utils, cities },
    user: { profile },
  } = useSelector(state => state)

  const [data, setData] = useState({})
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

  const handleSubmit = async e => {
    e.preventDefault()
    setValidate(true)
    if (hasErrors()) return
    const isCorrectStatus = await dispatch(updateUser(data))
    if (isCorrectStatus) Swal.fire(swal())
  }

  const hasErrors = () => {
    if (hasEmptyFields(data, Object.keys(initialProfile))) return true
  }

  return (
    <Wrapper className="d-flex justify-content-center px-4">
      <SidebarMenu />
      <Content className="section-content">
        <PageTitle title="Perfil" />
        <UserForm utils={utils} data={data} setData={setData} handleSubmit={handleSubmit} {...{ cities, validate }} />
      </Content>
    </Wrapper>
  )
}

export default CompanyProfile
