import styled from 'styled-components'

export * from './Banner'

export const WrapperBanner = styled.div`
  .banner {
    &__image {
      height: 600px;
      width: 100%;
      background-size: cover;
      background-position: center center;
    }

    &__row {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      gap: 11px;
    }

    &__form {
      box-sizing: border-box;
      min-height: 200px;
      background-color: white;
      width: 80%;
      padding: 15px;

      &-cont {
        border-bottom: 3px solid var(--blue);
        width: 90%;
        box-sizing: border-box;
        margin-left: 10px;
        margin-right: 10px;
      }

      &-select {
        height: 50px;
        border: none;
        outline: none;
        border-bottom: 3px solid var(--blue);
      }

      &-button {
        background-color: var(--blue);
        border: none;
        border-radius: 5px;
        padding: 10px 15px;
        width: 100%;
        min-width: 200px;
        font-size: 1em;
        color: white;
        margin-top: 10px;
      }

      &-input {
        border: none;
        height: 50px;
        outline: none;
      }

      &-icon {
        align-self: center;
      }
    }
  }
`
