import React from 'react';
import { ThemeProvider } from 'styled-components';

import Home from 'views/Home';
import AppStyles from 'styles';
import AppTheme from 'styles/theme';

const App = () => (
  <ThemeProvider theme={AppTheme}>
    <AppStyles>
      <Home />
    </AppStyles>
  </ThemeProvider>
);

export default App;
