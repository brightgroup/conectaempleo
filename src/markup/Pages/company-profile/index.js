import styled from 'styled-components'

export { default } from './CompanyProfile'

export const Wrapper = styled.div`
  gap: 30px;
  min-height: 100%;
  padding: 40px 0;

  .profile {
    &__input-group {
      display: flex;
      gap: 20px;
      margin-top: 15px;
      justify-content: space-between;
    }

    &__line {
      margin-top: 40px;
      margin-bottom: 20px;
    }

    &__user-image {
      height: 6.25rem;
      object-fit: contain;
      margin-bottom: 6px;
    }

    &__image-button {
      background-color: var(--blue);
      color: white;
      height: 46px;
      width: 100%;
      border-radius: 6px;
      cursor: pointer;
    }

    &__send-button {
      background-color: var(--blue);
      color: white;
      height: 46px;
      width: 100%;
      margin-top: 12px;
    }

    &__download-button-file {
      height: 58px;
      background-color: var(--blue);
      color: white;
      margin-top: 30px;
    }
  }
`

export const Content = styled.div``
