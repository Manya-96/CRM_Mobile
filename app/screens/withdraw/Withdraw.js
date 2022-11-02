import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';
import config from '../../config';
import { localizedStrings } from '../../localization/translation';
import { AppButton, AppTextInput, AppDropDown, AppFlatList } from '../../components';
import { deposit, filter, refresh } from '../../assets/images';

const screenWidth = Dimensions.get('screen').width;

const allAccountNumbers = ['1062542', '67518901', '12345678', '98765432'];

const historyTitles = [
  localizedStrings.TRADING_ACCOUNT,
  localizedStrings.REQUESTED_AMT,
  localizedStrings.APPROVED_AMT,
  localizedStrings.DATE,
];

const acHistory = [
  {
    trading_account: '1639889 MT4',
    requested_amount: '$200.00',
    approved_amount: '$200.00',
    date: '12 Sep 2022',
  },
  {
    trading_account: '96126907 MT4',
    requested_amount: '$150.50',
    approved_amount: '$150.50',
    date: '11 Sep 2022',
  },
  {
    trading_account: '1639889 MT4',
    requested_amount: '$200.00',
    approved_amount: '$200.00',
    date: '10 Sep 2022',
  },
  {
    trading_account: '96126907 MT4',
    requested_amount: '$107.00',
    approved_amount: '$107.00',
    date: '10 Sep 2022',
  },
];

