import styled from 'styled-components';

import { Text } from 'components/Typography';

export const NavBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4%;
  height: 80px;
`;

export const NavLink = styled(Text)`
  display: inline-block;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 16px;
  }
`;

export const Logo = styled.img`
  width: 130px;
`;
