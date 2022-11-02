import * as React from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { CommonActions } from '@react-navigation/native';
import { drawerCellAction, drawerFooterItems, drawerHeaderMenuItems } from './SideDrawerActions';
import config from '../../config';
import { RFValue } from 'react-native-responsive-fontsize';
import { close, settings, user } from '../../assets/images';
import { localizedStrings } from '../../localization/translation';

const SideDrawer = props => {
  const sideDrawerCells = drawerCellAction();
  const footerItems = drawerFooterItems();
  const headerMenuItems = drawerHeaderMenuItems();

  const headerMenuClicked = index => {
    if (index === 3) {
      props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: config.routes.AUTH_NAVIGATION,
            },
          ],
        })
      );
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.closeButton} onPress={() => props.navigation.closeDrawer()}>
          <Image style={styles.iconImage} source={close} resizeMode="cover" />
        </Pressable>
        <View style={styles.nameImageView}>
          <View style={styles.nameView}>
            <Text style={styles.helloText}>{localizedStrings.HELLO}</Text>
            <Text style={[styles.helloText, styles.nameText]}>{localizedStrings.HELLO}</Text>
          </View>
          <Pressable style={styles.imageBGView}>
            <Image style={styles.userImage} source={user} resizeMode="cover" />
          </Pressable>
        </View>
        <View style={styles.headerButtonsBGView}>
          {headerMenuItems.map((cell, index) => {
            return (
              <Pressable
                key={index.toString()}
                style={styles.menuButton}
                onPress={() => {
                  headerMenuClicked(index);
                }}>
                <View style={styles.rowDetails}>
                  <Image style={styles.menuIcon} source={cell.leftImage} resizeMode="contain" />
                </View>
              </Pressable>
            );
          })}
        </View>
      </View>
      <DrawerContentScrollView
        {...props}
        automaticallyAdjustContentInsets={false}
        showsVerticalScrollIndicator={false}>
        {sideDrawerCells.map((cell, index) => {
          return (
            <Pressable
              key={index.toString()}
              style={[
                styles.rowContainer,
                index === props.state.index && styles.selectedRowContainer,
              ]}
              onPress={() => props.navigation.navigate(cell.routeName)}>
              <View style={styles.rowDetails}>
                <Image style={styles.iconImage} source={cell.leftImage} resizeMode="contain" />
                <Text style={styles.rowText}>{cell.cellText}</Text>
              </View>
            </Pressable>
          );
        })}
      </DrawerContentScrollView>
      {footerItems.map((cell, index) => {
        return (
          <Pressable
            key={index.toString()}
            style={[styles.rowContainer, styles.footerItem]}
            onPress={() => props.navigation.navigate(config.routes.LOGIN)}>
            <View style={styles.rowDetails}>
              <Image style={styles.footerIcon} source={cell.leftImage} resizeMode="cover" />
              <Text style={styles.rowText}>{cell.cellText}</Text>
            </View>
          </Pressable>
        );
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: config.colors.darkGray },
  rowContainer: {
    height: 44,
    width: '100%',
    paddingLeft: 24,
    justifyContent: 'center',
  },
  selectedRowContainer: { backgroundColor: config.colors.inputBG },
  rowDetails: { flexDirection: 'row', height: 32, width: '100%', alignItems: 'center' },
  closeButton: {
    marginLeft: -10,
    width: 40,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: { height: 20, width: 20 },
  footerIcon: { height: 39, width: 39 },
  rowText: { marginLeft: 12, fontSize: RFValue(13), fontFamily: 'Rubik-Regular', color: 'white' },
  header: { paddingHorizontal: 24 },
  nameImageView: { flexDirection: 'row', width: '100%', alignItems: 'center' },
  nameView: { flex: 1 },
  helloText: {
    textAlign: 'right',
    width: '100%',
    fontSize: RFValue(14),
    fontFamily: 'Rubik-Regular',
    color: config.colors.lightGrayTheme,
  },
  nameText: { fontFamily: 'Rubik-Bold' },
  imageBGView: {
    marginLeft: 12,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: config.colors.white,
    borderWidth: 1,
  },
  footerItem: { height: 52 },
  headerButtonsBGView: {
    alignSelf: 'center',
    marginTop: 12,
    flexDirection: 'row',
  },
  menuButton: {
    height: 46,
    width: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: { height: 36, width: 36 },
});

export default SideDrawer;
