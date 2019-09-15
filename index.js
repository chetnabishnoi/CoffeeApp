import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import AppNavigator from './src/App';
import configureStore from './src/storeconfig';

/**
 * Register application with store provider
 */
const registerApp = () => {
  return (
    <Provider store={configureStore()}>
      <AppNavigator />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => registerApp);
