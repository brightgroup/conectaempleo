import React from 'react'
import { WrapperMessageError } from '.'

export const MessageError = ({ error = '' }) => {
  return (
    <WrapperMessageError>
      <i className="fa-solid fa-circle-exclamation style--i" />
      <small className="text-red-error style-small">{error}</small>
    </WrapperMessageError>
  )
}
