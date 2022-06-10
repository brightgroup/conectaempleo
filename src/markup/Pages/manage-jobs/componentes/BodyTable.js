import React from 'react'

export const BodyTable = ({ data = [], setIdOffer = {} }) => {
  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td className="table__field-check align-middle">
            <input type="checkbox" />
          </td>
          <td className="table__field-text">
            <p>
              <i className="fa fa-map-marker mr-1" /> {`Colombia, Bogota ${item?.title}`}
            </p>
          </td>
          <td className="table__field-text">(5) aplicaciones</td>
          <td className="table__field-text">{item?.expiry_date.slice(0, 10)}</td>
          <td className="table__field-text">
            <div className="d-flex">
              <i className="fa fa-eye table__card-icon" />
              <i class="fa-solid fa-pencil table__card-icon bg-warning" />
              <i className="ti-trash table__card-icon bg-danger" onClick={() => setIdOffer({ id: item?.id })} />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  )
}
