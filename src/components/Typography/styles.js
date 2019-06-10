import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${props => props.theme.font.xl};
  letter-spacing: 0.44em;
  line-height: 3.5em;
  font-family: BerserkerRegular;
`;

export const Text = styled.p`
  font-size: ${props => props.theme.font[props.size]};
  letter-spacing: 0.16em;
  line-height: 1.7em;
`;
