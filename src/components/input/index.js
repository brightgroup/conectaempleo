import styled from 'styled-components'

export * from './Input'

export const InputWrapper = styled.div`
  width: 100%;

  .input {
    border: none;
    outline: none;
    padding: 0 15px;
    height: 50px;
    box-shadow: 0 0 10px 0 rgb(0 24 128 / 10%) !important;
    border-radius: 0.25rem;
  }
`
