import { Input } from 'components/input'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
        messageError="El campo es obligatorio"
        onChange={handleChangeInput}
        value={data.email}
        wrapperClassName="m"
        {...inputProps}
      />
      <Input
        type="password"
        placeholder="******"
        name="password"
        onChange={handleChangeInput}
        value={data.password}
        {...inputProps}
      />
      <button type="submit" onClick={validation} className="form__button--styles my-4 ">
        INICIAR SESIÓN
      </button>
      <div className="dz-social clearfix mt-3 d-flex justify-content-between w-100">
        <h5 className="form-title m-t5 pull-left">Ingresa con </h5>
        <ul className="dez-social-icon dez-border pull-right dez-social-icon-lg text-white m-s2">
          <li>
            <Link to={''} className="fa fa-facebook  fb-btn mr-1" target="bank"></Link>
          </li>
          <li>
            <Link to={''} className="fa fa-twitter  tw-btn mr-1" target="bank"></Link>
          </li>
          <li>
            <Link to={''} className="fa fa-linkedin link-btn mr-1" target="bank"></Link>
          </li>
          <li>
            <Link to={''} className="fa fa-google-plus gplus-btn" target="bank"></Link>
          </li>
        </ul>
      </div>
    </WrapperForm>
  )
}
