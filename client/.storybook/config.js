import { addDecorator } from '@storybook/react';
import React from 'react';
import GlobalValuesProvider from '../src/components/GlobalValuesProvider';

addDecorator(component => (
  <GlobalValuesProvider>{component()}</GlobalValuesProvider>
));
