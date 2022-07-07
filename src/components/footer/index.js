import styled from 'styled-components'

export * from './Footer'

export const WrapperFooter = styled.div`
  .footer {
    &__section {
      background-color: #222845;
      padding: 80px 0 20px;
      padding: 40px 70px;
    }

    &__list {
      list-style: none;
    }

    &__text {
      font-size: 14px;
      color: #c6cffa;
      padding-right: 10px;
    }

    &__column {
      width: 38%;

      &-last {
        width: 24%;
      }
    }

    &__input {
      border: 2px solid white;
      background-color: white;
      padding: 10px 20px;
      border-radius: 30px;
    }

    &__button {
      color: white;
      background-color: #2e55fa;
      padding: 10px 20px;
      border-radius: 30px;
      border: none;
      margin-left: 10px;

      &:hover {
        color: black;
      }
    }

    &__social {
      background-color: white;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      color: #222845;
      margin-left: 4px;

      &-icon {
        color: #222845;
        outline: none;
        text-decoration: none;
        &:hover {
          color: white;
        }
      }
    }

    &__icon {
      &-facebook {
        &:hover {
          background-color: #3b5998;
        }
      }

      &-google {
        &:hover {
          background-color: #de4e43;
        }
      }

      &-linkedin {
        &:hover {
          background-color: #007bb6;
        }
      }

      &-instagram {
        &:hover {
          background-color: #8a5a4e;
        }
      }

      &-twiter {
        &:hover {
          background-color: #1ea1f3;
        }
      }
    }

    &__questions {
      &-title {
        font-size: 20px;
        font-weight: 500;
        font-family: sans-serif;
      }

      &-list {
        list-style: none;
        font-family: sans-serif;
      }

      &-item {
        text-decoration: none;
        color: #c6cffa;
        &::before {
          content: '-';
          position: relative;
          left: -5px;
        }
        &:hover {
          color: #0056b3;
        }
      }

      &-text {
        float: left;
        padding: 5px 5px 5px 20px;
        width: 50%;
        position: relative;
      }
    }

    &__jobs {
      &-text {
        float: left;
        width: 100%;
        padding: 5px 5px 5px 20px;
        position: relative;
      }
    }

    &__rights {
      background-color: #171d36;
      width: 100%;
      height: 72px;
    }
  }
`
