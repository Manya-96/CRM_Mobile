import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';
import config from '../../config';
import { AccountsContainer, AppButton, AppFlatList } from '../../components';
import { localizedStrings } from '../../localization/translation';
import { deposit, refresh } from '../../assets/images';

const screenWidth = Dimensions.get('screen').width;

const allAccounts = [
  { accountNumber: '1062542' },
  { accountNumber: '67518901' },
  { accountNumber: '12345678' },
  { accountNumber: '98765432' },
];

const info = [
  {
    accountId: '1062542',
    orderId: '123456',
    symbol: '3453456345',
    openPrice: '178.50',
    closePrice: '180.5',
    profit: '24',
    volume: '20',
    actionType: 'CLOSED',
    openTime: '2022-03-22 11:42:07 UTC',
    closeTime: '2022-03-22 11:42:07 UTC',
    command: 'BUY',
    sl: '$0.00',
    tp: '$0.00',
    creationTime: '2022-03-22 11:42:07 UTC',
    lastUpdated: '2022-03-22 11:42:07 UTC',
    leverage: '400',
  },
];

const headerItems = [
  localizedStrings.ACCOUNT_ID,
  localizedStrings.ORDER_ID,
  localizedStrings.SYMBOL,
  localizedStrings.OPEN_PRICE,
  localizedStrings.CLOSE_PRICE,
  localizedStrings.PROFIT,
  localizedStrings.VOLUME,
  localizedStrings.ACTION_TYPE,
  localizedStrings.OPEN_TIME,
  localizedStrings.CLOSE_TIME,
  localizedStrings.COMMAND,
  localizedStrings.SL,
  localizedStrings.TP,
  localizedStrings.CREATION_TIME,
  localizedStrings.LAST_UPDATED_ON,
  localizedStrings.LEVERAGE,
];

const TradingInfo = ({ navigation }) => {
  const [selectedAccount, setSelectedAccount] = useState(allAccounts[0].accountNumber);

  const renderItem = ({ item, index }) => {
    return (
      <>
        <View style={styles.rowContainer}>
          <Text style={styles.rowText}>{item.accountId}</Text>
          <Text style={styles.rowText}>{item.orderId}</Text>
          <Text style={styles.rowText}>{item.symbol}</Text>
          <Text style={styles.rowText}>{item.openPrice}</Text>
          <Text style={styles.rowText}>{item.closePrice}</Text>
          <Text style={styles.rowText}>{item.profit}</Text>
          <Text style={styles.rowText}>{item.volume}</Text>
          <Text style={styles.rowText}>{item.actionType}</Text>
          <Text style={styles.rowText}>{item.openTime}</Text>
          <Text style={styles.rowText}>{item.closeTime}</Text>
          <Text style={styles.rowText}>{item.command}</Text>
          <Text style={styles.rowText}>{item.sl}</Text>
          <Text style={styles.rowText}>{item.tp}</Text>
          <Text style={styles.rowText}>{item.creationTime}</Text>
          <Text style={styles.rowText}>{item.lastUpdated}</Text>
          <Text style={styles.rowText}>{item.leverage}</Text>
        </View>
        <View style={styles.divider} />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{localizedStrings.TRADING_INFORMATION}</Text>
        <AccountsContainer
          accounts={allAccounts}
          selectedAccount={selectedAccount}
          onSelectAccount={account => setSelectedAccount(account)}
        />
        <LinearGradient
          colors={config.colors.unselectedAccountGradient}
          style={styles.detailsContainer}>
          <View style={styles.buttonsBGView}>
            <AppButton
              onPress={() => {
                navigation.navigate(config.routes.DEPOSIT);
              }}
              leftImage={deposit}
              text={localizedStrings.ADD_FUNDS}
            />
          </View>
          <View style={styles.accountNumberInfoView}>
            <Text style={styles.accountNumberText}>{localizedStrings.ACCOUNT_NUMBER}: </Text>
            <Text style={styles.accountNumber}>{selectedAccount}</Text>
            <Pressable>
              <Image style={styles.refreshIcon} source={refresh} />
            </Pressable>
          </View>
          <View style={styles.extraSpace} />
          <AppFlatList items={info} headerItems={headerItems} renderItem={renderItem} />
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: '4%',
    fontSize: RFValue(18),
    fontFamily: 'Rubik-Bold',
    color: config.colors.inputBG,
    marginLeft: 18,
  },
  container: {
    flex: 1,
    backgroundColor: config.colors.screenBG,
  },
  detailsContainer: {
    margin: 16,
    paddingTop: 16,
    borderRadius: 10,
    borderColor: config.colors.white,
    borderWidth: 1,
  },
  buttonsBGView: { flexDirection: 'row', marginBottom: 25, width: '100%', marginHorizontal: 16 },
  accountNumberInfoView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  accountNumberText: {
    fontFamily: 'Rubik-Medium',
    fontSize: RFValue(15),
    color: config.colors.inputBG,
  },
  accountNumber: {
    fontFamily: 'Rubik-Medium',
    fontSize: RFValue(15),
    color: config.colors.inputBG,
    flex: 1,
  },
  refreshIcon: { height: 24, width: 24 },
  divider: { height: 1, width: '100%', backgroundColor: config.colors.divider },
  extraSpace: { height: 20 },
  rowContainer: { flexDirection: 'row' },
  rowText: {
    fontSize: RFValue(12),
    alignSelf: 'center',
    color: config.colors.midGray,
    fontFamily: 'Rubik-Regular',
    width: (screenWidth - 48) / 4,
    marginVertical: 6,
    paddingRight: 4,
  },
  rowTextMedium: { fontFamily: 'Rubik-Medium' },
});

export default TradingInfo;
