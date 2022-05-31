import styled from 'styled-components'

export * from './Input'

export const WrapperInputLabel = styled.div`
  width: 100%;

  .input--style {
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 8px 15px;
    box-shadow: 0 0 10px 0 rgb(0 24 128 / 10%);
    height: 50px;
  }
`

export const WrapperInputTextarea = styled.div`
  .input--style {
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 8px 15px;
    box-shadow: 0 0 10px 0 rgb(0 24 128 / 10%);
    width: 100%;
    margin: 0;
  }
`

export const WrapperInputDate = styled.div`
  width: 100%;

  .input--style {
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 8px 15px;
    box-shadow: 0 0 10px 0 rgb(0 24 128 / 10%);
    width: 100%;
    height: 50px;
  }
`
