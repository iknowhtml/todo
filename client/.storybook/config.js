import { addDecorator } from '@storybook/react';
import React from 'react';
import GlobalStyles from '../src/components/globalStyles';

addDecorator(component => <GlobalStyles>{component()}</GlobalStyles>);
