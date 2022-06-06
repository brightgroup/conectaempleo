import styled from 'styled-components'

export { default } from './Register'

export const WrapperRegister = styled.div`
  height: 100%;
  margin-bottom: 2em;

  .register {
    &__image {
      width: 100%;
      height: 300px;
      background-position: top;
      background-size: cover;

      &--background {
        width: 100%;
        height: 100%;
        background-color: rgba(25, 38, 101, 0.7);
      }
    }

    &__form {
      width: 500px;
    }
  }

  .actived-button {
    background: #0097fe;
    color: white;
    box-shadow: 2px 2px 2px gray;
  }
`

export const initialStateCandidate = {
  first_name: '',
  rol: 'Estudiante',
  email: '',
  password: '',
  national_id_card_number: '',
  terms_of_use: '',
  password_confirmation: '',
  middle_name: '',
  first_lastname: '',
  second_lastname: '',
}

export const initialStateEmployer = {
  name: '',
  email: '',
  password: '',
  terms_of_use: '',
}

export const initialState = {
  candidate: initialStateCandidate,
  employer: initialStateEmployer,
}

export const errors = {
  invalidEmail: 'El correo no es valido',
  invalidPassword: 'La contraseña debe ser mayor a 6 caracteres, incluir mayúsculas, mínusculas y números',
  differentPasswords: 'Las contraseñas no son iguales',
}
