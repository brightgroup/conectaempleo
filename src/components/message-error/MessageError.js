import React from 'react'
import { WrapperMessageError } from '.'

export const MessageError = ({ error = '' }) => {
  return (
    <WrapperMessageError className="mt-2">
      <i className="fa-solid fa-circle-exclamation style--i mr-2" />
      <small className="text-red-error style-small">{error}</small>
    </WrapperMessageError>
  )
}
