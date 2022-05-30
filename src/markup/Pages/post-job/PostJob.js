import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SidebarMenu } from 'components/sidebar-menu'
import { PageTitle } from 'components/page-title'
import { Input } from 'components/input'
import { getDepartments } from 'store/actions/UtilsAction'
import { SearchSelect } from 'components/select'
import { Wrapper, Content, FUNCTIONAL_AREA, SALARY_PERIOD, CONTRACT_TYPE, EXPERIENCE_WORK, COIN, initialState } from '.'

const PostJob2 = () => {
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

  useEffect(() => {
    dispatch(getDepartments())
  }, [dispatch])

  const getCities = () => {
    const currentDepartment = departments?.find(department => department.value === job.department)
    setCities(currentDepartment?.cities || [])
  }

  return (
    <Wrapper className="d-flex justify-content-center h-full px-4">
      <SidebarMenu />
      <Content className="section-content">
        <PageTitle />
        <div className="post-job__inputs-container d-flex mt-4">
          <Input
            label="Nombre del cargo"
            placeholder="Nombre"
            name="name"
            onChange={handleChangeData}
            value={job.name}
          />
          <Input
            label="Descripción"
            placeholder="Competencias"
            name="description"
            onChange={handleChangeData}
            value={job.description}
          />
        </div>
        <div className="post-job__inputs-container d-flex mt-4">
          <Input
            label="Habilidades requeridas"
            placeholder="skills"
            name="skills"
            onChange={handleChangeData}
            value={job.skills}
          />
          <Input
            label="Beneficios"
            placeholder="Bonificación"
            name="benefist"
            onChange={handleChangeData}
            value={job.benefist}
          />
        </div>
        <div className="post-job__inputs-container d-flex mt-4">
          <SearchSelect
            options={SALARY_PERIOD}
            message="seleccione Periodo salarial"
            label="Periodo salarial"
            setData={setJob}
            name="salaryPeriod"
          />
          <SearchSelect options={COIN} message="Seleccionar" label="Moneda" setData={setJob} name="coin" />
        </div>
        <div className="post-job__inputs-container d-flex mt-4">
          <Input
            label="Remuneración minima"
            placeholder="1`000.000"
            type="number"
            name="remunerationMin"
            onChange={handleChangeData}
            value={job.remunerationMin}
          />
          <Input
            label="Remuneración maxima"
            placeholder="5`000.000"
            type="number"
            name="remunerationMax"
            onChange={handleChangeData}
            value={job.remunerationMax}
          />
        </div>
        <div className="post-job__inputs-container d-flex mt-4">
          <SearchSelect
            options={FUNCTIONAL_AREA}
            message="Seleccione área funcional"
            label="Formación"
            setData={setJob}
            name="training"
          />
          <SearchSelect
            options={CONTRACT_TYPE}
            message="Seleccionar"
            label="Tipo de contrato"
            setData={setJob}
            name="typeContract"
          />
        </div>
        <div className="post-job__inputs-container d-flex mt-4">
          <Input
            label="Vacantes disponibles"
            placeholder="Número de vacantes"
            type="number"
            name="vacancies"
            onChange={handleChangeData}
            value={job.vacancies}
          />
          <SearchSelect
            options={EXPERIENCE_WORK}
            message="Seleccionar"
            label="Experiencia laboral"
            setData={setJob}
            name="experience"
          />
        </div>
      </Content>
    </Wrapper>
  )
}

export default PostJob2
