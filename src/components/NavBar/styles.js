import styled from 'styled-components';

export const NavBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4%;
  height: 80px;
`;

export const NavLink = styled.a`
  display: inline-block;
  cursor: pointer;
  font-size: ${props => props.theme.font.md};
  letter-spacing: 0.16em;
  line-height: 1.7em;

  &:not(:first-child) {
    margin-left: 16px;
  }
`;

export const Logo = styled.img`
  width: 130px;
`;
