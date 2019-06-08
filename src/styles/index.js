import React from 'react';

import Fonts from './fonts';
import Resets from './resets';

const AppStyles = ({ children }) => (
  <>
    <Fonts />
    <Resets />
    {children}
  </>
);

export default AppStyles;
