import { addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import globalValues from '../src/globalValues';

addDecorator(component => (
  <ThemeProvider theme={globalValues}>{component()}</ThemeProvider>
));
