import styled from 'styled-components'

export * from './Button.js'

export const WrapperButton = styled.button`
  padding: 6px 12px;
  cursor: pointer;
  border: none;
  outline: none;
  font-weight: 600;
  font-family: 3em !important;
  border-radius: 5px;

  &:focus {
    outline: none !important;
  }
`
