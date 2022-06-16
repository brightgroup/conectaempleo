import styled from 'styled-components'

export { default } from './Profile'

export const Wrapper = styled.div`
  gap: 30px;

  .profile {
    &__input-group {
      display: flex;
      gap: 20px;
      margin-top: 15px;
      justify-content: space-between;

      @media (max-width: 600px) {
        flex-direction: column;
      }
    }

    &__line {
      margin-top: 40px;
      margin-bottom: 20px;
    }

    &__user-image {
      height: 6.25rem;
      object-fit: contain;
      margin-bottom: 6px;
      transition: 0.4s all;
      opacity: 1;
    }

    &__image-button {
      background-color: var(--blue);
      color: white;
      height: 46px;
      width: 100%;
      border-radius: 6px;
      cursor: pointer;

      @media (max-width: 600px) {
        font-size: 14px;
        text-align: center;
      }
    }

    &__send-button {
      background-color: var(--blue);
      color: white;
      height: 46px;
      width: 100%;
      margin-top: 12px;

      @media (max-width: 600px) {
        font-size: 14px;
        text-align: center;
      }
    }

    &__download-button-file {
      height: 58px;
      background-color: var(--blue);
      color: white;
      margin-top: 30px;

      @media (max-width: 600px) {
        font-size: 14px;
        text-align: center;
      }
    }
  }
`

export const Content = styled.div``
