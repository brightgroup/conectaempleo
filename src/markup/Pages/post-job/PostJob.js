import React, { useState } from 'react'

import { InputDate, InputLabel, InputTextarea } from 'components/input'

import { Check } from 'components/check'
import { isEmpty } from 'utils/validation'
import {
  FUNCTIONAL_AREA,
  SALARY_PERIOD,
  initialState,
  JOB_SKILL,
  COUNTRIES,
  DEPARTMENTS,
  CITIES,
  CURRENCIES,
  JOBTYPE,
  JOB_EXPERIENCES,
  Wrapper,
  Content,
} from '.'
import { SearchInput } from 'components/select'
import { SidebarMenu } from 'components/sidebar-menu'
import { PageTitle } from 'components/page-title'
import { postJob } from 'store/actions/UtilsAction'
import { useDispatch } from 'react-redux'

export const PostJob2 = () => {
  const dispatch = useDispatch()

  const [job, setJob] = useState(initialState)

  const handleChangeData = ({ target }) => setJob({ ...job, [target.name]: target.value })

  const handlesubmit = async e => {
    e.preventDefault()
    setJob(initialState)
    // await dispatch(postJob(job))
  }

  return (
    <Wrapper className="d-flex justify-content-center h-full px-4 ">
      <SidebarMenu />
      <Content className="section-content">
        <PageTitle />
        <form onSubmit={handlesubmit}>
          <InputLabel
            label="Nombre del cargo"
            placeholder="Nombre"
            name="title"
            onChange={handleChangeData}
            value={job.title}
            required={true}
            validation={isEmpty}
          />
          <InputTextarea
            name="description"
            label="Descripción"
            placeholder="Persona..."
            required={true}
            validation={isEmpty}
            value={job.description}
            onChange={handleChangeData}
          />
          <InputTextarea
            name="benefits"
            label="Beneficios"
            placeholder="Apoyo..."
            required={true}
            validation={isEmpty}
            value={job.benefits}
            onChange={handleChangeData}
          />
          <SearchInput
            options={JOB_SKILL}
            message="seleccione habilidad"
            label="Habilidades"
            setData={setJob}
            name="skills"
          />
          <div className="container--grid mt-2">
            <SearchInput options={COUNTRIES} message="Seleccione..." label="Pais" setData={setJob} name="country_id" />
            <SearchInput
              options={DEPARTMENTS}
              message="Seleccione..."
              label="Departamento"
              setData={setJob}
              name="state_id"
            />
          </div>
          <div className="container--grid">
            <SearchInput options={CITIES} message="Seleccione..." label="Ciudad" setData={setJob} name="city_id" />
            <SearchInput
              options={SALARY_PERIOD}
              message="Seleccione..."
              label="Periodo salarial"
              setData={setJob}
              name="salary_period_id"
            />
          </div>
          <div className="container--grid mt-2">
            <InputLabel
              label="Remuneración minima"
              placeholder="1`000.000"
              type="number"
              name="salary_from"
              onChange={handleChangeData}
              value={job.salary_from}
              required={true}
              validation={isEmpty}
            />
            <InputLabel
              label="Remuneración maxima"
              placeholder="5`000.000"
              type="number"
              name="salary_to"
              onChange={handleChangeData}
              value={job.salary_to}
              required={true}
              validation={isEmpty}
            />
          </div>
          <div className="container--grid mt-2">
            <SearchInput
              options={CURRENCIES}
              message="Seleccione..."
              label="Moneda"
              setData={setJob}
              name="salary_currency"
            />
            <Check
              label="Ocultar salario"
              name="hide_salary"
              handleChangeData={handleChangeData}
              value={job.hide_salary}
            />
          </div>
          <div className="container--grid mt-2">
            <SearchInput
              options={FUNCTIONAL_AREA}
              message="seleccione "
              label="Area funcional"
              setData={setJob}
              name="functional_area_id"
            />
            <SearchInput
              options={JOBTYPE}
              message="seleccione "
              label="Tipo de contrato"
              setData={setJob}
              name="job_type_id"
            />
          </div>
          <div className="container--grid mt-2">
            <InputLabel
              label="vananter disponibles"
              placeholder="number"
              type="number"
              name="num_of_positions"
              onChange={handleChangeData}
              value={job.num_of_positions}
              validation={isEmpty}
              required={true}
            />
            <InputDate
              message="seleccione area funcional"
              label="F. vencimiento oferta laboral"
              name="expiry_date"
              required={true}
              validation={isEmpty}
              value={job.expiry_date}
              onChange={handleChangeData}
            />
          </div>
          <div className="container--grid mt-2">
            <SearchInput
              options={FUNCTIONAL_AREA}
              message="Seleccionar"
              setData={setJob}
              name="degree_level_id"
              label="Nivel titulación requerida"
            />
            <SearchInput
              options={JOB_EXPERIENCES}
              message="Seleccionar"
              setData={setJob}
              name="job_experience_id"
              label="Experiencia laboral requerida"
            />
          </div>
          <Check label="Remoto" name="is_freelance" handleChangeData={handleChangeData} value={job.is_freelance} />
          <div className="d-flex justify-content-center">
            <button className="form__buton--style">Enviar</button>
          </div>
        </form>
      </Content>
    </Wrapper>
  )
}

export default PostJob2
