import React from 'react'
import { MessageError } from 'components/message-error'
import { isEmpty } from 'utils/validation'
import { WrapperInputDate, WrapperInputLabel, WrapperInputTextarea } from '.'

export const Input = ({
  label = '',
  type = 'text',
  required = '',
  placeholder = '',
  messageError = 'Este campo es obligatorio',
  wrapperClassName = '',
  customError = '',
  ...props
}) => {
  return (
    <WrapperInputLabel className={wrapperClassName}>
      <div className="d-flex flex-column">
        <label className="text-dark">{label}</label>
        <input className="input--style" type={type} placeholder={placeholder} {...props} />
        {required && (customError || isEmpty(props.value)) && <MessageError error={customError || messageError} />}
      </div>
    </WrapperInputLabel>
  )
}

export const TextArea = ({
  label = '',
  messageError = 'Este campo es obligatorio',
  required = '',
  wrapperClassName = '',
  ...props
}) => {
  return (
    <WrapperInputTextarea className={wrapperClassName}>
      <label className="text-dark">{label}</label>
      <textarea {...props} className="input--style w-100" />
      {required && isEmpty(props.value) && <MessageError error={messageError} />}
    </WrapperInputTextarea>
  )
}

export const InputDate = ({
  label = '',
  type = 'date',
  required = '',
  placeholder = 'Selecciona una fecha',
  messageError = 'Este campo es obligatorio',
  name = '',
  wrapperClassName = '',
  ...props
}) => {
  return (
    <WrapperInputDate className={wrapperClassName}>
      <div className="d-flex flex-column">
        <label className="text-dark">{label}</label>
        <input className="input--style" type={type} name={name} placeholder={placeholder} {...props} />
        {required && isEmpty(props.value) && <MessageError error={messageError} />}
      </div>
    </WrapperInputDate>
  )
}
