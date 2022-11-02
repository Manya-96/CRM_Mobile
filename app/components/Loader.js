import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import config from '../config';
import { sharedState } from 'crm-ca-common';

/**
 * This component is for custom loader. Whenever loading state changed in redux
 * it will show/hide loader
 */
const Loader = () => {
  const isLoading = useSelector(sharedState.UI.selectLoader);

  if (!isLoading) {
    return null;
  }

  return (
    <View style={styles.mainBackViewStyle}>
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color={config.colors.appTheme} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBackViewStyle: {
    backgroundColor: config.colors.blackColorWithAlpha,
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderStyle: {
    backgroundColor: config.colors.loaderBackSquareView,
    maxWidth: '80%',
    zIndex: 5,
    borderRadius: 16,
    justifyContent: 'space-around',
    padding: 20,
  },
});

export default Loader;
