import React from 'react'
import { WrapperMessageError } from '.'

export const MessageError = ({ error = '', WrapperClassName = 'mt-2' }) => (
  <WrapperMessageError className={`d-flex align-items-center ${WrapperClassName}`}>
    <i className="fa-solid fa-circle-exclamation mr-1 error__icon" />
    <small className="error__text">{error}</small>
  </WrapperMessageError>
)
