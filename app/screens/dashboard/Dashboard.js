import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Pressable, Image, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';
import { AccountsContainer, AppButton } from '../../components';
import config from '../../config';
import { localizedStrings } from '../../localization/translation';
import { deposit, info, refresh, trade, transfer } from '../../assets/images';

const allAccounts = [
  { accountNumber: '1062542' },
  { accountNumber: '67518901' },
  { accountNumber: '12345678' },
  { accountNumber: '98765432' },
];

const Dashboard = ({ navigation }) => {
  const [selectedAccount, setSelectedAccount] = useState(allAccounts[0].accountNumber);
  const flatListRef = useRef();
  useEffect(() => {
    const accountIndex = allAccounts.findIndex(item => item.accountNumber === selectedAccount);
    if (accountIndex !== -1) {
      flatListRef.current.scrollToIndex({ index: accountIndex });
    }
  }, [selectedAccount]);

  const RenderRow = ({ title, value, isNegative }) => {
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text style={styles.rowTitle}>{title}</Text>
          <Text style={[styles.rowTitle, styles.value, isNegative && styles.negativeValue]}>
            {value}
          </Text>
        </View>
        <View style={styles.divider} />
      </View>
    );
  };

  const renderItem = ({ item, index }) => {
    return (
      <LinearGradient
        colors={config.colors.unselectedAccountGradient}
        style={styles.detailsContainer}>
        <View style={styles.buttonsBGView}>
          <AppButton
            onPress={() => {}}
            leftImage={deposit}
            gradientColor={
              item.accountNumber !== selectedAccount
                ? config.colors.disableGradient
                : config.colors.appThemeGradient
            }
            buttonStyle={styles.button}
            disabled={item.accountNumber !== selectedAccount}
            text={localizedStrings.DEPOSIT}
          />
          <AppButton
            onPress={() => {}}
            leftImage={trade}
            gradientColor={
              item.accountNumber !== selectedAccount
                ? config.colors.disableGradient
                : config.colors.appTheme2Gradient
            }
            buttonStyle={[styles.button, styles.buttonPadding]}
            text={localizedStrings.TRADE}
            disabled={item.accountNumber !== selectedAccount}
          />
          <AppButton
            onPress={() => {}}
            leftImage={transfer}
            gradientColor={
              item.accountNumber !== selectedAccount
                ? config.colors.disableGradient
                : config.colors.appTheme3Gradient
            }
            buttonStyle={[styles.button, styles.buttonPadding]}
            text={localizedStrings.TRANSFER}
            disabled={item.accountNumber !== selectedAccount}
          />
        </View>
        <View style={styles.accountNumberInfoView}>
          <Text style={styles.accountNumberText}>{localizedStrings.ACCOUNT_NUMBER}: </Text>
          <Text style={styles.accountNumber}>{selectedAccount}</Text>
          <Pressable style={styles.infoButton}>
            <Image style={styles.infoIcon} source={info} />
          </Pressable>
        </View>
        <Text style={styles.amount}>$288.43</Text>
        <View style={styles.accountNumberInfoView}>
          <Text style={styles.summaryText}>{localizedStrings.ACCOUNT_SUMMARY}</Text>
          <Pressable style={styles.infoButton}>
            <Image style={styles.refreshIcon} source={refresh} />
          </Pressable>
        </View>
        <View style={styles.extraSpace} />
        <RenderRow title={localizedStrings.BALANCE} value={'$288.43'} />
        <RenderRow title={localizedStrings.EQUITY} value={'$19,367.01'} />
        <RenderRow title={localizedStrings.CREDIT} value={'$20,000.00'} />
        <RenderRow title={localizedStrings.OPEN_PL} value={'0.00'} />
        <RenderRow title={localizedStrings.CLOSE_PL} value={'-27.43'} isNegative />
        <RenderRow title={localizedStrings.FREE_MARGIN} value={'19,367.01'} />
        <RenderRow title={`${localizedStrings.MARGIN_LEVEL} %`} value={'0.00%'} />
        <View style={styles.extraSpace} />
      </LinearGradient>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>{localizedStrings.ACTIVE_ACCOUNTS}</Text>
        <AccountsContainer
          accounts={allAccounts}
          selectedAccount={selectedAccount}
          onSelectAccount={account => setSelectedAccount(account)}
        />
        <FlatList
          data={allAccounts}
          ref={ref => (flatListRef.current = ref)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
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
    padding: 16,
    borderRadius: 10,
    borderColor: config.colors.white,
    borderWidth: 1,
  },
  buttonsBGView: { flexDirection: 'row', marginBottom: 25, width: '100%' },
  button: { width: '31.5%' },
  buttonPadding: { marginLeft: '2.5%' },
  accountNumberInfoView: { flexDirection: 'row', width: '100%', alignItems: 'center' },
  accountNumberText: {
    fontFamily: 'Rubik-Regular',
    fontSize: RFValue(12),
    color: config.colors.midGray,
  },
  accountNumber: {
    fontFamily: 'Rubik-Medium',
    fontSize: RFValue(12),
    color: config.colors.midGray,
    flex: 1,
  },
  infoButton: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: config.colors.white,
  },
  infoIcon: { height: 12, width: 2 },
  amount: {
    fontFamily: 'Rubik-Bold',
    fontSize: RFValue(24),
    color: config.colors.appTheme,
    marginBottom: 16,
  },
  refreshIcon: { height: 24, width: 24 },
  summaryText: {
    fontFamily: 'Rubik-Medium',
    fontSize: RFValue(15),
    color: config.colors.inputBG,
    flex: 1,
  },
  rowContainer: { paddingVertical: 6, flexDirection: 'row', width: '100%', alignItems: 'center' },
  rowTitle: { fontFamily: 'Rubik-Regular', fontSize: RFValue(12), color: config.colors.midGray },
  value: { color: config.colors.appThemeGreen, flex: 1, textAlign: 'right' },
  negativeValue: { color: config.colors.red },
  divider: { height: 1, width: '100%', backgroundColor: config.colors.divider },
  extraSpace: { height: 20 },
});

export default Dashboard;
