import React from 'react'
import styled from 'styled-components'
import { CandidateForm } from './CandidateForm'
import { EmployerForm } from './EmployerForm'

export const getForm = (rol, props = {}) => {
  const forms = {
    candidate: <CandidateForm {...props} />,
    employer: <EmployerForm {...props} />,
  }
  return forms[rol]
}

export const WrapperForm = styled.form`
  width: 500px;
  height: 32.5em;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 7px;
    background: white;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0097fe;
    border-radius: 5px;
  }

  .register {
    &__button {
      padding: 6px 20px;
      border-radius: 5px;
      cursor: pointer;
      width: 150px;
      border: 2px solid #0097fe;
      color: #0097fe;
      font-weight: 600;

      &:hover {
        background-color: #0097fe;
        color: white;
      }
    }
    &__link {
      color: #0097fe;
      font-weight: 700;
    }
  }
`

export const CANDIDATE_INPUTS = error => [
  {
    name: 'national_id_card_number',
    placeholder: '1245...',
    label: 'Identificación',
    wrapperClassName: 'mt-3',
    type: 'number',
  },
  {
    name: 'first_name',
    placeholder: 'Primer Nombre',
    label: 'Primer Nombre',
    wrapperClassName: 'mt-3',
  },
  {
    name: 'middle_name',
    placeholder: 'Segundo Nombre',
    label: 'Segundo Nombre',
    wrapperClassName: 'mt-3',
  },
  {
    name: 'first_lastname',
    placeholder: 'Primer Apellido',
    label: 'Primer Apellido',
    wrapperClassName: 'mt-3',
  },
  {
    name: 'second_lastname',
    placeholder: 'Segundo Apellido',
    label: 'Segundo Apellido',
    wrapperClassName: 'mt-3',
  },
  {
    name: 'email',
    placeholder: 'hello@example.com',
    label: 'Email',
    wrapperClassName: 'mt-3',
    customError: error?.email || '',
  },
  {
    name: 'password',
    placeholder: '******',
    label: 'Contraseña',
    wrapperClassName: 'mt-3',
    type: 'password',
    customError: error?.password || '',
  },
  {
    name: 'password_confirmation',
    placeholder: '******',
    label: 'Confirmación de contraseña',
    wrapperClassName: 'mt-3',
    type: 'password',
    customError: error?.passwordConfirm || '',
  },
]

export const EMPLOYER_INPUTS = error => [
  {
    name: 'name',
    placeholder: 'Nombre de la empresa',
    label: 'Nombre de la empresa',
    wrapperClassName: 'mt-3',
  },
  {
    name: 'email',
    placeholder: 'Hello@example.com',
    label: 'Email',
    wrapperClassName: 'mt-3',
    customError: error?.email || '',
  },
  {
    name: 'password',
    placeholder: '******',
    label: 'Contraseña',
    wrapperClassName: 'mt-3',
    type: 'password',
    customError: error?.password || '',
  },
  {
    name: 'password_confirmation',
    placeholder: '******',
    label: 'Confirmación de contraseña',
    wrapperClassName: 'mt-3',
    type: 'password',
    customError: error?.passwordConfirm || '',
  },
]
