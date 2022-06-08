import styled from 'styled-components'

export { default } from './ManageJobs'

export const Wrapper = styled.div`
  gap: 30px;
`

export const Content = styled.div`
  .table {
    
    &__card {
      

     

      &-application {
        width: 174px;
        padding-left:1em;
      }

      &-icon {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #2e55fa;
        line-height: 30px;
        text-align: center;
        margin-left: 5px;
        background-color: #2e55fa;
        color:white;
      }
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
