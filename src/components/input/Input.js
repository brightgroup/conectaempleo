import { MessageError } from 'components/message-error'
import React, { useState } from 'react'
import { WrapperInputDate, WrapperInputLabel, WrapperInputTextarea } from '.'

export const InputLabel = ({
  label = '',
  type = 'text',
  required = '',
  placeholder = '',
  messageError = 'Este campo es obligatorio',
  validation = '',
  ...props
}) => {
  const { value } = props
  const [error, setError] = useState(false)

  const validations = () => {
    setError(false)
    const resp = validation(value)
    if (resp) {
      setError(true)
    }
  }

  return (
    <WrapperInputLabel>
      <div className="d-flex flex-column">
        <label className="text-dark">{label}</label>
        <input
          className="input--style"
          type={type}
          required={required}
          onBlur={validations}
          onKeyUp={validations}
          placeholder={placeholder}
          {...props}
        />
        {required && error && <MessageError error={messageError} />}
      </div>
    </WrapperInputLabel>
  )
}

export const InputTextarea = ({
  label = '',
  validation = '',
  messageError = 'Este campo es obligatorio',
  required = '',
  ...props
}) => {
  const { value } = props
  const [error, setError] = useState(false)

  const validations = () => {
    setError(false)
    const resp = validation(value)
    if (resp) {
      setError(true)
    }
  }
  return (
    <WrapperInputTextarea>
      <label className="text-dark mt-1">{label}</label>
      <textarea {...props} className="input--style" onBlur={validations} onKeyUp={validations} />
      {required && error && <MessageError error={messageError} />}
    </WrapperInputTextarea>
  )
}

export const InputDate = ({
  label = '',
  type = 'date',
  required = '',
  placeholder = 'Selecciona una fecha',
  messageError = 'Este campo es obligatorio',
  validation = '',
  name = '',
  ...props
}) => {
  const { value } = props
  const [error, setError] = useState(false)

  const validations = () => {
    setError(false)
    const resp = validation(value)
    if (resp) {
      setError(true)
    }
  }
  return (
    <WrapperInputDate>
      <div className="d-flex flex-column">
        <label className="text-dark">{label}</label>
        <input
          className="input--style"
          type={type}
          name={name}
          required={required}
          onBlur={validations}
          onKeyUp={validations}
          placeholder={placeholder}
          {...props}
        />
        {required && error && <MessageError error={messageError} />}
      </div>
    </WrapperInputDate>
  )
}
