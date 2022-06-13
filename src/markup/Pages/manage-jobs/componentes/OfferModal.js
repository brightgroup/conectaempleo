import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Check } from 'components/check'
import { Input, InputDate, TextArea } from 'components/input'
import { Modal } from 'components/modal/Modal'
import { SelectSearch } from 'components/select'
import { getCities, getOfferUtils } from 'store/actions/UtilActions'

export const OfferModal = ({
  currentOffer = {},
  show = '',
  onClose = '',
  setCurrentOffer = () => {},
  handleSubmit = () => {},
  validate = '',
}) => {
  const dispatch = useDispatch()
  const { cities, offerUtils } = useSelector(state => state.utils)

  const [activatedSelect, setActivatedSelect] = useState('')

  const stateId = currentOffer?.state_id

  useEffect(() => {
    dispatch(getOfferUtils())
  }, [dispatch])

  useEffect(() => {
    dispatch(getCities(stateId))
  }, [dispatch, stateId])

  const handleChangeData = ({ target }) => setCurrentOffer({ ...currentOffer, [target.name]: target.value })

  const selectProps = { activatedSelect, setActivatedSelect }

  const inputProps = { required: validate, wrapperClassName: 'mt-3' }

  const date = currentOffer?.expiry_date?.slice(0, 10)

  console.log("current ofert",currentOffer?.city_id)
  console.log("data cuidades",cities )

  return (
    <Modal show={show} onClose={onClose}>
      <h2 className="mb-2 offer-form__title">Actualizar oferta Laboral</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nombre del cargo"
          name="title"
          onChange={handleChangeData}
          value={currentOffer?.title}
          required={validate}
        />
        <TextArea
          name="description"
          label="Descripción"
          value={currentOffer?.description}
          onChange={handleChangeData}
          {...inputProps}
        />
        <TextArea
          name="benefits"
          label="Beneficios"
          value={currentOffer?.benefits}
          onChange={handleChangeData}
          {...inputProps}
        />
        <SelectSearch
          label="Habilidades"
          setData={setCurrentOffer}
          name="skills"
          options={offerUtils?.skills}
          initialValue={currentOffer?.skills}
          {...selectProps}
          {...inputProps}
        />
        <div className="offer-form__group">
          <SelectSearch
            label="Pais"
            name="country_id"
            options={offerUtils?.countries}
            initialValue={currentOffer?.country_id}
            {...selectProps}
            {...inputProps}
          />
          <SelectSearch
            label="Departamento"
            name="state_id"
            options={offerUtils?.departments}
            initialValue={currentOffer?.state_id}
            setData={setCurrentOffer}
            {...selectProps}
            {...inputProps}
          />
        </div>
        <div className="offer-form__group">
          <SelectSearch
            label="Ciudad"
            name="city_id"
            options={cities}
            initialValue={currentOffer?.city_id}
            setData={setCurrentOffer}
            disabled={!currentOffer.state_id}
            {...selectProps}
            {...inputProps}
          />
          <SelectSearch
            label="Periodo salarial"
            name="salary_period_id"
            setData={setCurrentOffer}
            options={offerUtils?.salaryPeriods}
            initialValue={currentOffer?.salary_period_id}
            {...selectProps}
            {...inputProps}
          />
        </div>
        <div className="offer-form__group">
          <Input
            label="Remuneración mínima"
            type="number"
            name="salary_from"
            onChange={handleChangeData}
            value={currentOffer?.salary_from}
            {...inputProps}
          />
          <Input
            label="Remuneración maxima"
            type="number"
            name="salary_to"
            onChange={handleChangeData}
            value={currentOffer?.salary_to}
            {...inputProps}
          />
        </div>
        <div className="offer-form__group">
          <SelectSearch
            label="Moneda"
            name="salary_currency"
            setData={setCurrentOffer}
            options={offerUtils?.currencies}
            initialValue={currentOffer?.salary_currency}
            {...selectProps}
            {...inputProps}
          />
          <Check label="Ocultar salario" name="hide_salary" handleChangeData={handleChangeData} />
        </div>
        <div className="offer-form__group">
          <SelectSearch
            label="Área funcional"
            name="functional_area_id"
            options={offerUtils?.functionalArea}
            initialValue={currentOffer?.functional_area_id}
            setData={setCurrentOffer}
            {...selectProps}
            {...inputProps}
          />
          <SelectSearch
            label="Tipo de contrato"
            name="job_type_id"
            options={offerUtils?.jobTypes}
            initialValue={currentOffer?.job_type_id}
            setData={setCurrentOffer}
            {...selectProps}
            {...inputProps}
          />
        </div>
        <div className="offer-form__group">
          <Input
            label="Vacantes"
            type="number"
            name="num_of_positions"
            onChange={handleChangeData}
            value={currentOffer?.num_of_positions}
            {...inputProps}
          />
          <InputDate
            label="F. vencimiento oferta laboral"
            name="expiry_date"
            value={date}
            onChange={handleChangeData}
            {...inputProps}
          />
        </div>
        <div className="offer-form__group">
          <SelectSearch
            name="degree_level_id"
            label="Nivel titulación requerida"
            options={offerUtils?.gradeLevels}
            initialValue={currentOffer?.degree_level_id}
            setData={setCurrentOffer}
            {...selectProps}
            {...inputProps}
          />
          <SelectSearch
            name="job_experience_id"
            label="Experiencia laboral requerida"
            options={offerUtils?.jobExperiences}
            initialValue={currentOffer?.job_experience_id}
            setData={setCurrentOffer}
            {...selectProps}
            {...inputProps}
          />
        </div>
        <Check label="Remoto" name="is_freelance" wrapperClass="mt-3" handleChangeData={handleChangeData} />
        <div className="d-flex justify-content-center">
          <button className="offer-form__button">Actualizar</button>
        </div>
      </form>
    </Modal>
  )
}
