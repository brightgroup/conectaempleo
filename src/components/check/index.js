import styled from 'styled-components'

export * from './Check.js'

export const WrapperCheck = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const WrapperCheckbox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 30px;
  .checkbox__label {
    cursor: pointer;
  }
`
