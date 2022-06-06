import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'components/button'
import { getForm } from './components'
import { registerUser } from 'store/actions/AuthActions'
import { errorEmail, errorPassword, hasEmptyFields } from 'utils/validation'
import image from 'images/banner/bnr2.jpg'
import { initialState, WrapperRegister } from '.'

const Register = () => {
  const dispatch = useDispatch()

  const [rol, setRol] = useState('')
  const [data, setData] = useState({})
  const [validate, setValidate] = useState(false)
  const [error, setError] = useState({})

  useEffect(() => {
    setData(initialState[rol])
    setValidate(false)
    setError({})
  }, [rol])

  const hasErrors = () => {
    const { password, password_confirmation, email } = data
    if (hasEmptyFields(data, Object.keys(data))) return true

    if (errorEmail(email)) {
      setError({ ...error, email: 'El correo no es valido' })
      return true
    }

    if (errorPassword(password)) {
      setError({
        ...error,
        password: 'La contraseña debe ser mayor a 6 caracteres, incluir mayúsculas, minusculas y números',
      })
      return true
    }

    if (password !== password_confirmation) {
      setError({ ...error, passwordConfirm: 'Las contraseñas no son iguales' })
      return true
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError({})
    setValidate(true)
    if (hasErrors()) return
    // const resp = await dispatch(registerUser(data, rol))
    // if (resp) {
    //   alert('Usuario creado')
    //   setValidate(false)
    //   setError({})
    //   setData(initialState[rol])
    // }
  }

  return (
    <WrapperRegister className="w-100">
      <div className="register__image" style={{ backgroundImage: `url(${image})` }}>
        <div className="register__image--background d-flex justify-content-center  align-items-center">
          <h2 className="text-white">Registro</h2>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Button
          wrapperClass={`mr-2 ${rol === 'candidate' ? 'actived-button' : ''}`}
          onClick={() => setRol('candidate')}
          text="Candidato"
        />
        <Button
          wrapperClass={rol === 'employer' ? 'actived-button' : ''}
          onClick={() => setRol('employer')}
          text="Empleador"
        />
      </div>
      <div className="w-100 d-flex flex-column align-items-center mt-5" onSubmit={handleSubmit}>
        {getForm(rol, { setData, data, validate, handleSubmit, error })}
      </div>
    </WrapperRegister>
  )
}

export default Register
