import React from 'react';
import { View } from 'react-native';
import Text from './Common/Text';
import { ThemeProvider } from 'emotion-theming';
import globalValues from '../globalValues';

const App = () => (
  <ThemeProvider theme={globalValues}>
    <View>
      <Text>Hello World</Text>
    </View>
  </ThemeProvider>
);

export default App;
