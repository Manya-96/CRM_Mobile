import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
  Keyboard,
} from 'react-native';
import { logoWhite, bg } from '../../assets/images';
import { localizedStrings } from '../../localization/translation';
import config from '../../config';
import { AppTextInput, AppButton } from '../../components';
import { RFValue } from 'react-native-responsive-fontsize';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    Keyboard.dismiss();
    navigation.goBack();
  };

  return (
    <ImageBackground source={bg} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Image source={logoWhite} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>{localizedStrings.ENTER_YOUR_EMAIL}</Text>
        <AppTextInput
          containerStyle={[styles.outerContainer, styles.margin]}
          placeholder={localizedStrings.EMAIL_ADDRESS}
          onChangeText={text => {
            setEmail(text);
          }}
        />
        <AppButton
          onPress={handleForgotPassword}
          buttonStyle={styles.btnStyle}
          text={localizedStrings.SUBMIT}
        />
        <Pressable
          style={styles.signupButton}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.password}>{localizedStrings.BACK_TO_LOGIN}</Text>
        </Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  password: {
    fontSize: RFValue(11),
    fontFamily: 'Rubik-Regular',
    color: config.colors.white,
  },
  signupButton: {
    marginTop: 24,
    alignSelf: 'center',
    paddingVertical: 4,
  },
  btnStyle: {
    width: '30%',
    alignSelf: 'center',
    marginTop: 24,
  },
  margin: { marginTop: '7%' },
  outerContainer: {
    width: '82%',
    alignSelf: 'center',
  },
  title: {
    fontSize: RFValue(13),
    marginTop: '12%',
    marginHorizontal: 50,
    fontFamily: 'Rubik-Bold',
    color: config.colors.white,
    textAlign: 'center',
  },
  logo: {
    marginTop: 140,
    alignSelf: 'center',
    height: 45,
    width: 150,
  },
  container: {
    flex: 1,
  },
});

export default ForgotPassword;
