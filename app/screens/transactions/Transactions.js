import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';
import config from '../../config';
import { AppButton, AppDropDown, AppDatePicker, AppFlatList } from '../../components';
import { localizedStrings } from '../../localization/translation';
import { deposit, refresh } from '../../assets/images';
import { downArrowIcon } from '../../utils/icon';
import moment from 'moment';
const screenWidth = Dimensions.get('screen').width;

const allAccountNumbers = ['1062542', '67518901', '12345678', '98765432'];

const headerItems = [
  localizedStrings.TRADING_ACCOUNT,
  localizedStrings.TYPE,
  localizedStrings.AMOUNT,
  localizedStrings.STATUS,
  localizedStrings.DATE,
  localizedStrings.COMMENT,
];

const info = [
  {
    tradingAccount: '1062542',
    type: 'DEPOSIT',
    amount: '$750.00',
    status: 'APPROVED',
    date: '2022-10-01',
    comment: 'XMR DEPOSIT',
  },
  {
    tradingAccount: '6751801',
    type: 'DEPOSIT',
    amount: '$50.00',
    status: 'APPROVED',
    date: '2022-06-23',
    comment: 'ETH DEPOSIT',
  },
  {
    tradingAccount: '1234578',
    type: 'DEPOSIT',
    amount: '$250.00',
    status: 'APPROVED',
    date: '2022-07-24',
    comment: 'XMR DEPOSIT',
  },
  {
    tradingAccount: '1234578',
    type: 'DEPOSIT',
    amount: '$250.00',
    status: 'APPROVED',
    date: '2022-07-24',
    comment: 'XMR DEPOSIT',
  },
  {
    tradingAccount: '1234578',
    type: 'DEPOSIT',
    amount: '$250.00',
    status: 'APPROVED',
    date: '2022-07-24',
    comment: 'XMR DEPOSIT',
  },
  {
    tradingAccount: '9876542',
    type: 'DEPOSIT',
    amount: '$140.00',
    status: 'APPROVED',
    date: '2022-08-23',
    comment: 'BTC DEPOSIT',
  },
  {
    tradingAccount: '1234578',
    type: 'DEPOSIT',
    amount: '$250.00',
    status: 'APPROVED',
    date: '2022-07-24',
    comment: 'XMR DEPOSIT',
  },
  {
    tradingAccount: '9876542',
    type: 'DEPOSIT',
    amount: '$140.00',
    status: 'APPROVED',
    date: '2022-08-23',
    comment: 'BTC DEPOSIT',
  },
  {
    tradingAccount: '1234578',
    type: 'DEPOSIT',
    amount: '$250.00',
    status: 'APPROVED',
    date: '2022-07-24',
    comment: 'XMR DEPOSIT',
  },
  {
    tradingAccount: '9876542',
    type: 'DEPOSIT',
    amount: '$140.00',
    status: 'APPROVED',
    date: '2022-08-23',
    comment: 'BTC DEPOSIT',
  },
];

