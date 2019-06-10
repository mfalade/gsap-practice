import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  height: ${props => props.theme.specs.footerHeight};
  width: 100%;
  position: absolute;
  bottom: 0;

  ul {
    display: flex;
  }
`;

export const ListItem = styled.li`
  margin-right: 10px;
  font-size: ${props => props.theme.font.sm};
  line-height: 1.4;
  visibility: hidden;

  &:nth-child(-n + 2) {
    width: 50px;
  }

  img {
    height: 30px;
  }
`;

export const LogoRating = styled.img`
  height: 50px;
  visibility: hidden;
`;
