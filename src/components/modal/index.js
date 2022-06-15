import styled from 'styled-components'

export * from './Modal'

export const ModalWrapper = styled.div`
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  z-index: 10000;
  background-color: #6c627480;
  display: ${({ show }) => (show ? 'flex' : 'none')};

  .modal-wrapper {
    background: #fff;
    width: 90%;
    max-width: 43.75em;
    border-radius: 0.375em;
    padding: 0 1.375em 1em 1.375em;
    overflow-y: scroll;
    transition: 0.2s position;
    position: absolute;
    animation-duration: 1.4s;
    animation-name: slidetop;
    margin: auto;
    height: 90%;
    inset: 0;

    @keyframes slidetop {
      from {
        bottom: -200%;
      }

      to {
        inset: 0;
      }
    }

    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #c2c2c2;
      border-radius: 3px;
    }
  }

  .modal--header {
    font-weight: 600;
    text-align: center;
    font-size: 1em;
    display: ${({ hideIcon }) => (hideIcon === true ? 'none' : 'flex')};
  }

  .modal--title {
    margin: 0.3125em 0 1.5625em 0;
    text-align: center;
    font-size: 1.25em;
  }

  .modal--image-wrapper {
    text-align: center;
    img {
      width: 7.8125em;
    }
  }

  .modal--close {
    position: absolute;
    right: 2em;
    top: 2em;
    cursor: pointer;
    z-index: 10;
  }

  .modal--children-container {
    p {
      text-align: center;
      font-size: 0.85em;
      color: black;
      margin: 0.85em 0;
    }

    b {
      color: black;
      font-size: 0.95em;
    }
  }

  .modal--close_mobile {
    justify-content: center;
    align-items: center;
    border: 0.1875em solid white;
    width: 2.1875em;
    border-radius: 50%;
    margin-top: 1.5625em;
    cursor: pointer;
    display: none;

    @media screen and (max-width: 720px) {
      display: flex;
    }
  }
`
