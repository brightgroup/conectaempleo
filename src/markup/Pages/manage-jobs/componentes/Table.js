import { WrapperTable } from '.'
import React from 'react'

export const Table = () => {
  return (
    <WrapperTable>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" id="check12" className="table__header-check" />
            </th>
            <th>
              <h3 className="table__title table_job-type">Tipo de trabajo</h3>
            </th>
            <th>
              <h3 className="table__title">Aplicaciones</h3>
            </th>
            <th>
              <h3 className="table__title">Fecha</h3>
            </th>
            <th>
              <h3 className="table__title ml-4">Estado</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td className="table__field-check align-middle">
              <input type="checkbox" />
            </td>
            <td className="table__field-text">
              <p>
                <i className="fa fa-map-marker mr-1" /> Colombia, Bogota
              </p>
            </td>
            <td className="table__field-text">(5) aplicaciones</td>
            <td className="table__field-text">Active</td>
            <td className="table__field-text">
              <div className="d-flex">
                <i className="fa fa-eye table__card-icon" />
                <i class="fa-solid fa-pencil table__card-icon bg-warning" />
                <i className="ti-trash table__card-icon bg-danger" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </WrapperTable>
  )
}
