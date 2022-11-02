import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import config from '../config';
import { CountryList, ForgotPassword, Login, Register } from '../screens';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name={config.routes.LOGIN} component={Login} options={{ headerShown: false }} />
    <Stack.Screen
      name={config.routes.REGISTER}
      component={Register}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={config.routes.FORGOT_PASSWORD}
      component={ForgotPassword}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={config.routes.COUNTRY_LIST}
      component={CountryList}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigation;
