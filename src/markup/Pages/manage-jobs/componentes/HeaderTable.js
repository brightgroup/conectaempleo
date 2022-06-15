import React from 'react'
import { sortArray } from 'utils/array'

export const HeaderTable = ({ setData = () => {}, jobOffers }) => {
  const filterData = ({ target }) => {
    const key = target.value
    if (key === 'initial') return setData(jobOffers)
    setData(sortArray(jobOffers, { key, isDate: key.includes('date') }))
  }

  return (
    <thead>
      <tr>
        <td />
        <td />
        <td />
        <td />
        <td className="table__filter">
          <select name="Orden por" className="w-100 table__organize" onChange={filterData}>
            <option value="initial">Ordenar por</option>
            <option value="expiry_date">Más recientes</option>
            <option value="num_of_positions">Vacantes</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>
          <input type="checkbox" id="check12" className="table__header-check" />
        </th>
        <th>
          <h3 className="table__title table_job-type">Oferta</h3>
        </th>
        <th>
          <h3 className="table__title">Aplicaciones</h3>
        </th>
        <th>
          <h3 className="table__title">Expiración</h3>
        </th>
        <th>
          <h3 className="table__title ml-4">Estado</h3>
        </th>
      </tr>
    </thead>
  )
}
