import styled from 'styled-components'

export * from './Card'

export const InitialState = {
  cv_id: 1,
  current_salary: '',
  expected_salary: '',
  salary_currency: '',
}

export const WrapperCard = styled.div`
  width: 80%;
  min-height: 160px;
  height: auto;
  border-radius: 5px;
  padding: 10px;
  display: flex;

  .card {
    &__title {
      color: var(--blue);
      font-weight: 600;
    }

    &__send {
      width: 200px;
    }

    &__button {
      padding: 10px 15px;
      border: none;
      background-color: var(--blue);
      border-radius: 5px;
      font-weight: 500;
      color: white;
      outline: none;

      &:hover {
        box-shadow: 2px 2px 4px gray;
      }
    }

    &__job-type {
      color: gray;
    }

    &__company {
      font-weight: 600;
    }
  }
`
