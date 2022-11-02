import { NavigationContainer } from '@react-navigation/native';
import { sharedControls } from 'crm-ca-common';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Loader } from './app/components';
import config from './app/config';
import RootNavigation from './app/navigations/RootNavigation';

const App = () => {
  sharedControls.settings.injectConfigurationSettings({ reduxStore: config.store });
  return (
    <Provider store={config.store}>
      <PersistGate loading={null} persistor={config.persistor}>
        <NavigationContainer>
          <RootNavigation />
          <Loader />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
