import styled from 'styled-components';

export const NavBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4%;
  height: ${props => props.theme.specs.navbarHeight};
`;

export const NavLink = styled.a`
  display: inline-block;
  cursor: pointer;
  font-size: ${props => props.theme.font.md};
  letter-spacing: 0.16em;
  line-height: 1.7em;
  visibility: hidden;

  &:not(:first-child) {
    margin-left: 16px;
  }
`;

export const Logo = styled.img`
  width: 130px;
  visibility: hidden;
`;
