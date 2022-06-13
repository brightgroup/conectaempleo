import styled from 'styled-components'

export * from './Input'

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .input {
    border-radius: 4px;
    outline: none;
    padding: 8px 15px;
    height: 50px;
    border: ${({ hasError }) => `1px solid ${hasError ? 'var(--error)' : '#ccc'}`};
    transition: 0.2s all;

    &__label {
      color: ${({ hasError }) => (hasError ? 'var(--error)' : '#343a40')};
    }

    &:focus {
      box-shadow: 0 0 10px 0 rgb(0 24 128 / 15%);
    }
  }
`

export const WrapperInputTextarea = styled.div`
  .input {
    border-radius: 5px;
    outline: none;
    padding: 8px 15px;
    width: 100%;
    margin: 0;
    border: ${({ hasError }) => `1px solid ${hasError ? 'var(--error)' : '#ccc'}`};

    &__label {
      color: ${({ hasError }) => (hasError ? 'var(--error)' : '#343a40')};
    }

    &:focus {
      box-shadow: 0 0 10px 0 rgb(0 24 128 / 15%);
    }
  }
`

export const WrapperInputDate = styled.div`
  width: 100%;

  .input {
    border-radius: 5px;
    outline: none;
    padding: 8px 15px;
    width: 100%;
    height: 50px;
    border: ${({ hasError }) => `1px solid ${hasError ? 'var(--error)' : '#ccc'}`};

    &__label {
      color: ${({ hasError }) => (hasError ? 'var(--error)' : '#343a40')};
    }

    &:focus {
      box-shadow: 0 0 10px 0 rgb(0 24 128 / 15%);
    }
  }
`
