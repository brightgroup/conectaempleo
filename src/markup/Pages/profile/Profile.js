import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { SidebarMenu } from 'components/sidebar-menu'
import { PageTitle } from 'components/page-title'
import { UserForm, CompanyForm } from './components'
import { getEmptyFields, isValidEmail } from 'utils/validation'
import { getFields } from 'utils/array'
import { swal } from 'utils/swal'
import { getMessageError } from 'utils/error'
import { getCities, getProfileUtils } from 'store/actions/UtilActions'
import { getProfile, updateUser } from 'store/actions/UserActions'
import { getCompany, updateCompany } from 'store/actions/CompanyActions'
import { initialProfile } from 'store/reducers/UserReducer'
import { initialCompany } from 'store/reducers/CompanyReducer'
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
  const [activatedSelect, setActivatedSelect] = useState('')
  const [errors, setErrors] = useState({})

  const [hasUtils, stateId, userId] = [utils?.genders?.length, data?.state_id, data?.id]
  const rol = user?.rol

  const isCandidate = useMemo(() => rol === CANDIDATE, [rol])

  const getData = useCallback(async () => {
    const action = isCandidate ? getProfile : getCompany
    await Promise.all([!hasUtils && dispatch(getProfileUtils()), dispatch(action())])
  }, [dispatch, hasUtils, isCandidate])

  useEffect(() => {
    if (userId && stateId) dispatch(getCities(stateId))
  }, [dispatch, stateId, userId])

  useEffect(() => {
    getData()
  }, [dispatch, hasUtils, getData])

  useEffect(() => setData(profile), [profile])

  useEffect(() => setData(company), [company])

  const handleChangeData = ({ target }) => setData({ ...data, [target.name]: target.value })

  const hasErrors = () => {
    const emptyFields = getEmptyFields(data, getFields(isCandidate ? initialProfile : initialCompany))
    const errors = {
      emptyFields: emptyFields,
      hasEmptyFields: !!emptyFields,
      email: isCandidate ? !isValidEmail(data?.email) : false,
    }
    setErrors(errors)
    return Object.values(errors).some(value => typeof value === 'boolean' && value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setValidate(true)
    if (hasErrors()) return
    const isCorrectStatus = await dispatch(isCandidate ? updateUser(data) : updateCompany(data))
    if (isCorrectStatus) Swal.fire(swal())
    setValidate(false)
    setActivatedSelect('')
  }
  const error = useMemo(() => getMessageError(errors), [errors])

  const input = { required: validate, onChange: handleChangeData }

  const select = { activatedSelect, setActivatedSelect, setData, required: validate }

  const formProps = { utils, data, setData, handleSubmit, input, select, cities, errors, error }

  return (
    <Wrapper className="d-flex justify-content-center px-4">
      <SidebarMenu />
      <Content className="section-content">
        <PageTitle title={isCandidate ? 'Información de la cuenta' : 'Perfil de la empresa'} />
        {isCandidate ? <UserForm {...formProps} /> : <CompanyForm {...formProps} />}
      </Content>
    </Wrapper>
  )
}

export default CompanyProfile
