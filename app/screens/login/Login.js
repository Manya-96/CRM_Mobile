import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
  Platform,
  Keyboard,
} from 'react-native';
import { logoWhite, heading, bg } from '../../assets/images';
import { localizedStrings } from '../../localization/translation';
import config from '../../config';
import { AppTextInput, AppButton } from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import { StackActions } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Keyboard.dismiss();
    navigation.dispatch(StackActions.replace(config.routes.MAIN_DRAWER));
  };

  return (
    <ImageBackground source={bg} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled>
          <ScrollView
            style={styles.container}
            automaticallyAdjustContentInsets={false}
            keyboardShouldPersistTaps="handled">
            <View style={styles.imgHead}>
              <Image source={logoWhite} style={styles.logo} resizeMode="contain" />
            </View>
            <Text style={[styles.title, styles.white]}>
              {localizedStrings.LOGIN_TO_YOUR_ACCOUNT}
            </Text>
            <AppTextInput
              containerStyle={[styles.outerContainer, styles.margin]}
              placeholder={localizedStrings.EMAIL_ADDRESS}
              onChangeText={text => {
                setEmail(text);
              }}
            />

            <AppTextInput
              containerStyle={styles.outerContainer}
              placeholder={localizedStrings.PASSWORD}
              onChangeText={text => {
                setPassword(text);
              }}
            />
            <AppButton
              onPress={handleLogin}
              buttonStyle={styles.btnStyle}
              text={localizedStrings.LOGIN}
            />
            <Pressable
              style={styles.signupButton}
              onPress={() => {
                navigation.navigate(config.routes.FORGOT_PASSWORD);
              }}>
              <Text style={[styles.password, styles.white]}>
                {localizedStrings.FORGOT_YOUR_PASSWORD}
              </Text>
            </Pressable>
            <Pressable
              style={styles.signupButton}
              onPress={() => {
                navigation.navigate(config.routes.REGISTER);
              }}>
              <Text style={[styles.password, styles.white]}>
                {localizedStrings.DONOT_HAVE_ACCOUNT}
                <Text style={[styles.password, styles.signupText]}>{localizedStrings.SIGN_UP}</Text>
              </Text>
            </Pressable>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  keyboardView: { flex: 1 },
  password: {
    fontSize: RFValue(11),
    fontFamily: 'Rubik-Regular',
  },
  signupButton: {
    marginTop: 12,
    alignSelf: 'center',
    paddingVertical: 4,
  },
  dontHaveAccont: {
    fontSize: RFValue(11),
    fontFamily: 'Rubik-Regular',
    color: config.colors.white,
  },
  signupText: {
    textDecorationLine: 'underline',
    color: config.colors.red,
  },
  btnStyle: {
    width: '30%',
    alignSelf: 'center',
    marginTop: '12%',
  },
  margin: { marginTop: '7%' },
  outerContainer: {
    width: '82%',
    alignSelf: 'center',
  },
  white: {
    color: config.colors.white,
  },
  title: {
    fontSize: 18,
    marginTop: '18%',
    alignSelf: 'center',
    fontFamily: 'Rubik-Bold',
  },
  heading: {
    fontSize: 20,
    alignSelf: 'center',
    marginHorizontal: 10,
    fontFamily: 'Rubik-Bold',
  },
  imgHead: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 140,
  },
  logo: {
    height: 45,
    width: 150,
  },
  container: {
    flex: 1,
  },
});

export default Login;
