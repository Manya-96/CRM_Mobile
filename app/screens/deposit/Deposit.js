import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  Dimensions,
  Platform,
  ScrollView,
  Pressable,
} from 'react-native';
import config from '../../config';
import { localizedStrings } from '../../localization/translation';
import { RFValue } from 'react-native-responsive-fontsize';
import { AppDropDown, AppButton, AppTextInput, AppFlatList } from '../../components';
import { visa, maestro, masterCard, ssl, pci, refresh } from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
const screenWidth = Dimensions.get('screen').width;

const allAccountNumbers = ['1062542', '67518901', '12345678', '98765432'];
const data = [
  {
    Status: 'Approved',
    Amount: '$200.00',
    Date: '12 Sep 2022',
    Trading_Ac: '1951504',
    comment: 'XMR DEPOSIT',
  },
  {
    Status: 'Declined',
    Amount: '$107.00',
    Date: '12 Sep 2022',
    Trading_Ac: '1951504',
    comment: 'XMR DEPOSIT',
  },
  {
    Status: 'Approved',
    Amount: '$100.00',
    Date: '11 Sep 2022',
    Trading_Ac: '1951504',
    comment: 'XMR DEPOSIT',
  },
  {
    Status: 'Approved',
    Amount: '$70.00',
    Date: '9 Sep 2022',
    Trading_Ac: '1951504',
    comment: 'XMR DEPOSIT',
  },
  {
    Status: 'Declined',
    Amount: '$10.00',
    Date: '8 Sep 2022',
    Trading_Ac: '1951504',
    comment: 'XMR DEPOSIT',
  },
  {
    Status: 'Approved',
    Amount: '$100.00',
    Date: '7 Sep 2022',
    Trading_Ac: '1951504',
    comment: 'XMR DEPOSIT',
  },
  {
    Status: 'Approved',
    Amount: '$200.00',
    Date: '12 Sep 2022',
    Trading_Ac: '1951504',
    comment: 'XMR DEPOSIT',
  },
  {
    Status: 'Declined',
    Amount: '$107.00',
    Date: '12 Sep 2022',
    Trading_Ac: '1951504',
    comment: 'XMR DEPOSIT',
  },
  {
    Status: 'Approved',
    Amount: '$100.00',
    Date: '11 Sep 2022',
    Trading_Ac: '1951504',
    comment: 'XMR DEPOSIT',
  },
  {
    Status: 'Approved',
    Amount: '$70.00',
    Date: '9 Sep 2022',
    Trading_Ac: '1951504',
    comment: 'XMR DEPOSIT',
  },
  {
    Status: 'Declined',
    Amount: '$10.00',
    Date: '8 Sep 2022',
    Trading_Ac: '1951504',
    comment: 'XMR DEPOSIT',
  },
  {
    Status: 'Approved',
    Amount: '$100.00',
    Date: '7 Sep 2022',
    Trading_Ac: '1951504',
    comment: 'XMR DEPOSIT',
  },
  {
    Status: 'Declined',
    Amount: '$10.00',
    Date: '8 Sep 2022',
    Trading_Ac: '1951504',
    comment: 'XMR DEPOSIT',
  },
  {
    Status: 'Approved',
    Amount: '$100.00',
    Date: '7 Sep 2022',
    Trading_Ac: '1951504',
    comment: 'XMR DEPOSIT',
  },
];

const txnHeading = [
  localizedStrings.STATUS,
  localizedStrings.AMOUNT,
  localizedStrings.DATE,
  localizedStrings.TRADING_ACCOUNT,
  localizedStrings.COMMENT,
];

