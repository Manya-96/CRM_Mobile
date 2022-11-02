import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
  View,
  FlatList,
} from 'react-native';
import { logoWhite, bg } from '../../assets/images';
import { localizedStrings } from '../../localization/translation';
import config from '../../config';
import { AppTextInput, AppButton } from '../../components';
import { RFValue } from 'react-native-responsive-fontsize';
import { BackIcon } from '../../utils/icon';

const CountryList = ({ navigation, route }) => {
  const [searchText, setSearchText] = useState('');
  const [countries, setCountries] = useState(config.countries);

  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => {
          route.params.onGoBack(item);
          navigation.goBack();
        }}>
        <View style={[styles.rowContainer]}>
          <Text style={[styles.flag]}>{item.flag}</Text>
          <View style={styles.itemContainer}>
            <Text style={[styles.countryName]}>{item.en}</Text>
            <Text style={[styles.dialCode]}>{`${item.dialCode}`}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  const searchCountry = text => {
    if (!text || text === '') {
      setCountries(config.countries);
    } else {
      const filteredCountries = config.countries.filter(item =>
        item.en.toLowerCase().match(text.toLowerCase())
      );
      setCountries(filteredCountries);
    }
    setSearchText(text);
  };

  return (
    <ImageBackground source={bg} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
          <Pressable
            style={styles.backButton}
            onPress={() => {
              navigation.goBack();
            }}>
            {BackIcon(24, config.colors.white)}
          </Pressable>
          <AppTextInput
            text={searchText}
            containerStyle={[styles.outerContainer]}
            placeholder={localizedStrings.SEARCH}
            onChangeText={searchCountry}
          />
        </View>
        <FlatList
          data={countries}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerView: { paddingLeft: 6, flexDirection: 'row', width: '100%', alignItems: 'center' },
  backButton: { height: 40, width: 40, alignItems: 'center', justifyContent: 'center' },
  dialCode: {
    fontSize: RFValue(15),
    color: config.colors.white,
  },
  countryName: {
    flex: 1,
    fontSize: RFValue(15),
    color: config.colors.white,
  },
  itemContainer: {
    flex: 1,
    paddingLeft: 5,
    flexDirection: 'row',
  },
  flag: {
    fontSize: 25,
  },
  divider: {
    height: 0.5,
    marginHorizontal: 10,
    backgroundColor: config.colors.white,
  },
  modalContainer: {
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    flex: 10,
    backgroundColor: 'white',
  },
  rowContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
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
  outerContainer: {
    marginHorizontal: 0,
    flex: 1,
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

export default CountryList;
