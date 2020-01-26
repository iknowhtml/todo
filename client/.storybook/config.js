import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import GlobalStyles from '../src/components/GlobalStyles';

addDecorator(component => (
  <>
    <GlobalStyles />
    {component()}
  </>
));
