import React from 'react';
import { ThemeProvider } from 'emotion-theming';

const theme = {
  primaryColor: '#090A0A',
  primaryBackgroundColor: '#FFF',
  secondaryColor: '#9b9b9b;',
};

const GlobalStyles = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default GlobalStyles;
