import React from 'react'
import { MessageError } from 'components/message-error'
import { isEmpty } from 'utils/validation'
import { WrapperInputDate, InputWrapper, WrapperInputTextarea } from '.'

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
    <InputWrapper className={wrapperClassName} hasError={hasError}>
      <label className="input__label">{label}</label>
      <input className="input" type={type} placeholder={placeholder} value={value} {...props} disabled={disabled} />
      {hasError && <MessageError error={customError || messageError} />}
    </InputWrapper>
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
  value = '2022-06-09',
  ...props
}) => {
  const hasError = required && isEmpty(value)
  return (
    <WrapperInputDate className={wrapperClassName} hasError={hasError}>
      <div className="d-flex flex-column">
        <label className="input__label">{label}</label>
        <input className="input" type={type} name={name} placeholder={placeholder} value={value} {...props} />
        {hasError && <MessageError error={messageError} />}
      </div>
    </WrapperInputDate>
  )
}

export const InputFile = ({ label = 'Cámara de comercio', setData = () => {}, data = {}, name = '' }) => {
  const handleChange = ({ target }) => {
    if (target.files && target.files[0]) {
      setData({ ...data, [name]: target.files[0] })
    }
  }

  return (
    <div className="d-flex flex-column flex-1">
      <label className="text-gray">{label}</label>
      <label className="border p-3" htmlFor={name}>
        <input type="file" onChange={handleChange} name={name} id={name} file="descargar" />
        {/* <a href="descargar" download>
          Descargar
        </a> */}
      </label>
    </div>
  )
}
