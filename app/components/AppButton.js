import React from 'react';
import { StyleSheet, Text, Pressable, Image, View, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';
import config from '../config';

const AppButton = ({
  key = 0,
  buttonStyle,
  textStyle,
  text,
  item,
  onPress,
  disabled,
  leftImage,
  leftImageStyle,
  gradientColor,
}) => {
  const buttonClicked = () => (item ? onPress(item) : onPress());
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={gradientColor ?? config.colors.appThemeGradient}
      style={[styles.buttonGradient, buttonStyle]}
      key={key}>
      <Pressable disabled={disabled} style={styles.button} onPress={buttonClicked}>
        <View style={styles.container}>
          {leftImage && (
            <Image style={[styles.image, leftImageStyle]} source={leftImage} resizeMode="contain" />
          )}
          <Text style={[styles.text, textStyle]}>{text}</Text>
        </View>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 17,
    width: 17,
    marginRight: 8,
  },
  buttonGradient: {
    borderRadius: 7,
    height:
      Dimensions.get('screen').height * 0.045 > 34 ? Dimensions.get('screen').height * 0.045 : 34,
    paddingHorizontal: 10,
  },
  button: { height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' },
  text: {
    color: config.colors.white,
    fontSize: RFValue(13),
    fontFamily: 'Rubik-Medium',
  },
});

export default AppButton;
