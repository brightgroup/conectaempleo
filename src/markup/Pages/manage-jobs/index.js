import styled from 'styled-components'

export { default } from './ManageJobs'

export const Wrapper = styled.div`
  gap: 1.875rem;

  .manage-jobs {
    &__table {
      width: 100%;
      overflow-x: scroll;

      ::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .offer-form {
    &__group {
      height: auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1.5em;
    }

    &__title {
      font-size: 24px;
    }

    &__button {
      padding: 6px 22px;
      background-color: var(--blue);
      border: none;
      border-radius: 5px;
      color: white;
      font-weight: 600;
      cursor: pointer;
      outline: none;

      &:hover {
        color: black;
        box-shadow: 2px 2px 5px var(--ligth-gray), -2px -2px 5px var(--ligth-gray);
      }
    }
  }

  .reading-modal {
    &__title {
      color: var(--blue) !important;
    }

    &__label {
      font-size: 16px !important;
      font-weight: 600 !important;
    }

    &__description {
      font-size: 16px !important;
      text-align: start !important;
    }
  }
`

export const Content = styled.div`
  .table {
    &__filter {
      width: 160px !important;
      max-width: 160px !important ;
      margin: 0 !important;
    }

    &__organize {
      border: 2px solid var(--ligth-gray);
      border-radius: 5px;
      padding: 5px;
      outline: none;
      font-size: 16px;
      cursor: pointer;

      &:hover {
        box-shadow: 2px 2px 5px var(--ligth-gray), -2px -2px 5px var(--ligth-gray);
      }
    }

    &__search-label {
      border: none;
    }

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
export const modalInitialState = { update: false, read: false }

export const modalName = { update: 'update', read: 'read' }
