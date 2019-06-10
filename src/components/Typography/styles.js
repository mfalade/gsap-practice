import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${props => props.theme.font.xl};
  color: ${props => props.theme.color.white};
  letter-spacing: 0.44em;
  line-height: 3.5em;
  font-family: BerserkerRegular;
`;

export const Text = styled.p`
  font-size: ${props => props.theme.font[props.size]};
  color: ${props => props.theme.color.white};
  text-transform: uppercase;
  letter-spacing: 0.16em;
  line-height: 1.7em;
`;
