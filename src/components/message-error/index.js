import styled from 'styled-components'

export * from './MessageError'

export const WrapperMessageError = styled.div`
  display: flex;

  .error {
    &__icon {
      color: var(--error);
      margin-right: 5px;
    }

    &__text {
      color: var(--error);
    }
  }
`
