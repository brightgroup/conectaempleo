import styled from 'styled-components'

export * from './Loader'

export const Wrapper = styled.div`
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff8c;
  transition: all 0.2s;
  z-index: 10001;
  .loading__spinner::before {
    animation: 1.5s linear infinite spinner;
    animation-play-state: inherit;
    border: solid 5px #cfd0d1;
    border-bottom-color: #662d91;
    border-radius: 50%;
    content: '';
    height: 40px;
    width: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    will-change: transform;
  }
  @keyframes spinner {
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }
`
