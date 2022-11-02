import React from 'react';
import { StyleSheet, Pressable, Image, View, SafeAreaView } from 'react-native';
import { logo, menu } from '../assets/images';
import config from '../config';

const CustomHeader = ({ onPressLeftButton }) => {
  return (
    <SafeAreaView style={styles.layoout}>
      <View style={styles.container}>
        <Pressable style={styles.leftButton} onPress={onPressLeftButton}>
          <Image style={styles.menuImage} source={menu} resizeMode="contain" />
        </Pressable>
        <View style={styles.emptyView} />
        <Image style={styles.logoImage} source={logo} resizeMode="contain" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layoout: { backgroundColor: config.colors.screenBG },
  container: {
    backgroundColor: config.colors.screenBG,
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignItems: 'center',
    paddingVertical: 8,
  },
  leftButton: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuImage: { height: 18, width: 28 },
  logoImage: { height: 26, width: 112 },
  emptyView: { flex: 1 },
});

export default CustomHeader;
