import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputLabel } from 'components/input'
import { SearchInput } from 'components/select'
import { getDepartments } from 'store/actions/UtilsAction'
import { FUNCTIONAL_AREA, SALARY_PERIOD, CONTRACT_TYPE, WrapperPostJob, EXPERIENCE_WORK, COIN, initialState } from '.'

export const PostJob = () => {
  const dispatch = useDispatch()

  const {
    utils: { departments },
  } = useSelector(state => state)

  const [job, setJob] = useState(initialState)
  const [cities, setCities] = useState([])

  const handleChangeData = ({ target }) => setJob({ ...job, [target.name]: target.value })

  useEffect(() => {
    getCities()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [job.department])

  useEffect(() => dispatch(getDepartments()), [dispatch])

  const getCities = () => {
    const currentDepartment = departments?.find(department => department.value === job.department)
    setCities(currentDepartment?.cities || [])
  }

  return (
    <WrapperPostJob>
      <h3>Publica un trabajo</h3>
      <hr />
      <div className="container--grid">
        <InputLabel
          label="Nombre del cargo"
          placeholder="Nombre"
          name="name"
          onChange={handleChangeData}
          value={job.name}
        />
        <InputLabel
          label="Descripción"
          placeholder="Competencias"
          name="description"
          onChange={handleChangeData}
          value={job.description}
        />
      </div>
      <div className="container--grid">
        <InputLabel
          label="Habilidades requeridas"
          placeholder="skills"
          name="skills"
          onChange={handleChangeData}
          value={job.skills}
        />
        <InputLabel
          label="Beneficios"
          placeholder="Bonificación"
          name="benefist"
          onChange={handleChangeData}
          value={job.benefist}
        />
      </div>
      <div className="container--grid mt-2">
        <SearchInput
          options={SALARY_PERIOD}
          message="seleccione Periodo salarial"
          label="Periodo salarial"
          setData={setJob}
          name="salaryPeriod"
        />
        <SearchInput options={COIN} message="Seleccionar" label="Moneda" setData={setJob} name="coin" />
      </div>
      <div className="container--grid mt-2">
        <SearchInput
          options={departments}
          message="Seleccione..."
          label="Departamento"
          setData={setJob}
          name="department"
        />
        <SearchInput
          options={cities}
          message="Seleccione..."
          label="Ciudad"
          setData={setJob}
          name="city"
          disabled={job.department ? false : true}
        />
      </div>
      <div className="container--grid mt-2">
        <InputLabel
          label="Remuneración minima"
          placeholder="1`000.000"
          type="number"
          name="remunerationMin"
          onChange={handleChangeData}
          value={job.remunerationMin}
        />
        <InputLabel
          label="Remuneración maxima"
          placeholder="5`000.000"
          type="number"
          name="remunerationMax"
          onChange={handleChangeData}
          value={job.remunerationMax}
        />
      </div>
      <div className="container--grid mt-2">
        <SearchInput
          options={FUNCTIONAL_AREA}
          message="seleccione area funcional"
          label="Formacion"
          setData={setJob}
          name="training"
        />
        <SearchInput
          options={CONTRACT_TYPE}
          message="Seleccionar"
          label="Tipo de contrato"
          setData={setJob}
          name="typeContract"
        />
      </div>
      <div className="container--grid mt-2">
        <InputLabel
          label="vananter disponibles"
          placeholder="number"
          type="number"
          name="vacancies"
          onChange={handleChangeData}
          value={job.vacancies}
        />
        <SearchInput
          options={EXPERIENCE_WORK}
          message="Seleccionar"
          label="Experiencia laboral"
          setData={setJob}
          name="experience"
        />
      </div>
    </WrapperPostJob>
  )
}
