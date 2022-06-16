import styled from 'styled-components'

export { default } from './Home'

export const WrapperHome = styled.div`
  .home {
    &__image {
      height: 600px;
      width: 100%;
      background-size: cover;
      background-position: center center;
    }
    &__form {
      box-sizing: border-box;
      min-height: 200px;
      background-color: white;
      width: 80%;
      padding:15px;

      &-row {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        gap:11px;
      }

      &-cont {
        border-bottom: 3px solid var(--blue);
        width: 90%;
        box-sizing: border-box;
        margin-left: 10px;
        margin-right: 10px;

      }

      &-select {
        height: 50px;
        border: none;
        margin-left: 10px;
        outline:none;
      }

      &-button{
        background-color:var(--blue);
        border:none;
        border-radius:5px;
        padding:10px 15px;
        width:100%;
        min-width:200px;
        font-size:1em;
        color:white;
        margin-top:10px;
      }

      &-input{
        border:none;
        height:50px;
        outline:none;
      }

      &-icon{
        position:absolute;
        top:20px;
        right:10px
      }
    }
  }
`
