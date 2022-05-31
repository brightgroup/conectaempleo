import styled from 'styled-components'

export * from './MessageError'

export const WrapperMessageError = styled.div`
  display: flex;
  padding: 0.5em;

  .style--i {
    color: red;
    margin-right: 5px;
  }

  .style-small {
    color: red;
  }
`
