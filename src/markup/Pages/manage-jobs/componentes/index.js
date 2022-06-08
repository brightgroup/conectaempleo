import styled from 'styled-components'
export * from './Table'

export const WrapperTable = styled.div`
  .table {
    &__header {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: #e1e7ff;
      height: 50px;

      &-type {
        font-size: 1em;
        margin: 0;
        position: relative;
        right: 80px;
      }

      &-aplication {
        font-size: 1em;
        margin: 0;
        position: relative;
        left:1em;
      }

      &-option {
        font-size: 1em;
        margin: 0;
      }

      &-check {
        position: relative;
        left: -26px;
      }
    }

    &__body {
      padding-bottom: 0.5em;
      border-bottom: 2px solid gray;
      align-items: center;

    }
    
    &__description-list {
    list-style: none;
    width: 290px;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    }
}
`