const Deposit = ({ navigation }) => {
  const [account, setAccount] = useState(null);
  const [cardNumber, setCardNumber] = useState(null);
  const [cardName, setCardName] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [amount, setAmount] = useState(null);

  const [showCard, setShowCard] = useState(false);

  const accountSelected = item => {
    setAccount(item);
  };

  const handleSelect = () => {
    setShowCard(!showCard);
  };

  const renderItem = ({ item, index }) => {
    return (
      <>
        <View style={styles.rowContainer}>
          <Text style={styles.rowText}>{item.Status}</Text>
          <Text style={styles.rowText}>{item.Amount}</Text>
          <Text style={styles.rowText}>{item.Trading_Ac}</Text>
          <Text style={styles.rowText}>{item.Date}</Text>
          <Text style={styles.rowText}>{item.comment}</Text>
        </View>
        <View style={styles.divider} />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrolling}>
        <Text style={styles.title}>{localizedStrings.DEPOSIT_FUNDS}</Text>
        <View style={[styles.row, styles.topSpace, styles.paddingHori]}>
          <Text style={styles.deposit}>
            {localizedStrings.DEPOSIT_TO}
            <Text style={styles.asterisk}>*</Text>
          </Text>
          <View style={styles.secondHead}>
            <AppDropDown
              items={allAccountNumbers}
              containerStyle={styles.dropdownContainer}
              title={localizedStrings.SELECT_AN_ACCOUNT}
              dropdownWidthStyle={styles.dropdown}
              itemSelected={accountSelected}
              selectedItem={account}
            />

            <AppButton
              onPress={handleSelect}
              text={localizedStrings.SELECT}
              textStyle={styles.btnText}
              buttonStyle={styles.selectBtn}
            />
          </View>
        </View>

        {showCard && (
          <LinearGradient colors={config.colors.paymentLinearGradient} style={styles.cardContainer}>
            <View style={[styles.row]}>
              <Text style={styles.cardNo}>{localizedStrings.CARD_NUMBER}</Text>
              <AppTextInput
                keyboardType={'number-pad'}
                containerStyle={styles.cardNoContainer}
                placeholder={localizedStrings.CARD_NUMBER}
                textInputStyle={styles.numberInput}
                viewStyle={styles.viewHead}
                placeholderTextColor={config.colors.grayTheme}
                onChangeText={text => {
                  setCardNumber(text);
                }}
              />
            </View>

            <View style={styles.row}>
              <Text style={styles.cardNo}>{localizedStrings.CARD_NAME}</Text>
              <AppTextInput
                containerStyle={styles.cardNoContainer}
                placeholder={localizedStrings.CARD_NAME}
                textInputStyle={styles.numberInput}
                viewStyle={styles.viewHead}
                placeholderTextColor={config.colors.grayTheme}
                onChangeText={text => {
                  setCardName(text);
                }}
              />
            </View>

            <View style={styles.expiryDateHead}>
              <Text style={styles.expiry}>{localizedStrings.EXPIRY_DATE}</Text>
              <View style={styles.expiryInner}>
                <AppTextInput
                  containerStyle={styles.dateContainer}
                  placeholder={localizedStrings.MM}
                  textInputStyle={styles.dateInput}
                  viewStyle={styles.dateView}
                  placeholderTextColor={config.colors.grayTheme}
                  onChangeText={text => {
                    setMonth(text);
                  }}
                />

                <AppTextInput
                  containerStyle={styles.dateContainer}
                  placeholder={localizedStrings.YY}
                  textInputStyle={styles.dateInput}
                  viewStyle={styles.dateView}
                  placeholderTextColor={config.colors.grayTheme}
                  onChangeText={text => {
                    setCardName(text);
                  }}
                />
              </View>
            </View>

            <View style={[styles.row]}>
              <Text style={styles.cardNo}>{localizedStrings.AMOUNT}</Text>
              <AppTextInput
                keyboardType={'number-pad'}
                containerStyle={styles.cardNoContainer}
                placeholder={localizedStrings.AMOUNT}
                textInputStyle={styles.numberInput}
                viewStyle={styles.viewHead}
                placeholderTextColor={config.colors.grayTheme}
                onChangeText={text => {
                  setAmount(text);
                }}
              />
            </View>

            <AppButton
              onPress={handleSelect}
              text={localizedStrings.DEPOSIT_NOW}
              textStyle={styles.depositTxt}
              buttonStyle={styles.depositBtn}
              gradientColor={config.colors.appTheme3Gradient}
            />
          </LinearGradient>
        )}

        <LinearGradient colors={config.colors.unselectedAccountGradient} style={styles.topPayment}>
          <View style={styles.paymentHead}>
            <Text style={styles.accepted}>{localizedStrings.ACCEPTED_PAYMENT_METHODS}</Text>
            <Text style={styles.secured}>{localizedStrings.SECURED_PAYMENTS}</Text>
          </View>
          <View style={styles.payment}>
            <View style={[styles.imgHead, styles.imgSpace]}>
              <Image source={visa} resizeMode="contain" style={styles.visaImg} />
              <Image source={masterCard} resizeMode="contain" style={styles.img} />
              <Image source={maestro} resizeMode="contain" style={styles.maestroImg} />
            </View>
            <View style={[styles.imgHead]}>
              <Image source={ssl} resizeMode="contain" style={[styles.imgSecure, styles.spacing]} />
              <Image
                source={pci}
                resizeMode="contain"
                style={[styles.imgSecure, styles.imgBetween]}
              />
            </View>
          </View>
        </LinearGradient>

        <LinearGradient colors={config.colors.unselectedAccountGradient} style={styles.box}>
          <View style={[styles.row, styles.paddingHori]}>
            <Text style={styles.myDeposit}>{localizedStrings.MY_DEPOSITS}</Text>
            <Pressable>
              <Image style={styles.refreshIcon} source={refresh} />
            </Pressable>
          </View>

          <AppFlatList items={data} headerItems={txnHeading} renderItem={renderItem} />
        </LinearGradient>

        <View style={styles.bottom}>
          <Text style={styles.records}>
            {localizedStrings.TOTAL_RECORDS} {data.length} {localizedStrings.TOTAL_PAGE}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  refreshIcon: { height: 24, width: 24 },
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
  scrolling: {
    flex: 1,
  },
  depositBtn: {
    width: 120,
    height: 35,
    alignSelf: 'center',
    margin: 14,
  },
  depositTxt: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 11,
    color: config.colors.white,
  },
  expiryInner: {
    flexDirection: 'row',
  },
  expiry: {
    fontFamily: 'Rubik-Regular',
    fontSize: 11,
    color: config.colors.midGray,
    width: '30%',
    paddingHorizontal: 18,
    alignSelf: 'center',
  },
  expiryDateHead: {
    flexDirection: 'row',
  },
  dateView: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderRadius: 6,
    height: 30,
    marginHorizontal: 0,
    marginTop: 4,
    marginBottom: 6,
  },
  dateContainer: {
    width: '30%',
  },
  dateInput: {
    color: config.colors.grayTheme,
    fontSize: 10,
    fontFamily: 'Rubik-Regular',
    marginHorizontal: 6,
    height: 30,
  },
  cardNo: {
    fontFamily: 'Rubik-Regular',
    fontSize: 11,
    color: config.colors.midGray,
    width: '30%',
    paddingHorizontal: 18,
  },
  viewHead: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderRadius: 6,
    height: 30,
    marginHorizontal: 0,
    marginTop: 4,
    marginBottom: 6,
  },
  numberInput: {
    color: config.colors.grayTheme,
    fontSize: 10,
    fontFamily: 'Rubik-Regular',
    marginHorizontal: 6,
  },
  cardNoContainer: {
    width: '60%',
  },
  cardContainer: {
    margin: 16,
    paddingTop: 16,
    borderRadius: 10,
    borderColor: config.colors.white,
    borderWidth: 1,
  },
  bottom: {
    height: 30,
    justifyContent: 'center',
  },
  flatlistHead: {
    flex: 1,
  },
  records: {
    marginHorizontal: 15,
    fontFamily: 'Rubik-Regular',
    color: config.colors.lightGrey,
    fontSize: 11,
  },
  boxInner: {
    marginTop: 30,
  },
  tryHead: { alignSelf: 'center' },
  myDeposit: {
    fontSize: 16,
    fontFamily: 'Rubik-Medium',
    color: config.colors.inputBG,
  },
  heading: {
    fontFamily: 'Rubik-Medium',
    fontSize: 12,
    color: config.colors.midGray,
    width: Dimensions.get('screen').width / 4 - 15,
    textAlignVertical: 'center',
    paddingHorizontal: 15,
  },
  box: {
    margin: 16,
    paddingVertical: 16,
    borderRadius: 10,
    borderColor: config.colors.white,
    borderWidth: 1,
    flex: 1,
  },
  payment: {
    flexDirection: 'row',
    padding: 15,
  },
  imgBetween: {
    marginLeft: 10,
  },
  imgSecure: {
    height: 31,
    width: 31,
  },
  spacing: {
    marginLeft: 26,
  },
  visaImg: {
    height: 15,
    width: 46,
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  cell: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imgSpace: {
    paddingRight: 40,
  },
  maestroImg: {
    height: 27,
    width: 35,
    marginTop: 0.5,
  },
  img: {
    width: 45,
    height: 24,
    marginRight: 15,
    marginLeft: 6,
    alignSelf: 'center',
  },
  imgHead: {
    flexDirection: 'row',
  },
  secured: {
    fontSize: 10,
    color: config.colors.grayTheme,
    fontFamily: 'Rubik-Regular',
    paddingLeft: 15,
  },
  topPayment: {
    marginTop: 20,
    borderColor: config.colors.white,
    borderWidth: 1,
    backgroundColor: config.colors.unselectedAccountGradient,
    marginHorizontal: 15,
    borderRadius: 6,
  },
  paymentHead: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    marginTop: 6,
  },
  accepted: {
    fontSize: 10,
    color: config.colors.grayTheme,
    fontFamily: 'Rubik-Regular',
    paddingRight: 15,
  },
  secondHead: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 15,
  },
  selectBtn: {
    paddingHorizontal: 22,
    height: 32,
  },
  btnText: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 11,
  },
  dropdownText: {
    marginHorizontal: 4,
    height: 22,
  },
  dropdownContainer: {
    width: 170,
    height: 33,
    marginRight: 12,
  },
  dropdown: { width: 160, height: 90 },
  topSpace: {
    marginTop: 16,
  },
  asterisk: {
    color: config.colors.red,
  },
  deposit: {
    fontSize: RFValue(11),
    color: config.colors.midGray,
    fontFamily: 'Rubik-Regular',
    alignSelf: 'center',
  },
  paddingHori: {
    paddingHorizontal: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Rubik-SemiBold',
    color: config.colors.inputBG,
    fontSize: RFValue(18),
    paddingHorizontal: 16,
    paddingTop: 35,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: config.colors.screenBG,
  },
});

export default Deposit;
