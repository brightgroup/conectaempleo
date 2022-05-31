import { Input } from 'components/input'
import React from 'react'
import { Link } from 'react-router-dom'
import { errorEmail, isEmpty } from 'utils/validation'
import { WrapperForm } from '.'

export const LoginForm = ({ handleSubmit, handleChangeInput, error, data }) => {
  return (
    <WrapperForm className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
      <h3 className="pt-4 mt-4">Información {data.rol === 'candidate' ? 'Candidato' : 'Empleador'}</h3>
      <Input
        placeholder="hello@example.com"
        name="email"
        messageError="El correo no es valido"
        onChange={handleChangeInput}
        value={data.email}
        required={true}
        validation={errorEmail}
      />
      {error && <p>{error.email}</p>}
      <Input
        type="password"
        placeholder="******"
        name="password"
        onChange={handleChangeInput}
        value={data.password}
        required={true}
        validation={isEmpty}
      />
      <button type="submit" className="form__button--styles my-4 ">
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
