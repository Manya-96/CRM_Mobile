import React from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import config from '../../config';
import { localizedStrings } from '../../localization/translation';

const screenWidth = Dimensions.get('screen').width;

const AccountTransaction = ({ item, index }) => {
  const { Status, Amount, Trading_Ac, Date } = item;

  return (
    <>
      <View style={styles.flatlistView}>
        <Text
          style={[
            styles.titless,
            {
              color:
                Status === localizedStrings.APPROVED
                  ? config.colors.appThemeGreen
                  : config.colors.red,
            },
          ]}>
          {Status}
        </Text>
        <Text style={[styles.titless, styles.textColor]}>{Amount}</Text>
        <Text style={[styles.titless, styles.textColor]}>{Date}</Text>
        <Text style={[styles.titless, styles.textColor]}>{Trading_Ac}</Text>
      </View>
      <View style={styles.divider} />
    </>
  );
};

const styles = StyleSheet.create({
  textColor: {
    color: config.colors.midGray,
  },

  divider: {
    height: 1,
    backgroundColor: config.colors.lightGrey,
  },
  titless: {
    fontSize: 12,
    alignSelf: 'center',
    fontFamily: 'Rubik-Regular',
    width: (screenWidth - 48) / 4,
    marginVertical: 6,
    paddingRight: 4,
  },
  flatlistView: {
    flexDirection: 'row',
    paddingVertical: 3,
  },
  subTitles: {
    flex: 1,
    height: 30,
    flexDirection: 'row',
  },
});

export default AccountTransaction;
