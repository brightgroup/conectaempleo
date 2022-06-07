import styled from 'styled-components'

export * from './Select'

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  color: #9da5b1;

  .disabled-select {
    background-color: rgb(214, 205, 205) !important;
    border: 1px solid transparent;
  }

  .select {
    width: 100%;
    height: 50px;
    position: relative;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgb(0 24 128 / 10%);
    background-color: ${({ disabled }) => (disabled ? '#e6e6e6' : 'transparent')};
    border: ${({ hasError, disabled }) => `1px solid ${hasError && !disabled ? 'var(--error)' : 'transparent'}`};

    &__label {
      color: ${({ hasError }) => (hasError ? 'var(--error)' : '#343a40')};
    }
    
    &__option {
      display: flex;
      border-radius: 3px;
    }

    &__search-input {
      position: absolute;
      top: 4px;
      left: 0px;
      width: 95%;
      border: none;
      background-color: ${({ disabled }) => (disabled ? '#e6e6e6' : 'transparent')};
      outline: none;
      padding: 8px 15px;
    }

    &__arrow {
      position: absolute;
      transition: 0.4s all;
      right: 10px;
      top: 16px;
    }

    .input-without-value {
      color: #9da5b1;
    }
  }

  .options {
    position: absolute;
    background-color: white;
    top: 23px;
    width: 100%;
    max-height: 10em;
    padding: 15px 0;
    margin-top: 15px;
    border-radius: 10px;
    border: 1px solid gray;
    z-index: 2000;
    overflow-y: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  .option {
    padding: 10px 15px;
    cursor: pointer;
  }

  .option:hover {
    background-color: whitesmoke;
  }

  .flip-arrow {
    transform: rotate(180deg);
  }
`

export const WITHOUT_RESULTS = [{ id: 12, value: 'No hay resultados' }]
