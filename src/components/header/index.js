import styled from 'styled-components'

export * from './Header.js'

export const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;

  .header {
    &__logo {
      height: auto;
      max-width: 180px;
      &-size {
        max-width: 180px;
      }
    }

    &__nav {
      &-list {
        list-style-type: none;
      }

      &-option {
        text-decoration: none;
        padding: 8px 10px;
        margin: 0 10px 0 10px;
        font-size: 18px;
        font-weight: 600;

        &:hover {
          background-color: var(--blue);
          border-radius: 5px;
          color: white !important;
        }
      }
    }

    &__login {
      &-option {
        background-color: var(--blue);
        padding: 10px 8px;
        margin-left: 4px;
        border-radius: 4px;
        color: white;

        &:hover {
          box-shadow: 2px 2px 4px gray;
        }
      }
    }

    @media screen and (max-width: 1120px) {
      &__login {
        position: relative;
        right: 0;
      }

      &__nav {
        display: none !important;
        background-color: red;
      }
    }

    @media screen and (max-width: 768px) {
      &__login {
        &-nav {
          display: none !important;
        }
      }
    }
  }
`
