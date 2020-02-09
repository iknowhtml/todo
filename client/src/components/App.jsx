import React from 'react';
import { View } from 'react-native';
import Text from './Common/Text';
import GlobalValuesProvider from './GlobalValuesProvider';

const App = () => (
  <GlobalValuesProvider>
    <View>
      <Text>Hello World</Text>
    </View>
  </GlobalValuesProvider>
);

export default App;
