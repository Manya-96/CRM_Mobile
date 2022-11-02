import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Dimensions, Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import config from '../config';
import { DoubleLeftIcon, DoubleRightIcon, LeftIcon, RightIcon } from '../utils/icon';

const screenWidth = Dimensions.get('screen').width;

const AppFlatList = ({ items, headerItems, headerItemStyle, renderItem }) => {
  const renderHeaderComponent = () => {
    return (
      <View style={styles.rowContainer}>
        {headerItems.map((item, index) => (
          <Text key={index.toString()} style={[styles.rowText, headerItemStyle]}>
            {item}
          </Text>
        ))}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} horizontal bounces={false}>
        <FlatList
          scrollEnabled={false}
          data={items}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={renderHeaderComponent}
        />
      </ScrollView>
      <View style={styles.paginationContainer}>
        <Pressable style={styles.buttonContainer}>
          {DoubleLeftIcon(16, config.colors.grayDim)}
        </Pressable>
        <Pressable style={styles.buttonContainer}>{LeftIcon(16, config.colors.grayDim)}</Pressable>
        <View style={styles.pageNoContainer}>
          <Text style={styles.pageNumberText}>1</Text>
        </View>
        <Pressable style={styles.buttonContainer}>{RightIcon(16, config.colors.grayDim)}</Pressable>
        <Pressable style={styles.buttonContainer}>
          {DoubleRightIcon(16, config.colors.grayDim)}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  scrollContainer: { paddingHorizontal: 16 },
  rowContainer: { flexDirection: 'row', width: '100%' },
  rowText: {
    fontSize: RFValue(12),
    alignSelf: 'center',
    color: config.colors.midGray,
    fontFamily: 'Rubik-Medium',
    width: (screenWidth - 48) / 4,
    marginVertical: 6,
    paddingRight: 4,
  },
  paginationContainer: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonContainer: { height: 40, width: 40, justifyContent: 'center', alignItems: 'center' },
  pageNoContainer: {
    margin: 4,
    height: 24,
    minWidth: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageNumberText: {
    fontSize: RFValue(14),
    color: config.colors.grayDim,
    fontFamily: 'Rubik-Regular',
  },
});

export default AppFlatList;
