import styled from 'styled-components'

export { default } from './Companies'

export const Wrapper = styled.div`
  .container {
    &__card {
      width: 90%;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 0 auto;
      justify-content: center;
    }

    &__search {
      width: 50%;
      margin: 0px auto;
      margin-bottom: 20px;
    }
  }
`
