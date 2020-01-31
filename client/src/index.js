import React from 'react';
import ReactDOM from 'react-dom';
import { AppRegistry } from 'react-native';

import 'typeface-raleway';
import './global.css';

import App from './components/App';

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('app'),
});
