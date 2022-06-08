import React from 'react'
import { WrapperCard } from '.'

export const Card = ({ image = '', name = '', location = '' }) => {
  return (
    <WrapperCard>
      <div className="cont">
        <img className="cont__image" src={image} alt={name} />
      </div>
      <h4 className="title">{name}</h4>
      <p className="text">
        <i className="fa fa-map-marker mr-1" />
        {location || 'Bogota'}
      </p>
      <p className="text">Trabajos actuales: 0</p>
    </WrapperCard>
  )
}
