import styled from 'styled-components';

import { ReactComponent as ArrowSvg } from '../Assets/img/arrow.svg';

// section CAROUSEL

export const CarouselContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1400px;
  background-color: rgba(80, 80, 80, 0.2);
  scroll-snap-type: x mandatory;
  overflow-x: hidden;
  overflow: hidden;
  overflow-y: hidden;
  position: relative;
`;

export const Card = styled.div`
  box-sizing: content-box;
  min-width: 335px;
  min-height: 430px;
  background-color: white;
  border-radius: 6px;
  margin: 10px 7.5px;
  transition: all ease-in-out 0.5s;

  ${({ current }) =>
    current ? `transform: translateX(${current * -350}px);` : ''}
`;

export const Arrow = styled(ArrowSvg)`
  width: 25px;
  height: 25px;
  position: absolute;
  bottom: calc(50% - 41px);
  cursor: pointer;
`;

export const ArrowRight = styled(Arrow)`
  right: calc(48% - 700px);

  :hover {
    transform: translateX(3px);
  }

  ${({ current, cardlength }) =>
    current === cardlength ? `display: none` : `display: block`}
`;

export const ArrowLeft = styled(Arrow)`
  transform: rotate(-180deg);
  left: calc(48% - 700px);

  :hover {
    transform: rotate(-180deg) translateX(3px);
  }

  ${({ current }) => !current && `display: none`}
`;
