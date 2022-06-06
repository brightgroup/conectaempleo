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
  align-items: flex-start;
  line-height: 30px;

  .checkbox {
    &__label {
      cursor: pointer;
      align-items: self-start;
    }
  }
`
