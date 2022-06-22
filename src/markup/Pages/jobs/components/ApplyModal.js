import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from 'components/input'
import { Modal } from 'components/modal'
import { SelectSearch } from 'components/select'
import { applyJob } from 'store/actions/JobOffersActions'
import Swal from 'sweetalert2'
import { swal } from 'utils/swal'
import { isEmpty } from 'utils/validation'
import { InitialState } from '.'

const ApplyModal = ({ show = false, onClose = () => {}, currency = [], slug = '' }) => {
  const dispatch = useDispatch()
  const [data, setData] = useState(InitialState)
  const [activatedSelect, setActivatedSelect] = useState('')
  const [validate, setValidate] = useState(false)

  const handleChangeData = ({ target }) => {
    setData({ ...data, [target.name]: target.value })
  }

  const handleSubmit = async () => {
    setValidate(true)
    if (hasEmptyFields()) return
    const status = await dispatch(applyJob(slug, data))
    if (status) {
      Swal.fire(swal('Has aplicado a esta vacante'))
      setData(InitialState)
    }
    setValidate(false)
  }

  const hasEmptyFields = () => {
    const keys = Object.keys(data)
    return keys?.some(key => isEmpty(data[key]))
  }
  const selectProps = { activatedSelect, setActivatedSelect }

  return (
    <Modal show={show} onClose={onClose}>
      <h3 className="modal__title mb-5">Aplicar a la oferta</h3>
      <Input
        label="Remuneración mínima"
        placeholder="1`000.000"
        type="number"
        name="current_salary"
        onChange={handleChangeData}
        value={data.current_salary}
        required={validate}
      />
      <Input
        label="Remuneración maxima"
        placeholder="5`000.000"
        type="number"
        name="expected_salary"
        onChange={handleChangeData}
        value={data.expected_salary}
        wrapperClassName="mt-2"
        required={validate}
      />
      <SelectSearch options={currency} name="salary_currency" setData={setData} required={validate} {...selectProps} />
      <div className="d-flex justify-content-center mt-4">
        <button className="modal__button" type="submit" onClick={() => handleSubmit()}>
          enviar
        </button>
      </div>
    </Modal>
  )
}

export default ApplyModal
