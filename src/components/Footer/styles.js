import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  height: 100px;

  ul {
    display: flex;
  }

  ul li {
    margin-right: 10px;
    font-size: ${props => props.theme.font.sm};
    line-height: 1.4;

    &:nth-child(-n + 2) {
      width: 50px;
    }
  }

  ul img {
    height: 30px;
  }

  img {
    height: 50px;
  }
`;
