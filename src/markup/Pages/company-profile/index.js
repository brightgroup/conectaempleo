import styled from 'styled-components'

export { default } from './CompanyProfile'

export const Wrapper = styled.div`
  gap: 30px;
  min-height: 100%;
  padding: 40px 0;

  .company-profile {
    &__input-group {
      display: flex;
      gap: 20px;
      margin-top: 15px;
    }

    &__line {
      margin-top: 40px;
      margin-bottom: 20px;
    }

    &__user-button {
      background-color: var(--blue);
      color: white;
      height: 46px;
      width: 100%;
      margin-top: 12px;
    }
  }
`

export const Content = styled.div``