const Withdraw = ({ navigation }) => {
  const [accountNo, setAccountNo] = useState(null);
  const [withdrawAmt, setWithdrawAmt] = useState('');
  const [address, setAddress] = useState('');

  const handleAddFunds = () => {
    console.log('handling btn');
  };

  const itemSelected = item => {
    setAccountNo(item);
  };

  const renderItem = ({ item, index }) => {
    return (
      <>
        <View style={styles.rowContainer}>
          <Text style={styles.rowText}>{item.trading_account}</Text>
          <Text style={styles.rowText}>{item.approved_amount}</Text>
          <Text style={styles.rowText}>{item.requested_amount}</Text>
          <Text style={styles.rowText}>{item.date}</Text>
        </View>
        <View style={styles.divider} />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrolling}>
        <View style={styles.container}>
          <Text style={styles.title}>{localizedStrings.WITHDRAW_FUNDS}</Text>
          <View style={styles.buttonsBGView}>
            <AppButton
              onPress={() => {
                navigation.navigate(config.routes.DEPOSIT);
              }}
              leftImage={deposit}
              text={localizedStrings.ADD_FUNDS}
            />
          </View>
          <Text style={styles.note}>{localizedStrings.NOTE_CRM}</Text>

          <LinearGradient
            colors={config.colors.unselectedAccountGradient}
            style={styles.detailsContainer}>
            <View style={{ paddingHorizontal: 16 }}>
              <Text style={styles.available}>{localizedStrings.AVAILABLE_FUNDS}</Text>
              <Text style={styles.amount}>$288.43</Text>

              <View style={styles.input}>
                <Text style={styles.acNo}>
                  {localizedStrings.ACCOUNT_NUMBER}
                  <Text style={styles.asterisk}>*</Text>
                </Text>

                <AppDropDown
                  items={allAccountNumbers}
                  containerStyle={styles.dropdownContainer}
                  title={localizedStrings.SELECT}
                  dropdownWidthStyle={styles.dropdown}
                  itemSelected={itemSelected}
                  selectedItem={accountNo}
                />
              </View>

              <View style={[styles.input]}>
                <Text style={styles.acNo}>
                  {localizedStrings.WITHDRAW_AMOUNT}
                  <Text style={styles.asterisk}>*</Text>
                </Text>

                <AppTextInput
                  placeholder={localizedStrings.INITIAL_AMOUNT}
                  containerStyle={styles.inputContainer}
                  placeholderTextColor={config.colors.grayTheme}
                  viewStyle={styles.viewStyling}
                  textInputStyle={styles.inputText}
                  onChangeText={text => {
                    setWithdrawAmt(text);
                  }}
                />
              </View>

              <View style={[styles.input]}>
                <Text style={styles.acNo}>
                  {localizedStrings.ADDRESS}
                  <Text style={styles.asterisk}>*</Text>
                </Text>

                <AppTextInput
                  viewStyle={styles.description}
                  containerStyle={styles.inputContainer}
                  textInputStyle={[styles.inputContent, styles.inputText]}
                  multiline={true}
                  textAlignVertical={'top'}
                  // editable={address.length < 150 ? true : false}
                  onChangeText={text => {
                    setAddress(text);
                  }}
                />
              </View>
              <Text style={styles.addressLen} numberOfLines={2}>
                {address.length < 150 ? address?.length : 150} /150
              </Text>

              <AppButton
                onPress={handleAddFunds}
                text={localizedStrings.SUBMIT_REQUEST}
                textStyle={styles.btnText}
                buttonStyle={styles.submitBtn}
                gradientColor={config.colors.appTheme3Gradient}
              />

              <View style={styles.row}>
                <Text style={styles.withdrawal}>{localizedStrings.MY_WITHDRAWL_REQUEST}</Text>

                <Pressable style={styles.refreshButton}>
                  <Image source={refresh} style={styles.refresh} resizeMode="contain" />
                </Pressable>
                <Pressable style={styles.refreshButton}>
                  <Image source={filter} style={styles.filter} resizeMode="contain" />
                </Pressable>
              </View>
              <View style={styles.extraSpace} />
            </View>
            <AppFlatList items={acHistory} headerItems={historyTitles} renderItem={renderItem} />
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    width: 160,
    height: 33,
  },
  dropdown: { width: 160, height: 90 },
  extraSpace: { height: 20 },
  refresh: {
    height: 24,
    width: 24,
  },
  refreshButton: {
    height: 24,
    width: 24,
    marginLeft: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: config.colors.white,
  },
  leftSpacing: {
    marginHorizontal: 10,
  },
  filter: {
    height: 10,
    width: 11,
    alignSelf: 'center',
  },
  withdrawal: {
    fontSize: RFValue(15),
    fontFamily: 'Rubik-Medium',
    color: config.colors.inputBG,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtn: {
    width: 117,
    alignSelf: 'flex-end',
    marginRight: 40,
    marginTop: 15,
    backgroundColor: config.colors.seaGreen,
  },
  inputContent: {
    height: 70,
  },
  inputText: {
    color: config.colors.darkGray,
    marginHorizontal: 2,
  },
  buttonsBGView: { flexDirection: 'row', marginBottom: 25, width: '100%', marginHorizontal: 16 },
  addressLen: {
    color: config.colors.grayTheme,
    fontSize: 9,
    fontFamily: 'Rubik-SemiBold',
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  description: {
    height: 70,
    marginHorizontal: 0,
    marginTop: 0,
    marginBottom: 0,
    width: 160,
    backgroundColor: config.colors.screenBG,
    borderColor: config.colors.white,
    borderWidth: 1,
  },
  viewStyling: {
    marginHorizontal: 0,
    marginTop: 0,
    marginBottom: 0,
    width: 160,
    height: 33,
    backgroundColor: config.colors.screenBG,
    borderColor: config.colors.white,
  },
  inputContainer: {
    marginHorizontal: 0,
  },
  asterisk: {
    fontSize: RFValue(11),
    color: config.colors.red,
  },
  input: {
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  acNo: {
    fontSize: RFValue(11),
    color: config.colors.midGray,
  },
  amount: {
    fontFamily: 'Rubik-Bold',
    fontSize: RFValue(24),
    color: config.colors.appTheme,
    marginTop: 4,
  },
  available: {
    color: config.colors.midGray,
    fontSize: RFValue(12),
    fontFamily: 'Rubik-SemiBold',
  },
  detailsContainer: {
    margin: 16,
    paddingVertical: 16,
    borderRadius: 10,
    borderColor: config.colors.white,
    borderWidth: 1,
  },
  note: {
    fontSize: RFValue(12),
    fontFamily: 'Rubik-Regular',
    marginHorizontal: 18,
    paddingVertical: 16,
    color: config.colors.midGray,
  },
  btnStyle: {
    width: 110,
    marginLeft: 18,
  },
  btnText: {
    fontFamily: 'Rubik-Medium',
    fontSize: RFValue(11),
    paddingHorizontal: 5,
  },
  img: {
    height: 16,
    width: 16,
  },
  scrolling: {
    flex: 1,
  },
  title: {
    marginTop: '4%',
    fontSize: RFValue(18),
    fontFamily: 'Rubik-Bold',
    color: config.colors.inputBG,
    marginLeft: 18,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: config.colors.screenBG,
  },
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
});

export default Withdraw;
