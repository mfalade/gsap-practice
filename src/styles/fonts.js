import { createGlobalStyle } from 'styled-components';

import GillSans from 'assets/fonts/GillSans.ttf';
import GillSansLight from 'assets/fonts/GillSansLight.ttf';
import BerserkerRegular from 'assets/fonts/Berserker-Regular.otf';

export default createGlobalStyle`
  @font-face {
    font-family: GillSans;
    src: url('${GillSans}') format('ttl');
  }
 
  @font-face {
    font-family: GillSansLight;
    src: url('${GillSansLight}') format('ttl');
  }
  
  @font-face {
    font-family: BerserkerRegular;
    src: url('${BerserkerRegular}') format('otf');
  }
`;
