import React from 'react'
import { useDispatch } from 'react-redux'
import { getOffer } from 'store/actions/JobOffersActions'
import { modalName } from '..'

export const BodyTable = ({ data = [], toggleModal = '', deleteOffer = () => {}, readOffer = () => {} }) => {
  const dispatch = useDispatch()

  const selectOffer = offer => {
    dispatch(getOffer(offer))
    toggleModal(modalName.update)
  }

  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td className="table__field-check align-middle">
            <input type="checkbox" />
          </td>
          <td className="table__field-text">
            <p>{item?.title}</p>
          </td>
          <td className="table__field-text">(5) aplicaciones</td>
          <td className="table__field-text">{item?.expiry_date.slice(0, 10)}</td>
          <td className="table__field-text">
            <div className="d-flex">
              <i className="fa fa-eye table__card-icon" onClick={() => readOffer(item)} />
              <i className="fa-solid fa-pencil table__card-icon bg-warning" onClick={() => selectOffer(item?.id)} />
              <i className="ti-trash table__card-icon bg-danger" onClick={() => deleteOffer(item?.id)} />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  )
}
