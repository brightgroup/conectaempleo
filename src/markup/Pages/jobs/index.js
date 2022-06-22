import styled from 'styled-components'

export { default } from './Jobs'

export const WrapperJobs = styled.div`
  .filter {
    width: 250px;
    height: 100vh;
    border-radius: 5px;

    &__title {
      color: var(--blue);
      font-weight: 600;
    }

    &__section {
      border-bottom: 2px solid var(--blue);
    }
  }

  .modal {
    &__title {
      color: var(--blue);
    }

    &__key {
      font-weight: 600;
      text-align: start !important;
    }

    &__value {
      text-align: start !important;
    }

    &__button {
      margin: 0 auto;
      border: none;
      border-radius: 5px;
      padding: 10px 15px;
      background-color: var(--blue);
      outline: none;

      &:hover {
        box-shadow: 2px 2px 4px gray;
        color: white;
      }
    }
  }
`
