import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { SidebarMenu } from 'components/sidebar-menu'
import { PageTitle } from 'components/page-title'
import { UserForm, CompanyForm } from './components'
import { getCities, getProfileUtils } from 'store/actions/UtilActions'
import { getProfile, updateUser } from 'store/actions/UserActions'
import { hasEmptyFields } from 'utils/validation'
import { swal } from 'utils/swal'
import { initialProfile } from 'store/reducers/UserReducer'
import { getCompany } from 'store/actions/CompanyActions'
import { CANDIDATE } from 'constants/rol'
import { Wrapper, Content } from '.'

const CompanyProfile = () => {
  const dispatch = useDispatch()
  const {
    utils: { profile: utils, cities },
    user: { profile },
    auth: { user },
    company: { company },
  } = useSelector(state => state)

  const [data, setData] = useState({})
  const [validate, setValidate] = useState(false)
  const [hasUtils, stateId] = [utils?.genders?.length, data?.state_id]
  const rol = user?.rol
  const isCandidate = useMemo(() => rol === CANDIDATE, [rol])

  const getData = useCallback(async () => {
    const action = isCandidate ? getProfile : getCompany
    await Promise.all([!hasUtils && dispatch(getProfileUtils()), dispatch(action())])
  }, [dispatch, hasUtils, isCandidate])

  useEffect(() => {
    if (stateId) dispatch(getCities(stateId))
  }, [dispatch, stateId])

  useEffect(() => {
    getData()
  }, [dispatch, hasUtils, getData])

  useEffect(() => setData(profile), [profile])

  useEffect(() => setData(company), [company])

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
        <PageTitle title={isCandidate ? 'Información de la cuenta' : 'Perfil de la empresa'} />
        {isCandidate ? (
          <UserForm utils={utils} data={data} setData={setData} handleSubmit={handleSubmit} {...{ cities, validate }} />
        ) : (
          <CompanyForm data={data} setData={setData} />
        )}
      </Content>
    </Wrapper>
  )
}

export default CompanyProfile
