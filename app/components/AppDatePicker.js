import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, Pressable, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import config from '../config';
import DatePicker from 'react-native-date-picker';
import { downArrowIcon } from '../utils/icon';
import moment from 'moment';

const AppDatePicker = ({
  mode,
  show,
  onPress,
  dateSelected,
  currentDate,
  placeholderText,
  ...props
}) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <>
      <Pressable
        onPress={() => setShowPicker(!showPicker)}
        style={[styles.dateDropDown, { marginHorizontal: 1.5 }]}>
        <Text style={[styles.from, { fontSize: 8 }]}>
          {currentDate != null ? moment(currentDate).format('DD/MM/YYYY') : placeholderText}
        </Text>
        <View style={styles.icon}>{downArrowIcon(10, config.colors.grayTheme)()}</View>
      </Pressable>
      {showPicker ? (
        <DatePicker
          {...props}
          modal
          mode={mode}
          open={showPicker}
          date={currentDate ? new Date(currentDate) : new Date()}
          onConfirm={date => {
            setShowPicker(false);
            dateSelected(date);
          }}
          onCancel={() => {
            setShowPicker(false);
          }}
        />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  icon: { marginHorizontal: 5 },
  from: {
    alignSelf: 'center',
    fontFamily: 'Rubik-Regular',
    color: config.colors.grayTheme,
    marginHorizontal: 7,
  },
  dateDropDown: {
    width: 78,
    height: 30,
    borderRadius: 5,
    backgroundColor: config.colors.screenBG,
    borderColor: config.colors.white,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default AppDatePicker;