const Transactions = ({ navigation }) => {
  const [selectedAccountNo, setSelectedAccountNo] = useState(null);
  const [showFromDate, setShowFromDate] = useState(false);
  const [showToDate, setShowToDate] = useState(false);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const renderItem = ({ item, index }) => {
    return (
      <>
        <View style={styles.rowContainer}>
          <Text style={styles.rowText}>{item.tradingAccount}</Text>
          <Text style={styles.rowText}>{item.type}</Text>
          <Text style={styles.rowText}>{item.amount}</Text>
          <Text style={styles.rowText}>{item.status}</Text>
          <Text style={styles.rowText}>{item.date}</Text>
          <Text style={styles.rowText}>{item.comment}</Text>
        </View>
        <View style={styles.divider} />
      </>
    );
  };

  const pickerClicked = () => {
    setShowFromDate(false);
  };

  const fromDateSelected = date => {
    setFromDate(date);
  };

  const toDateSelected = date => {
    setToDate(date);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{localizedStrings.TRANSACTION_HISTORY}</Text>
        <View style={styles.buttonsBGView}>
          <AppButton
            onPress={() => {
              navigation.navigate(config.routes.DEPOSIT);
            }}
            leftImage={deposit}
            text={localizedStrings.ADD_FUNDS}
          />
          <Pressable style={styles.refreshButton}>
            <Image style={styles.refreshIcon} source={refresh} />
          </Pressable>
        </View>
        <LinearGradient
          colors={config.colors.unselectedAccountGradient}
          style={styles.detailsContainer}>
          <View style={styles.dropdownBGView}>
            <Text style={styles.accountText}>{localizedStrings.ACCOUNT_NUMBER}:</Text>
            <AppDropDown
              items={allAccountNumbers}
              containerStyle={styles.dropdownContainer}
              title={localizedStrings.SELECT}
              dropdownWidthStyle={styles.dropdown}
              itemSelected={item => setSelectedAccountNo(item)}
              selectedItem={selectedAccountNo}
            />
          </View>
          <View style={styles.dropdownBGView}>
            <Text style={styles.accountText}>{localizedStrings.TRANSACTION_STATUS}:</Text>
            <AppDropDown
              items={[]}
              containerStyle={styles.dropdownContainer}
              title={localizedStrings.SELECT}
              dropdownWidthStyle={styles.dropdown}
            />
          </View>
          <View style={styles.dropdownBGView}>
            <Text style={styles.accountText}>{localizedStrings.TYPE}:</Text>
            <AppDropDown
              items={[]}
              containerStyle={styles.dropdownContainer}
              title={localizedStrings.SELECT}
              dropdownWidthStyle={styles.dropdown}
            />
          </View>
          <View style={styles.dropdownBGView}>
            <Text style={styles.accountText}>{localizedStrings.FROM_TO_DATE}:</Text>
            <View style={styles.timeHead}>
              <AppDatePicker
                currentDate={fromDate}
                mode="date"
                dateSelected={fromDateSelected}
                placeholderText={localizedStrings.FROM}
              />
              <AppDatePicker
                currentDate={toDate}
                mode="date"
                dateSelected={toDateSelected}
                placeholderText={localizedStrings.TO}
              />
            </View>
          </View>
          <View style={styles.extraSpace} />
          <AppFlatList items={info} headerItems={headerItems} renderItem={renderItem} />
        </LinearGradient>

        <View style={styles.bottom}>
          <Text style={styles.records}>
            {localizedStrings.TOTAL_RECORDS} {localizedStrings.TOTAL_PAGE}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  filled: {
    width: '40%',
    backgroundColor: config.colors.grayTheme,
    height: 6,
    borderRadius: 5,
  },
  empty: {
    borderColor: config.colors.divider,
    borderWidth: 1,
    width: '90%',
    height: 6,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: config.colors.divider,
  },
  records: {
    marginHorizontal: 15,
    fontFamily: 'Rubik-Regular',
    color: config.colors.lightGrey,
    fontSize: 11,
  },
  bottom: {
    height: 30,
    justifyContent: 'center',
  },
  icon: { marginHorizontal: 5 },
  from: {
    alignSelf: 'center',
    fontFamily: 'Rubik-Regular',
    color: config.colors.grayTheme,
    marginHorizontal: 7,
  },
  timeHead: {
    flexDirection: 'row',
  },
  dateDropDown: {
    width: 77,
    height: 30,
    borderRadius: 5,
    backgroundColor: config.colors.screenBG,
    borderColor: config.colors.white,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
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
    flex: 1,
    margin: 16,
    paddingVertical: 16,
    borderRadius: 10,
    borderColor: config.colors.white,
    borderWidth: 1,
  },
  buttonsBGView: {
    flexDirection: 'row',
    marginBottom: 25,
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 18,
  },
  refreshButton: {
    marginLeft: 24,
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
    flex: 1,
    marginVertical: 6,
    width: (screenWidth - 48) / 4,
  },
  rowTextMedium: { fontFamily: 'Rubik-Medium' },
  dropdownBGView: {
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  accountText: {
    fontSize: RFValue(11),
    color: config.colors.midGray,
  },
  dropdownContainer: { width: 160, height: 33 },
  dropdown: { width: 160, borderColor: 'orange', borderWidth: 1 },
});

export default Transactions;
