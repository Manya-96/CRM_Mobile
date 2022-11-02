import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Dimensions, Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import config from '../config';
import { EyeCloseIcon, EyeOpenIcon } from '../utils/icon';

const AppTextInput = ({
  containerStyle,
  errorTextStyle,
  viewStyle,
  error = false,
  errorHolder,
  textInputStyle,
  onRefs,
  isPassword,
  placeholderTextColor,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(isPassword);

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.contentView, viewStyle, error && styles.errorView]}>
        <TextInput
          {...props}
          secureTextEntry={showPassword}
          style={[styles.textInput, textInputStyle, error && styles.errorTextInput]}
          ref={inputRef => {
            onRefs && onRefs(inputRef);
          }}
          autoCorrect={false}
          placeholderTextColor={placeholderTextColor ?? config.colors.white}
        />
        {isPassword && (
          <Pressable style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
            {!showPassword
              ? EyeOpenIcon(22, config.colors.white)()
              : EyeCloseIcon(22, config.colors.white)()}
          </Pressable>
        )}
      </View>
      {error ? <Text style={[styles.errorText, errorTextStyle]}>{errorHolder}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  contentView: {
    flexDirection: 'row',
    paddingVertical: 2,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: config.colors.grayTheme,
    backgroundColor: config.colors.inputBG,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 8,
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    height:
      Dimensions.get('screen').height * 0.04 > 32 ? Dimensions.get('screen').height * 0.04 : 32,
    marginHorizontal: 12,
    fontSize: RFValue(11),
    padding: 5,
    color: config.colors.white,
    alignItems: 'center',
    fontFamily: 'Rubik-Regular',
  },
  errorView: {
    borderWidth: 1,
    borderColor: config.colors.errorText,
  },
  errorTextInput: {
    color: config.colors.errorText,
  },
  errorText: {
    color: config.colors.errorText,
    marginHorizontal: 20,
    fontSize: RFValue(12),
    marginBottom: 4,
  },
  eyeIcon: {
    height: 40,
    width: 40,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppTextInput;
