import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import config from '../config';
import {
  Dashboard,
  Deposit,
  Documents,
  SideDrawer,
  TradingInfo,
  Transactions,
  TwoFactor,
  Withdraw,
} from '../screens';
import { StyleSheet } from 'react-native';
import { CustomHeader } from '../components';

const Drawer = createDrawerNavigator();

const MainDrawer = () => (
  <Drawer.Navigator
    drawerContent={props => <SideDrawer {...props} />}
    // screenOptions={{ headerShown: false }}
    backBehavior="none">
    <Drawer.Screen
      name={config.routes.DASHBOARD}
      component={Dashboard}
      options={({ navigation }) => ({
        header: () => {
          return <CustomHeader onPressLeftButton={() => navigation.openDrawer()} />;
        },
      })}
    />
    <Drawer.Screen
      name={config.routes.DEPOSIT}
      component={Deposit}
      options={({ navigation }) => ({
        header: () => {
          return <CustomHeader onPressLeftButton={() => navigation.openDrawer()} />;
        },
      })}
    />
    <Drawer.Screen
      name={config.routes.WITHDRAW}
      component={Withdraw}
      options={({ navigation }) => ({
        header: () => {
          return <CustomHeader onPressLeftButton={() => navigation.openDrawer()} />;
        },
      })}
    />
    <Drawer.Screen
      name={config.routes.TRADING_INFO}
      component={TradingInfo}
      options={({ navigation }) => ({
        header: () => {
          return <CustomHeader onPressLeftButton={() => navigation.openDrawer()} />;
        },
      })}
    />
    <Drawer.Screen
      name={config.routes.TRANSACTIONS}
      component={Transactions}
      options={({ navigation }) => ({
        header: () => {
          return <CustomHeader onPressLeftButton={() => navigation.openDrawer()} />;
        },
      })}
    />
    <Drawer.Screen
      name={config.routes.DOCUMENTS}
      component={Documents}
      options={({ navigation }) => ({
        header: () => {
          return <CustomHeader onPressLeftButton={() => navigation.openDrawer()} />;
        },
      })}
    />
    <Drawer.Screen
      name={config.routes.TWO_FACTOR}
      component={TwoFactor}
      options={({ navigation }) => ({
        header: () => {
          return <CustomHeader onPressLeftButton={() => navigation.openDrawer()} />;
        },
      })}
    />
  </Drawer.Navigator>
);

export default MainDrawer;
