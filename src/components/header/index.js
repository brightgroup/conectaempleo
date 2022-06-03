import styled from 'styled-components'

export * from './Header.js'

export const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 25px 0 30px;

  .ul__list {
    list-style-type: none;
  }

  .li_item {
    text-decoration: none;
    padding: 8px 10px;
    margin: 0 10px 0 10px;
    font-size: 1.3rem;
  }

  .active:hover {
    border-bottom: 3px solid #0097fe;
    color: #0097fe !important;
  }

  .button {
    background-color: #0097fe;
    padding: 10px 8px;
    margin-left: 4px;
    border-radius: 4px;
    color: white;
    &:hover {
      box-shadow: 2px 2px 4px gray;
    }
  }
`
