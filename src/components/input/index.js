import styled from 'styled-components'

export * from './Input'

export const WrapperInputLabel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .input {
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 8px 15px;
    box-shadow: 0 0 10px 0 rgb(0 24 128 / 10%);
    border: 1px solid transparent;
    height: 50px;
    border: ${({ hasError }) => `1px solid ${hasError ? 'var(--error)' : 'transparent'}`};

    &__label {
      color: ${({ hasError }) => (hasError ? 'var(--error)' : '#343a40')};
    }
  }
`

export const WrapperInputTextarea = styled.div`
  .input {
    border-radius: 5px;
    outline: none;
    padding: 8px 15px;
    box-shadow: 0 0 10px 0 rgb(0 24 128 / 10%);
    width: 100%;
    margin: 0;
    border: ${({ hasError }) => `1px solid ${hasError ? 'var(--error)' : 'transparent'}`};

    &__label {
      color: ${({ hasError }) => (hasError ? 'var(--error)' : '#343a40')};
    }
  }
`

export const WrapperInputDate = styled.div`
  width: 100%;

  .input {
    border-radius: 5px;
    outline: none;
    padding: 8px 15px;
    box-shadow: 0 0 10px 0 rgb(0 24 128 / 10%);
    width: 100%;
    height: 50px;
    border: ${({ hasError }) => `1px solid ${hasError ? 'var(--error)' : 'transparent'}`};

    &__label {
      color: ${({ hasError }) => (hasError ? 'var(--error)' : '#343a40')};
    }
  }
`
