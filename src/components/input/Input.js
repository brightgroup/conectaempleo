import React from 'react'
import { InputWrapper } from '.'

export const Input = ({ label = '', type = 'text', required = '', placeholder = '', ...props }) => {
  return (
    <InputWrapper className="d-flex flex-column">
      <label className="text-dark">{label}</label>
      <input className="input" type={type} required={required} placeholder={placeholder} {...props} />
    </InputWrapper>
  )
}
