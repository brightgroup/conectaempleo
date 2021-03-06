import styled from 'styled-components'

export const WrapperCard = styled.div`
  width: 14em;
  height: 23em;
  border: 2px solid gray;
  border-radius: 5px;
  padding: 10px;

  .cont {
    height: 160px;
    border: 1px solid gray;
    border-radius: 5px;
    overflow: hidden;

    &__image {
      width: 100%;
      height:100%;
    }
  }

  .text {
    margin: 0px;
  }

  .title {
    color: #0097fe;
    font-size: 18px;
    margin: 0;
  }
`
