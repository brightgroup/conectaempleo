import { WrapperTable } from '.'
import React from 'react'

export const Table = () => {
  return (
    <WrapperTable>
      <div className="d-flex table__header">
        <input type="checkbox" id="check12" className="table__header-check" />
        <h3 className="table__header-type">Tipo de trabajo</h3>
        <h3 className="table__header-aplication">Aplicaciones</h3>
        <h3 className="table__header-option">Fecha</h3>
        <h3 className="table__header-option">Estado</h3>
      </div>
      <div className="d-flex table__body">
        <div className="d-inline mx-3">
          <input type="checkbox" id="check12" className="table__check-body" />
        </div>
        <div className="table__body-type">
          <p className="mb-0 text-primary">Social Media Expert</p>
          <ul className="d-flex table__description-list">
            <li className="table__description-item">
              <i className="fa fa-map-marker " /> Colombia, Bogota
            </li>
            <li className="table__description-item ml-2">
              <i className="fa fa-bookmark-o" /> Tiempo completo
            </li>
            <li className="table__description-item">
              <i className="fa fa-filter" /> Diseñadora web
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-2 text-primary table__card-application"> (5) Aplicaciones </p>
        </div>
        <div>
          <p className="mb-2 text-danger ml-2"> Pendiente </p>
        </div>
        <div>
          <div className='d-flex ml-5'>
            <i className="fa fa-eye table__card-icon" />
            <i class="fa-solid fa-pencil table__card-icon bg-warning"/>
            <i className="ti-trash table__card-icon bg-danger" />
          </div>
        </div>
      </div>
    </WrapperTable>
  )
}
