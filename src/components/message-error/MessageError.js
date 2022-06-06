import React from 'react'
import { WrapperMessageError } from '.'

export const MessageError = ({ error = '', WrapperClassName = '' }) => {
  return (
    <WrapperMessageError className={`d-flex align-items-center ${WrapperClassName}`}>
      <i className="fa-solid fa-circle-exclamation style--i mr-1" />
      <small className="text-red-error style-small">{error}</small>
    </WrapperMessageError>
  )
}
