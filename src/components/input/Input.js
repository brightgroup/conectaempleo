import React from 'react'
import { MessageError } from 'components/message-error'
import { isEmpty } from 'utils/validation'
import { WrapperInputDate, WrapperInputLabel, WrapperInputTextarea } from '.'

export const Input = ({
  label = '',
  type = 'text',
  required = '',
  placeholder = label,
  messageError = 'Este campo es obligatorio',
  wrapperClassName = '',
  customError = '',
  value = '',
  disabled = false,
  ...props
}) => {
  const hasError = required && (customError || isEmpty(value)) && !disabled

  return (
    <WrapperInputLabel className={wrapperClassName} hasError={hasError}>
      <label className="input__label">{label}</label>
      <input className="input" type={type} placeholder={placeholder} value={value} {...props} disabled={disabled} />
      {hasError && <MessageError error={customError || messageError} />}
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
  const hasError = required && isEmpty(props.value)

  return (
    <WrapperInputTextarea className={wrapperClassName} hasError={hasError}>
      <label className="input__label">{label}</label>
      <textarea {...props} className="input w-100" />
      {required && isEmpty(props.value) && <MessageError error={messageError} WrapperClassName="mt-1" />}
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
  const hasError = required && isEmpty(props.value)
  return (
    <WrapperInputDate className={wrapperClassName} hasError={hasError}>
      <div className="d-flex flex-column">
        <label className="input__label">{label}</label>
        <input className="input" type={type} name={name} placeholder={placeholder} {...props} />
        {hasError && <MessageError error={messageError} />}
      </div>
    </WrapperInputDate>
  )
}
