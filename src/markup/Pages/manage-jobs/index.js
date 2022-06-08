import styled from 'styled-components'

export { default } from './ManageJobs'

export const Wrapper = styled.div`
  gap: 30px;
`

export const Content = styled.div`
  .table {
    &__header {
      display: flex;
      align-items: center;
      gap: 10px;
      height: 50px;
    }

    &__title {
      font-size: 16px;
      flex: 1;
    }

    &__job-type {
      min-width: 600px;
    }

    &__field-text {
      font-size: 14px;
      padding: 12px;
      vertical-align: middle;
    }

    &__card {
      &-application {
        width: 120px;
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
  }
`
