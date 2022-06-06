import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from 'components/input'
import { Checkbox } from 'components/check'
import { Button } from 'components/button'
import { EMPLOYER_INPUTS, WrapperForm } from '.'

export const EmployerForm = ({ data, setData, handleSubmit = () => {}, validate, error }) => {
  const handleChangeData = ({ target }) => {
    const value = Object.keys(target).includes('checked') ? target.checked : target.value
    setData({
      ...data,
      [target.name]: value,
    })
  }
  return (
    <WrapperForm className="register__form bg-white p-4">
      <h4 className="font-weight-700">INFORMACIÓN PERSONAL</h4>
      <p className="font-weight-600">Si tiene una cuenta con nosotros, inicie sesión</p>
      {EMPLOYER_INPUTS(error)?.map((input, index) => (
        <Input
          key={index}
          {...input}
          onChange={handleChangeData}
          required={validate}
          value={data ? data[input.name] || '' : ''}
          WrapperClassNameError="mt-2"
        />
      ))}
      <Checkbox label="Suscríbirse al boletin de noticias" wrapperClassName="mt-2" />
      <Checkbox
        label="Acepto términos de uso"
        name="terms_of_use"
        onChange={handleChangeData}
        required={validate}
        wrapperClassName="d-flex flex-column"
        checked={data ? data.terms_of_use || false : false}
      />
      <div className="d-flex flex-column justify-content-center mt-3 align-items-center">
        <Button wrapperClass="register__button" text="Crear" type="submit" onClick={handleSubmit} />
        <div className="d-flex align-items-center mt-2">
          <i className="fa-solid fa-user mr-1" />
          <p className="mt-3">
            ya estas registrado{' '}
            <Link to="/login" className="register__link">
              ingresa
            </Link>
          </p>
        </div>
      </div>
    </WrapperForm>
  )
}
