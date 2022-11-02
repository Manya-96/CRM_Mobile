import React, { useRef, useState } from 'react';
import { StyleSheet, Text, Pressable, Image, View, FlatList, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';
import { next, previous } from '../assets/images';
import config from '../config';
import { localizedStrings } from '../localization/translation';

const AccountsContainer = ({ accounts, selectedAccount, onSelectAccount }) => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const flatListRef = useRef();

  const nextClicked = () => {
    let scrollToIndex;
    if (scrollIndex + 1 >= accounts.length - 1) {
      scrollToIndex = scrollIndex + 1;
    } else {
      scrollToIndex = scrollIndex + 2;
    }
    flatListRef.current.scrollToIndex({ index: scrollToIndex, viewPosition: 0.5 });
    setScrollIndex(scrollToIndex);
  };

  const previousClicked = () => {
    let scrollToIndex;
    if (scrollIndex - 1 === 0) {
      scrollToIndex = scrollIndex - 1;
    } else {
      scrollToIndex = scrollIndex - 2;
    }
    flatListRef.current.scrollToIndex({ index: scrollToIndex, viewPosition: 0.5 });
    setScrollIndex(scrollToIndex);
  };

  const handleScroll = event => {
    let index = 0;
    if (event.nativeEvent.contentOffset.x > 0) {
      index = Math.ceil(event.nativeEvent.contentOffset.x / (Dimensions.get('screen').width * 0.4));
    }
    setScrollIndex(index);
  };

  return (
    <View>
      <FlatList
        style={styles.container}
        onScroll={e => handleScroll(e)}
        ref={ref => (flatListRef.current = ref)}
        horizontal
        data={accounts}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.scrollContentContainer}
        renderItem={({ item, index }) => {
          return (
            <LinearGradient
              key={index.toString()}
              colors={
                item.accountNumber === selectedAccount
                  ? config.colors.selectedAccountGradient
                  : config.colors.unselectedAccountGradient
              }
              style={[
                styles.rowContainer,
                item.accountNumber === selectedAccount && styles.selelctedRowContainer,
              ]}>
              <Pressable
                onPress={() => {
                  setScrollIndex(index);
                  onSelectAccount(item.accountNumber);
                }}>
                <Text
                  style={[
                    styles.numberText,
                    item.accountNumber === selectedAccount && styles.selectedAccountNumber,
                  ]}>
                  {localizedStrings.ACCOUNT_NUMBER}:
                </Text>
                <Text
                  style={[
                    styles.numberText,
                    styles.numberTextMedium,
                    item.accountNumber === selectedAccount && styles.selectedAccountNumber,
                  ]}>
                  {item.accountNumber}
                </Text>
              </Pressable>
            </LinearGradient>
          );
        }}
      />

      <Pressable style={styles.leftButton} onPress={previousClicked} disabled={scrollIndex === 0}>
        <Image style={styles.iconImage} source={previous} resizeMode="contain" />
      </Pressable>
      <Pressable
        style={styles.rightButton}
        onPress={nextClicked}
        disabled={scrollIndex === accounts.length - 1}>
        <Image style={styles.iconImage} source={next} resizeMode="contain" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: '100%', marginTop: 16, flexDirection: 'row', paddingVertical: 8 },
  scrollContentContainer: { paddingHorizontal: 48, alignItems: 'center' },
  buttonBGGradient: {},
  rowContainer: {
    marginHorizontal: 6,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: config.colors.white,
  },
  selelctedRowContainer: { borderColor: config.colors.lightGreen },
  numberText: {
    fontFamily: 'Rubik-Regular',
    fontSize: RFValue(12),
    color: config.colors.grayTheme,
  },
  numberTextMedium: {
    fontFamily: 'Rubik-Medium',
    fontSize: RFValue(12),
    color: config.colors.grayTheme,
  },
  selectedAccountNumber: { color: config.colors.inputBG },
  leftButton: {
    position: 'absolute',
    left: 8,
    top: '40%',
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightButton: {
    position: 'absolute',
    right: 8,
    top: '40%',
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: { height: 24, width: 24 },
});

export default AccountsContainer;
