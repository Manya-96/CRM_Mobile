import React, { useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { StackActions } from '@react-navigation/native';
import config from '../../config';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace(config.routes.AUTH_NAVIGATION));
    }, 100);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to app</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;
