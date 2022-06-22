import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from 'components/modal'
import { getCities, getJobUtils } from 'store/actions/UtilActions'
import { getValue } from 'utils/array'
import ApplyModal from './ApplyModal'

export const JobModal = ({ show, onClose, data, jobUtilsCard }) => {
  const dispatch = useDispatch()
  const { jobUtils, cities } = useSelector(state => state.utils)
  const [showApply, setShowApply] = useState(false)

  const {
    title,
    state_id,
    city_id,
    company_id,
    description,
    benefits,
    job_type_id,
    degree_level_id,
    job_experience_id,
    job_skills = [{ job_skill_id: '' }],
    slug,
  } = data

  useEffect(() => {
    dispatch(getJobUtils())
    dispatch(getCities(state_id))
  }, [dispatch, state_id])

  const onCloseModal = () => {
    setShowApply(!showApply)
  }

  return (
    <Modal show={show} onClose={onClose}>
      <h3 className="modal__title">{title}</h3>
      <div className="d-flex mt-5">
        <p className="modal__key w-25 m-0 pl-5">ubicacion:</p>
        <p className="m-0">{`${getValue(state_id, jobUtils.departments)}-${getValue(city_id, cities)}`}</p>
      </div>
      <div className="mt-2 d-flex">
        <p className="modal__key w-25 m-0 pl-5">Empresa:</p>
        <p className="m-0">{getValue(company_id, jobUtilsCard?.companies)}</p>
      </div>
      <div className="mt-2 d-flex">
        <p className="modal__key w-25 pl-5 m-0">Descripción:</p>
        <p className="modal__value m-0 flex-1 text-start">{description}</p>
      </div>
      <div className="mt-2 d-flex">
        <p className="modal__key w-25 pl-5 m-0">Habilidades:</p>
        <p className="modal__value m-0 flex-1 text-start">{getValue(job_skills[0]?.job_skill_id, jobUtils?.skills)}</p>
      </div>
      <div className="mt-2 d-flex">
        <p className="modal__key w-25 pl-5 m-0">Beneficios:</p>
        <p className="modal__value m-0 flex-1 text-start">{benefits}</p>
      </div>
      <div className="mt-2 d-flex">
        <p className="modal__key w-25 pl-5 m-0">Contrato:</p>
        <p className="modal__value m-0 flex-1 text-start">{getValue(job_type_id, jobUtils.jobTypes)}</p>
      </div>
      <div className="mt-2 d-flex">
        <p className="modal__key w-25 pl-5 m-0">Titulación:</p>
        <p className="modal__value m-0 flex-1 text-start">{getValue(degree_level_id, jobUtils.gradeLevels)}</p>
      </div>
      <div className="mt-2 d-flex">
        <p className="modal__key w-25 pl-5 m-0">Experiencia:</p>
        <p className="modal__value m-0 flex-1 text-start">{getValue(job_experience_id, jobUtils.jobExperiences)}</p>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <button className="modal__button" onClick={() => onCloseModal()}>
          aplicar
        </button>
      </div>
      <ApplyModal show={showApply} onClose={onCloseModal} currency={jobUtils?.currencies} slug={slug} />
    </Modal>
  )
}
