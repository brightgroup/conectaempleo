import styled from 'styled-components'

export * from './Conversations'
export * from './Conversation'
export * from './Chat'

export const ChatWrapper = styled.div`
  gap: 0.5rem;
  margin-top: 0.9375rem;

  .chat {
    &__conversations {
      width: 35%;
      box-shadow: 0 0 0.625rem 0 rgb(0 24 128 / 10%);
      border-radius: 0.25rem;
    }

    &__conversation {
      width: 65%;
      height: 25rem;
      box-shadow: 0 0 0.625rem 0 rgb(0 24 128 / 10%);
      border-radius: 0.25rem;

      &-image {
        width: 1.875rem;
        height: 1.875rem;
        border-radius: 100%;
        object-fit: contain;
      }
    }

    &__messages {
      overflow-y: auto;
      gap: 0.375rem;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    &__message {
      height: 3.5rem;
      width: 100%;
      border-radius: 0.3125rem;
      background-color: var(--blue);
      color: white;
      font-size: 0.875rem;
      font-weight: 600;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        width: 0;
        top: 0.625rem;
        right: -0.625rem;
        border-bottom: 0.625rem solid transparent;
        border-left: 0.625rem solid var(--blue);
      }
    }

    &__incoming-message {
      background-color: var(--dark-gray);
      color: var(--gray);

      &::before {
        left: -0.625rem;
        border-left: 0 solid transparent;
        border-right: 0.625rem solid var(--dark-gray);
      }
    }

    &__hour {
      position: absolute;
      bottom: 0.625rem;
      right: 3.75rem;
      color: white;
      font-size: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.375rem;
      padding: 0;
      margin: 0;
      font-weight: 600;

      &-incoming {
        right: 1.875rem;
      }
    }

    &__contact-image {
      width: 3.125rem;
      height: 3.125rem;
      border-radius: 100%;
      object-fit: contain;
    }

    &__input {
      border: 0.0625rem solid var(--light-gray);
      border-radius: 0.125rem;
      padding: 0.375rem;
      padding-right: 4.625rem;

      &-container {
        height: 5rem;
        background-color: var(--dark-gray);
        padding: 0.75rem;
        position: relative;
      }
    }

    &__send-button {
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      right: 1.125rem;
      width: 4.6875rem;
      height: 2.9375rem;
      background-color: var(--blue);
      border-radius: 0.25rem;
    }

    &__active-conversation {
      background-color: var(--active-gray);
    }
  }
`
