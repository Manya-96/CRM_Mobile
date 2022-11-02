import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { RFValue } from 'react-native-responsive-fontsize';
import config from '../config';
import { downArrowIcon } from '../utils/icon';

const AppDropDown = ({
  items,
  title,
  dropdownWidthStyle,
  itemSelected,
  selectedItem,
  containerStyle,
  textStyle,
}) => {
  const renderRow = item => {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.rowText}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <ModalDropdown
        options={items}
        renderRow={renderRow}
        saveScrollPosition={false}
        onSelect={(index, option) => {
          itemSelected(option);
        }}
        dropdownStyle={[styles.dropdown, dropdownWidthStyle]}>
        <View style={styles.dropdownContainerView}>
          <Text style={styles.text} numberOfLines={1}>
            {selectedItem ?? title}
          </Text>
          <View style={styles.icon}>{downArrowIcon(12, config.colors.grayTheme)()}</View>
        </View>
      </ModalDropdown>
    </View>
  );
};

const styles = StyleSheet.create({
  rowText: {
    fontSize: 14,
    fontWeight: '500',
    color: config.colors.grayTheme,
  },
  rowContainer: {
    height: 30,
    justifyContent: 'center',
    marginLeft: 8,
  },
  icon: {
    marginHorizontal: 2,
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: config.colors.grayTheme,
    fontSize: RFValue(12),
    fontFamily: 'Rubik-Regular',
    alignSelf: 'center',
    marginLeft: 8,
    flex: 1,
    textAlignVertical: 'center',
  },
  dropdown: {
    flex: 1,
    height: 120,
  },
  container: {
    backgroundColor: config.colors.screenBG,
    borderColor: config.colors.white,
    borderWidth: 1,
    borderRadius: 5,
  },
  dropdownContainerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    alignItems: 'center',
  },
});

export default AppDropDown;
