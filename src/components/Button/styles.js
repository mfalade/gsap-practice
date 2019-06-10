import styled from 'styled-components';

import btnLeft from 'assets/images/btn-left.png';
import btnRight from 'assets/images/btn-right.png';

export const ButtonInnerContainer = styled.div`
  position: relative;
  padding: 10px 30px;
  margin: 4px 0;
  border-top: 2px solid ${props => props.theme.color.white};
  border-bottom: 2px solid ${props => props.theme.color.white};
  z-index: 1;
`;

export const Button = styled.button`
  margin-top: 40px;
  outline: none;
  background: transparent;
  border: none;
  font-size: 12px;
  letter-spacing: 0.16em;
  padding: 0 30px;
  position: relative;
  cursor: pointer;

  &:before {
    background: url(${btnLeft});
    left: 0;
    top: 0;
  }

  &:after {
    background: url(${btnRight});
    right: -10px;
    top: 0;
  }

  &:before,
  &:after {
    content: '';
    background-size: 30px;
    background-repeat: no-repeat;
    display: block;
    position: absolute;
    height: 50px;
    width: 40px;
  }

  &:hover {
    ${ButtonInnerContainer}:before {
      transform: scaleX(1);
      transition: all ${props => props.theme.transition.medium};
    }
  }

  ${ButtonInnerContainer}:before {
    content: '';
    position: absolute;
    top: 0;
    left: -14px;
    width: calc(100% + 28px);
    height: 100%;
    background: ${props => props.theme.color.red};
    opacity: 0.8;
    transform: scaleX(0);
    transition: all ${props => props.theme.transition.short};
    z-index: -1;
  }
`;

export const ButtonOuterContainer = styled.div`
  border-top: 2px solid ${props => props.theme.color.white};
  border-bottom: 2px solid ${props => props.theme.color.white};
`;
