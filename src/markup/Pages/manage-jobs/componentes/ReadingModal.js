import React from 'react'
import { Modal } from 'components/modal/Modal'

export const ReadingModal = ({ show, readOffer, data }) => {
  const expirationDate = data?.expiry_date?.slice(0, 10)

  return (
    <Modal show={show} onClose={() => readOffer()}>
      <h4 className="reading-modal__title mt-5">{data.title}</h4>
      <div className="d-flex mt-5 px-4">
        <p className="reading-modal__label">Descripción:</p>
        <p className="reading-modal__description ml-2">{data.description}</p>
      </div>
      <div className="d-flex mt-5 px-4">
        <p className="reading-modal__label">Descripción:</p>
        <p className="reading-modal__description ml-2">{data.description}</p>
      </div>
      <div className="d-flex px-4">
        <p className="reading-modal__label">Beneficios:</p>
        <p className="reading-modal__description ml-2">{data.benefits}</p>
      </div>
      <div className="d-flex px-4">
        <p className="reading-modal__label">Salario entre </p>
        <p className="reading-modal__description ml-2">{` ${data.salary_from} - ${data.salary_to}`}</p>
      </div>
      <div className="d-flex px-4">
        <p className="reading-modal__label">Valido hasta </p>
        <p className="reading-modal__description ml-2">{expirationDate}</p>
      </div>
      <div className="d-flex px-4">
        <p className="reading-modal__label">Personas aplicadas:</p>
        <p className="reading-modal__description ml-3">{data.applied_users_count}</p>
      </div>
    </Modal>
  )
}
