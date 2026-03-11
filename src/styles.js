import styled, { keyframes } from "styled-components";

const breathing = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`
export const Container = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
width: 2.5rem;
height: 2.5rem;

.logo {
  position: basolute;
  width: 1.5rem;
  height: 1.5rem;
  z-index: 1;
}
`

export const Background = styled.img`
  position: absolute;
  width: 900px;
  height: 600px;
  animation: ${breathing} infinte 50s;
  opacity: 1;

  &.fade-in {
    animation: ${fadeIn} 15s forwards;
  }

  &.fade-out {
    animation: ${fadeOut} 15s forwards;
  }
`

