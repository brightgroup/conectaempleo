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
        left: 1em;
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
    
    &__card {
      &-application {
        width: 174px;
        padding-left: 1em;
      }

      &-icon {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid transparent;
        line-height: 30px;
        text-align: center;
        margin-left: 5px;
        background-color: #2e55fa;
        color: white;
        cursor: pointer;
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
