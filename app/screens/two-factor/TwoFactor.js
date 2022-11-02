import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView, View, Image, Pressable } from 'react-native';
import config from '../../config';
import { localizedStrings } from '../../localization/translation';
import { appStore, googlePlay } from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';

const options = [localizedStrings.LOGIN_CREDENTIALS, localizedStrings.GOOGLE_TOKEN];

const steps = [localizedStrings.STEP_1, localizedStrings.STEP_2];

const moreSteps = [localizedStrings.STEP_3, localizedStrings.STEP_4];

const TwoFactor = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{localizedStrings.TWO_FACTOR_AUTHENTICATION}</Text>

        <View style={styles.faStatus}>
          <Text style={styles.statusTxt}>{localizedStrings.ENABLE_DISABLE_FA}</Text>

          <Pressable style={styles.switchHead} onPress={toggleSwitch}>
            <View
              style={[
                styles.sliding,
                {
                  backgroundColor: isEnabled ? config.colors.appTheme : config.colors.darkGray,
                  alignSelf: isEnabled ? 'flex-start' : 'flex-end',
                },
              ]}
            />
          </Pressable>
        </View>

        <Text style={styles.question2fa}>{localizedStrings.WHAT_IS_2FA}</Text>

        <Text style={styles.definition}>{localizedStrings.FA_DEFINITION}</Text>

        {options.map((item, index) => {
          return (
            <View style={styles.faStatus} key={index.toString()}>
              <View style={styles.dot} />
              <Text style={styles.heading}>{item}</Text>
            </View>
          );
        })}

        <LinearGradient
          colors={config.colors.unselectedAccountGradient}
          style={styles.detailsContainer}>
          <Text style={styles.faOn}>{localizedStrings.STEPS_FOR_2FA}</Text>

          {steps.map((item, index) => {
            return (
              <View style={styles.faStatus} key={index.toString()}>
                <Text style={styles.steps}>{index + 1} .</Text>
                <Text style={styles.steps}>{item}</Text>
              </View>
            );
          })}

          <View style={styles.imgHead}>
            <View style={styles.inner}>
              <Pressable onPress={() => console.log('on click app store')}>
                <Image source={appStore} style={styles.ios} resizeMode="contain" />
              </Pressable>
              <Text style={styles.platform}>{localizedStrings.FOR_IOS}</Text>
            </View>
            <View style={styles.inner}>
              <Pressable onPress={() => console.log('on click google play store')}>
                <Image source={googlePlay} style={styles.ios} resizeMode="contain" />
              </Pressable>

              <Text style={styles.platform}>{localizedStrings.FOR_ANDROID}</Text>
            </View>
          </View>

          {moreSteps.map((item, index) => {
            return (
              <View style={styles.faStatus} key={index.toString()}>
                <Text style={styles.steps}>{index + 3} .</Text>
                <Text style={styles.steps}>{item}</Text>
              </View>
            );
          })}
        </LinearGradient>

        <Text style={[styles.underline]}>
          {localizedStrings.NOTE} <Text style={styles.note}>{localizedStrings.FA_NOTE}</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sliding: {
    height: 20,
    width: 20,
    borderRadius: 20,
  },
  switchHead: {
    width: 40,
    height: 20,
    backgroundColor: config.colors.lightGrayTheme,
    borderRadius: 10,
    marginHorizontal: 15,
    borderColor: config.colors.white,
    borderWidth: 1,
  },
  underline: {
    fontFamily: 'Rubik-Bold',
    fontSize: 12,
    color: config.colors.grayTheme,
    marginHorizontal: 15,
    paddingBottom: 20,
  },
  note: {
    fontFamily: 'Rubik-Regular',
    fontSize: 12,
    color: config.colors.grayTheme,
  },
  platform: {
    fontSize: 12,
    fontFamily: 'Rubik-Regular',
    color: config.colors.grayTheme,
    marginTop: 10,
  },
  inner: {
    marginHorizontal: 15,
    marginVertical: 20,
  },
  imgHead: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ios: {
    height: 40,
    width: 40,
    alignSelf: 'center',
  },
  steps: {
    color: config.colors.midGray,
    fontSize: 12,
    fontFamily: 'Rubik-Regular',
  },
  faOn: {
    color: config.colors.inputBG,
    fontFamily: 'Rubik-Medium',
    fontSize: 14,
    marginLeft: 6,
  },
  detailsContainer: {
    marginHorizontal: 16,
    paddingHorizontal: 16,
    paddingVertical: 25,
    borderRadius: 10,
    borderColor: config.colors.white,
    borderWidth: 1,
    marginVertical: 20,
  },
  heading: {
    color: config.colors.inputBG,
    fontFamily: 'Rubik-Medium',
    fontSize: 12,
    alignSelf: 'center',
    marginLeft: 10,
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 2.5,
    backgroundColor: config.colors.inputBG,
    alignSelf: 'center',
  },
  definition: {
    fontFamily: 'Rubik-Regular',
    fontSize: 12,
    color: config.colors.midGray,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  question2fa: {
    fontSize: 15,
    fontFamily: 'Rubik-Medium',
    color: config.colors.inputBG,
    marginHorizontal: 15,
    marginTop: 30,
  },
  statusTxt: {
    fontSize: 12,
    color: config.colors.midGray,
    fontFamily: 'Rubik-Regular',
    alignSelf: 'center',
  },
  faStatus: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 10,
  },
  title: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 18,
    color: config.colors.inputBG,
    margin: 15,
  },
  container: {
    flex: 1,
    backgroundColor: config.colors.screenBG,
  },
});

export default TwoFactor;
