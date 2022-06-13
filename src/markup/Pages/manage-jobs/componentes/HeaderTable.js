import React from 'react'

export const HeaderTable = () => (
  <thead>
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
        <h3 className="table__title">Fecha</h3>
      </th>
      <th>
        <h3 className="table__title ml-4">Estado</h3>
      </th>
    </tr>
  </thead>
)
