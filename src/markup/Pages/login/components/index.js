import styled, { keyframes } from 'styled-components'

export * from './LoginForm'

const animateStart = keyframes`
    0%{
        opacity:0;
    }
    50%{
        opacity:0.5;
    }
    100%{
        opacity:1;
    }
`

export const WrapperForm = styled.form`
  width: 80%;
  animation: ${animateStart} 1s ease;

  .form__button--styles {
    padding: 6px 22px;
    background-color: var(--blue);
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    outline: none;

    &:hover {
      box-shadow: 2px 2px 2px gray;
    }
  }

  .network-icon {
    width: 2.1875rem;
    height: 2.1875rem;
    background-color: #4867aa;
    border-radius: 0.25rem;
    font-size: 0.75rem;
  }

  .twitter-container {
    background-color: #1da1f2;
  }

  .linkedin-container {
    background-color: #0274b3;
  }

  .google-container {
    background-color: #dc4a38;
  }
`
