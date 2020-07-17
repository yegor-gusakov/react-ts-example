import styled, { keyframes } from 'styled-components';

export const Content = styled.div`
  width: 154px;
  height: 154px;
  margin: auto;
  position: relative;
  display: block;
  overflow: hidden;
  background: transparent;
`;

const spinnerAnimation = keyframes`
   {
      0% {
        top: 73.92px;
        left: 73.92px;
        width: 0;
        height: 0;
        opacity: 1;
      }
      100% {
        top: 13.86px;
        left: 13.86px;
        width: 120.12px;
        height: 120.12px;
        opacity: 0;
      }
    }
`;

export const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
  background: transparent !important;

  & div {
    position: absolute;
    border-width: 3.08px;
    border-style: solid;
    box-sizing: content-box;
    opacity: 1;
    border-radius: 50%;
    animation: ${spinnerAnimation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  & div:nth-child(1) {
    border-color: #e90c59;
  }

  & div:nth-child(2) {
    border-color: #086ad8;
    animation-delay: -0.5s;
  }
`;
