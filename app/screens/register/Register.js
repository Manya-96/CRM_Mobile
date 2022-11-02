import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  View,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
import { logoWhite, heading, country, bg } from '../../assets/images';
import { localizedStrings } from '../../localization/translation';
import config from '../../config';
import { AppTextInput, AppButton } from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import { UnCheckIcon, CheckIcon, downArrowIcon } from '../../utils/icon';
import { StackActions } from '@react-navigation/native';

const Login = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [check, setCheck] = useState(false);
  const [usCheck, setUsCheck] = useState(false);
  const [agree, setAgree] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    en: 'United Kingdom',
    flag: '🇬🇧',
    code: 'GB',
    dialCode: '+44',
  });

  const handleSubmit = () => {
    Keyboard.dismiss();
    navigation.dispatch(StackActions.replace(config.routes.MAIN_DRAWER));
  };

  const onSelectCountry = countryData => {
    setSelectedCountry(countryData);
  };

  return (
    <ImageBackground source={bg} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
          <ScrollView
            automaticallyAdjustContentInsets={false}
            keyboardShouldPersistTaps="handled"
            bounces={false}>
            <View style={styles.imgHead}>
              <Image source={logoWhite} style={styles.logo} resizeMode="contain" />
            </View>
            <Text style={[styles.title, styles.white]}>{localizedStrings.REGISTER}</Text>
            <AppTextInput
              containerStyle={[styles.outerContainer, styles.margin]}
              placeholder={localizedStrings.FIRST_NAME}
              onChangeText={text => {
                setFirstName(text);
              }}
            />

            <AppTextInput
              containerStyle={styles.outerContainer}
              placeholder={localizedStrings.LAST_NAME}
              onChangeText={text => {
                setLastName(text);
              }}
            />

            <AppTextInput
              containerStyle={styles.outerContainer}
              placeholder={localizedStrings.EMAIL}
              onChangeText={text => {
                setEmail(text);
              }}
            />
            <View style={styles.btnHead}>
              <Pressable
                style={styles.btn}
                onPress={() => {
                  navigation.navigate(config.routes.COUNTRY_LIST, { onGoBack: onSelectCountry });
                }}>
                <Text style={[styles.flag]}>{selectedCountry.flag}</Text>
                <View style={styles.btnText}>{downArrowIcon(12, config.colors.grayTheme)()}</View>
                <Text style={[styles.white, styles.btnText, styles.spacing]}>
                  {selectedCountry.dialCode}
                </Text>
              </Pressable>

              <AppTextInput
                containerStyle={styles.phone}
                placeholder={localizedStrings.PHONE}
                onChangeText={text => {
                  setEmail(text);
                }}
              />
            </View>
            <Text style={[styles.declare, styles.white, styles.leftSpace]}>
              {localizedStrings.I_DECLARE}
            </Text>

            <Pressable onPress={() => setCheck(!check)}>
              <View style={[styles.row, styles.rowSpace]}>
                {!check
                  ? UnCheckIcon(22, config.colors.white)()
                  : CheckIcon(22, config.colors.white)()}

                <View>
                  <Text style={[styles.white, styles.declareText, styles.padding]}>
                    {localizedStrings.DECLARE_TEXT}
                  </Text>
                  <View style={[styles.padding, styles.handleRow]}>
                    <Pressable onPressIn={() => {}} style={{}}>
                      <Text style={[styles.underline, styles.white, styles.declareText]}>
                        {localizedStrings.TERMS_CONDITION}
                      </Text>
                    </Pressable>
                    <Pressable onPressIn={() => {}} style={{}}>
                      <Text style={[styles.underline, styles.white, styles.declareText]}>
                        {localizedStrings.CLIENT_AGREEMENT}
                      </Text>
                    </Pressable>
                  </View>
                  <Text style={[styles.white, styles.declareText, styles.padding]}>
                    {localizedStrings.DECLARE_TEXT_3}
                  </Text>
                </View>
              </View>
            </Pressable>

            <Pressable onPress={() => setUsCheck(!usCheck)}>
              <View style={[styles.row, styles.rowSpace]}>
                {!usCheck
                  ? UnCheckIcon(22, config.colors.white)()
                  : CheckIcon(22, config.colors.white)()}

                <Text style={[styles.white, styles.declareText, styles.padding]}>
                  {localizedStrings.US_CITIZEN}
                </Text>
              </View>
            </Pressable>

            <Pressable onPress={() => setAgree(!agree)}>
              <View style={[styles.row, styles.rowSpace]}>
                {!agree
                  ? UnCheckIcon(22, config.colors.white)()
                  : CheckIcon(22, config.colors.white)()}

                <Text style={[styles.white, styles.declareText, styles.padding]}>
                  {localizedStrings.AGREE}
                </Text>
              </View>
            </Pressable>

            <AppButton
              onPress={handleSubmit}
              buttonStyle={styles.btnStyle}
              text={localizedStrings.SUBMIT}
            />
            <View style={[styles.row, styles.center, { paddingBottom: 20 }]}>
              <Text style={[styles.white, styles.center, styles.loginText]}>
                {localizedStrings.ALREADY_ACCOUNT}
              </Text>
              <Pressable
                style={styles.center}
                onPressIn={() => {
                  navigation.navigate(config.routes.LOGIN);
                }}>
                <Text style={[styles.underline, styles.red]}>{localizedStrings.LOGIN_HERE}</Text>
              </Pressable>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loginText: {
    fontSize: 11,
  },
  btnHead: {
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: 20,
  },
  countryImg: {
    height: 16,
    width: 16,
    alignSelf: 'center',
    marginHorizontal: 5,
  },
  handleRow: {
    flexDirection: 'row',
  },
  btnText: {
    alignSelf: 'center',
    fontSize: 11,
    marginHorizontal: 2,
  },
  spacing: {
    marginHorizontal: 5,
  },
  btn: {
    flexDirection: 'row',
    borderColor: config.colors.grayTheme,
    backgroundColor: config.colors.inputBG,
    borderWidth: 1,
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flex: 0.25,
  },
  scrollContentContainer: {
    flex: 1,
  },
  padding: {
    paddingHorizontal: 15,
  },
  rowSpace: {
    width: '82%',
    alignSelf: 'center',
  },
  leftSpace: {
    marginHorizontal: 38,
  },
  iconText: {
    marginLeft: 60,
  },
  center: {
    alignSelf: 'center',
    marginTop: 10,
  },
  red: {
    color: config.colors.red,
    fontSize: 11,
  },
  space: {},
  btnStyle: {
    width: '30%',
    alignSelf: 'center',
    marginTop: '12%',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
  },
  declareText: {
    fontSize: 11,
  },
  declare: { fontSize: 11, marginTop: 10, fontFamily: 'Rubik-SemiBold' },
  phone: {
    flex: 0.75,
    marginHorizontal: 0,
  },
  margin: {
    marginTop: '5%',
  },
  outerContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  white: {
    color: config.colors.white,
  },
  title: {
    fontSize: 18,
    marginTop: '10%',
    alignSelf: 'center',
    fontFamily: 'Rubik-Bold',
  },
  heading: {
    fontSize: 20,
    alignSelf: 'center',
    marginHorizontal: 10,
    fontFamily: 'Rubik-Bold',
  },
  imgHead: { flexDirection: 'row', justifyContent: 'center', marginTop: '22%' },
  logo: {
    height: 45,
    width: 150,
  },
  container: {
    flex: 1,
  },
  flag: {
    fontSize: 18,
  },
});

export default Login;
