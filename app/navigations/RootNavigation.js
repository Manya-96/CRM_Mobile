import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { localizedStrings } from '../localization/translation';
import config from '../config';
import { Splash } from '../screens';
import AuthNavigation from './AuthNavigation';
import { useDispatch } from 'react-redux';
import { sharedState } from 'crm-ca-common';
import MainDrawer from './MainDrawer';

const RootStack = createNativeStackNavigator();

const RootNavigation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      const { isConnected, isInternetReachable } = state;
      dispatch(sharedState.UI.changeInternetConnectivityState(isConnected && isInternetReachable));
      if (isConnected === false) {
        Alert.alert('', localizedStrings.NO_INTERNET_CONNECTION);
      }
      return true;
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={config.routes.SPLASH}
        component={Splash}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name={config.routes.AUTH_NAVIGATION}
        component={AuthNavigation}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name={config.routes.MAIN_DRAWER}
        component={MainDrawer}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
