import React, { useState, useEffect, useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { Input, InputDate, TextArea } from 'components/input'
import { SelectSearch } from 'components/select'
import { SidebarMenu } from 'components/sidebar-menu'
import { PageTitle } from 'components/page-title'
import { Check } from 'components/check'
import { getCities, getJobUtils, postJob } from 'store/actions/UtilActions'
import { isEmpty } from 'utils/validation'
import { swal } from 'utils/swal'
import { initialState, Wrapper, Content } from '.'

const PostJob = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const {
    utils: { jobUtils, cities },
    auth: { user },
  } = useSelector(state => state)

  console.log(user)

  const [job, setJob] = useState(initialState)
  const [validate, setValidate] = useState(false)
  const [activatedSelect, setActivatedSelect] = useState('')
  const isColombia = useMemo(() => job.country_id && job.country_id === 47, [job.country_id])
  const rol = user?.rol

  useEffect(() => {
    dispatch(getJobUtils())
  }, [dispatch])

  useEffect(() => {
    if (job.state_id) dispatch(getCities(job.state_id))
  }, [dispatch, job.state_id])

  useEffect(() => {
    if (rol !== 'employer') history.push('/')
  }, [rol, history])

  const handleChangeData = ({ target }) => setJob({ ...job, [target.name]: target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setValidate(true)

    if (hasEmptyFields()) return
    const data = await dispatch(postJob({ ...job, skills: [job.skills], company_id: user.id }))
    if (data) {
      setJob(initialState)
      Swal.fire(swal('vacante publicada'))
    }
    setValidate(false)
  }

  const hasEmptyFields = () => {
    const fields = Object.keys(initialState)
    return fields?.some(field => isEmpty(job[field]))
  }

  const inputProps = { required: validate, wrapperClassName: 'mt-3' }

  const selectProps = { activatedSelect, setActivatedSelect }

  return (
    <Wrapper className="d-flex justify-content-center h-full px-4">
      <SidebarMenu />
      <Content className="section-content">
        <PageTitle />
        <form onSubmit={handleSubmit}>
          <Input
            label="Nombre del cargo"
            placeholder="Nombre"
            name="title"
            onChange={handleChangeData}
            value={job.title}
            {...inputProps}
          />
          <TextArea
            name="description"
            label="Descripción"
            placeholder="Persona..."
            value={job.description}
            onChange={handleChangeData}
            {...inputProps}
          />
          <TextArea
            name="benefits"
            label="Beneficios"
            placeholder="Apoyo..."
            value={job.benefits}
            onChange={handleChangeData}
            {...inputProps}
          />
          <SelectSearch
            options={jobUtils?.skills}
            label="Habilidades"
            setData={setJob}
            name="skills"
            {...selectProps}
            {...inputProps}
          />
          <div className="container--grid mt-2">
            <SelectSearch
              options={jobUtils?.countries}
              message="Seleccione..."
              label="Pais"
              setData={setJob}
              name="country_id"
              {...selectProps}
              {...inputProps}
            />
            <SelectSearch
              options={jobUtils?.departments}
              message="Seleccione..."
              label="Departamento"
              setData={setJob}
              name="state_id"
              disabled={!isColombia}
              {...selectProps}
              {...inputProps}
            />
          </div>
          <div className="container--grid">
            <SelectSearch
              options={cities}
              message="Seleccione..."
              label="Ciudad"
              setData={setJob}
              name="city_id"
              disabled={!job.state_id}
              {...selectProps}
              {...inputProps}
            />
            <SelectSearch
              options={jobUtils?.salaryPeriods}
              message="Seleccione..."
              label="Periodo salarial"
              setData={setJob}
              name="salary_period_id"
              {...selectProps}
              {...inputProps}
            />
          </div>
          <div className="container--grid mt-2">
            <Input
              label="Remuneración mínima"
              placeholder="1`000.000"
              type="number"
              name="salary_from"
              onChange={handleChangeData}
              value={job.salary_from}
              {...inputProps}
            />
            <Input
              label="Remuneración maxima"
              placeholder="5`000.000"
              type="number"
              name="salary_to"
              onChange={handleChangeData}
              value={job.salary_to}
              {...inputProps}
            />
          </div>
          <div className="container--grid mt-2">
            <SelectSearch
              options={jobUtils?.currencies}
              label="Moneda"
              setData={setJob}
              name="salary_currency"
              {...selectProps}
              {...inputProps}
            />
            <Check
              label="Ocultar salario"
              name="hide_salary"
              handleChangeData={handleChangeData}
              value={job.hide_salary}
            />
          </div>
          <div className="container--grid mt-2">
            <SelectSearch
              options={jobUtils?.functionalArea}
              label="Área funcional"
              setData={setJob}
              name="functional_area_id"
              {...selectProps}
              {...inputProps}
            />
            <SelectSearch
              options={jobUtils?.jobTypes}
              label="Tipo de contrato"
              setData={setJob}
              name="job_type_id"
              {...selectProps}
              {...inputProps}
            />
          </div>
          <div className="container--grid mt-2">
            <Input
              label="Vacantes"
              placeholder="Numero de vacantes"
              type="number"
              name="num_of_positions"
              onChange={handleChangeData}
              value={job.num_of_positions}
              {...inputProps}
            />
            <InputDate
              message="seleccione area funcional"
              label="F. vencimiento oferta laboral"
              name="expiry_date"
              value={job.expiry_date}
              onChange={handleChangeData}
              {...inputProps}
            />
          </div>
          <div className="container--grid mt-2">
            <SelectSearch
              options={jobUtils?.gradeLevels}
              setData={setJob}
              name="degree_level_id"
              label="Nivel titulación requerida"
              {...selectProps}
              {...inputProps}
            />
            <SelectSearch
              options={jobUtils?.jobExperiences}
              setData={setJob}
              name="job_experience_id"
              label="Experiencia laboral requerida"
              {...selectProps}
              {...inputProps}
            />
          </div>
          <Check
            label="Remoto"
            name="is_freelance"
            handleChangeData={handleChangeData}
            value={job.is_freelance}
            wrapperClass="mt-3"
          />
          <div className="d-flex justify-content-center">
            <button className="form__buton--style">Enviar</button>
          </div>
        </form>
      </Content>
    </Wrapper>
  )
}

export default PostJob
