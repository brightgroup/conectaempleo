import React, { useState } from 'react'
import { Input } from 'components/input'
import { WrapperForm } from '.'

export const LoginForm = ({ handleSubmit, handleChangeInput, error, data }) => {
  const [validate, setValidate] = useState(false)

  const inputProps = {
    required: validate,
    wrapperClassName: 'mt-3',
  }

  const validation = () => {
    setValidate(true)
  }

  return (
    <WrapperForm className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
      <h3 className="pt-4 mt-4">Información {data.rol === 'candidate' ? 'Candidato' : 'Empleador'}</h3>
      <Input
        placeholder="hello@example.com"
        name="email"
        customError={error.email}
        onChange={handleChangeInput}
        value={data.email}
        {...inputProps}
      />
      <Input
        placeholder="******"
        type="password"
        name="password"
        customError={error.password}
        onChange={handleChangeInput}
        value={data.password}
        {...inputProps}
      />
      <button type="submit" onClick={validation} className="form__button--styles my-4 ">
        INICIAR SESIÓN
      </button>
      <div className="dz-social clearfix mt-3 d-flex justify-content-between w-100">
        <h5 className="form-title m-t5 pull-left">Ingresa con </h5>
        <ul className="dez-social-icon dez-border pull-right dez-social-icon-lg text-white m-s2 d-flex gap-2">
          <div className="network-icon center">
            <i className="fa-brands fa-facebook-f" />
          </div>
          <div className="network-icon center twitter-container">
            <i className="fa-brands fa-twitter" />
          </div>
          <div className="network-icon center linkedin-container">
            <i className="fa-brands fa-linkedin-in" />
          </div>
          <div className="network-icon center google-container">
            <i className="fa-brands fa-google-plus-g" />
          </div>
        </ul>
      </div>
    </WrapperForm>
  )
}
