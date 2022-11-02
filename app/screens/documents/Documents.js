import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Pressable,
  ScrollView,
} from 'react-native';
import config from '../../config';
import { refresh } from '../../assets/images';
import { localizedStrings } from '../../localization/translation';
import { RFValue } from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';
import { AppDropDown, AppButton, AppFlatList } from '../../components';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const documents = ['Proof of Identity', 'Proof of Residence', 'Deposits', 'Others'];

const documentDetails = [
  localizedStrings.DOCUMENT_CATEGORY,
  localizedStrings.DOCUMENT_NAME,
  localizedStrings.DOCUMENT_STATUS,
  localizedStrings.FRONT_IMAGE,
];

const info = [
  {
    documentCategory: 'Proof of Residence',
    documentName: 'Utility Bill',
    documentStatus: 'Success',
    frontImg: '178.50',
    backImg: '180.5',
    esign: '24',
  },
  {
    documentCategory: 'Proof of Residence',
    documentName: 'Utility Bill',
    documentStatus: 'Success',
    frontImg: '178.50',
    backImg: '180.5',
    esign: '24',
  },
  {
    documentCategory: 'Proof of Residence',
    documentName: 'Utility Bill',
    documentStatus: 'Success',
    frontImg: '178.50',
    backImg: '180.5',
    esign: '24',
  },
  {
    documentCategory: 'Proof of Residence',
    documentName: 'Utility Bill',
    documentStatus: 'Success',
    frontImg: '178.50',
    backImg: '180.5',
    esign: '24',
  },
  {
    documentCategory: 'Proof of Residence',
    documentName: 'Utility Bill',
    documentStatus: 'Success',
    frontImg: '178.50',
    backImg: '180.5',
    esign: '24',
  },
];

const headerItems = [
  localizedStrings.DOCUMENT_CATEGORY,
  localizedStrings.DOCUMENT_NAME,
  localizedStrings.DOCUMENT_STATUS,
  localizedStrings.FRONT_IMAGE,
  localizedStrings.BACK_IMAGE,
  localizedStrings.ESIGN,
];

const Documents = ({ navigation }) => {
  const [documentUpload, setDocumentUpload] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [documentFront, setDocumentFront] = useState('');
  const [documentBack, setDocumentBack] = useState('');

  const itemSelected = item => {
    setDocumentUpload(item);
  };

  const typeSelected = item => {
    setDocumentType(item);
  };

  const renderItem = ({ item, index }) => {
    return (
      <>
        <View style={styles.rowContainer}>
          <Text style={styles.rowText}>{item.documentCategory}</Text>
          <Text style={styles.rowText}>{item.documentName}</Text>
          <Text style={styles.rowText}>{item.documentStatus}</Text>
          <Text style={styles.rowText}>{item.frontImg}</Text>
          <Text style={styles.rowText}>{item.backImg}</Text>
          <Text style={styles.rowText}>{item.esign}</Text>
        </View>
        <View style={styles.divider} />
      </>
    );
  };

  const handleFrontDoc = () => {
    SheetManager.show('mysheet');
  };

  const handleTakeImg = async () => {
    const options = {
      mediaType: 'photo',
    };
    const result = await launchCamera(options);
    setDocumentFront(result.assets[0].uri);
    await SheetManager.hide('mysheet');
  };

  const handleUploadFromGallery = async () => {
    const options = {
      mediaType: 'photo',
    };
    const result = await launchImageLibrary(options);
    setDocumentFront(result.assets[0].uri);
    await SheetManager.hide('mysheet');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={[styles.row, styles.paddingHori]}>
          <Text style={styles.title}>{localizedStrings.DOCUMENTS_UPLOAD}</Text>
          <Pressable>
            <Image style={styles.refreshIcon} source={refresh} />
          </Pressable>
        </View>

        <LinearGradient
          colors={config.colors.unselectedAccountGradient}
          style={styles.documentContainer}>
          <View style={styles.input}>
            <Text style={styles.acNo}>
              {localizedStrings.DOCUMENT_CATEGORY}
              <Text style={styles.asterisk}>*</Text>
            </Text>

            <AppDropDown
              items={documents}
              containerStyle={styles.dropdownContainer}
              title={localizedStrings.SELECT}
              dropdownWidthStyle={styles.dropdown}
              itemSelected={itemSelected}
              selectedItem={documentUpload}
            />
          </View>

          <View style={[styles.input, styles.topStyling]}>
            <Text style={styles.acNo}>
              {localizedStrings.DOCUMENT_TYPE}
              <Text style={styles.asterisk}>*</Text>
            </Text>

            <AppDropDown
              items={documents}
              containerStyle={styles.dropdownContainer}
              title={localizedStrings.SELECT}
              dropdownWidthStyle={styles.dropdown}
              itemSelected={typeSelected}
              selectedItem={documentType}
            />
          </View>

          <View style={styles.documentHead}>
            <Text style={styles.acNo}>
              {localizedStrings.DOCUMENT_FRONT}
              <Text style={styles.asterisk}>*</Text>
            </Text>
            <View style={styles.rowing}>
              <AppButton
                gradientColor={config.colors.appTheme2Gradient}
                buttonStyle={styles.uploadBtn}
                textStyle={styles.uploadTxt}
                text={localizedStrings.UPLOAD_FILE}
                onPress={handleFrontDoc}
              />
              <Text style={styles.selected}>
                {documentFront ? '  file selected  ' : localizedStrings.NO_FILE_SELECTED}
              </Text>
            </View>
          </View>

          <Text numberOfLines={2} style={styles.size}>
            {localizedStrings.DOCUMENT_SIZE}
          </Text>

          {documentUpload === 'Proof of Identity' ? (
            <>
              <View style={styles.documentHead}>
                <Text style={styles.acNo}>
                  {localizedStrings.DOCUMENT_BACK}
                  <Text style={styles.asterisk}>*</Text>
                </Text>
                <View style={styles.rowing}>
                  <AppButton
                    gradientColor={config.colors.appTheme2Gradient}
                    buttonStyle={styles.uploadBtn}
                    textStyle={styles.uploadTxt}
                    text={localizedStrings.UPLOAD_FILE}
                    onPress={() => console.log('back docss')}
                  />
                  <Text style={styles.selected}>{localizedStrings.NO_FILE_SELECTED}</Text>
                </View>
              </View>

              <Text numberOfLines={2} style={styles.size}>
                {localizedStrings.DOCUMENT_SIZE}
              </Text>
            </>
          ) : null}

          <View style={styles.btnHead}>
            <AppButton
              gradientColor={config.colors.appTheme3Gradient}
              buttonStyle={styles.submitBtn}
              textStyle={styles.submitTxt}
              text={localizedStrings.SUBMIT}
              onPress={() => console.log('yess consoling')}
            />
          </View>
          <View style={styles.emptySpace} />

          <AppFlatList items={info} headerItems={headerItems} renderItem={renderItem} />
        </LinearGradient>

        <View style={styles.bottom}>
          <Text style={styles.records}>
            {localizedStrings.TOTAL_RECORDS} {localizedStrings.TOTAL_PAGE}
          </Text>
        </View>

        <ActionSheet id={'mysheet'}>
          <View style={styles.sheetHead}>
            <AppButton
              gradientColor={config.colors.appTheme2Gradient}
              buttonStyle={styles.takeImgBtn}
              textStyle={styles.takeImgTxt}
              text={localizedStrings.TAKE_IMAGE}
              onPress={handleTakeImg}
            />
            <AppButton
              gradientColor={config.colors.appTheme2Gradient}
              buttonStyle={[styles.takeImgBtn, styles.extraSpce]}
              textStyle={styles.takeImgTxt}
              text={localizedStrings.UPLOAD_FROM_GALLERY}
              onPress={handleUploadFromGallery}
            />
          </View>
        </ActionSheet>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  refreshIcon: { height: 24, width: 24 },

  emptySpace: {
    height: 20,
  },
  records: {
    marginHorizontal: 15,
    fontFamily: 'Rubik-Regular',
    color: config.colors.lightGrey,
    fontSize: 11,
  },
  bottom: {
    height: 30,
    justifyContent: 'center',
    paddingBottom: 15,
  },
  listHead: {
    marginTop: 10,
  },
  extraSpce: {
    marginTop: 20,
  },
  sheetHead: {
    height: 160,
    width: screenWidth,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  takeImgTxt: {
    fontFamily: 'Rubik-SemiBold',
    color: config.colors.white,
    fontSize: 16,
  },
  takeImgBtn: {
    width: '80%',
    alignSelf: 'center',
    height: 40,
  },
  rowContainer: { flexDirection: 'row' },
  rowText: {
    fontSize: RFValue(12),
    alignSelf: 'center',
    color: config.colors.midGray,
    fontFamily: 'Rubik-Regular',
    width: (screenWidth - 48) / 4,
    marginVertical: 6,
    paddingRight: 4,
  },
  btnHead: {
    width: '73%',
    alignItems: 'flex-end',
  },
  size: {
    fontFamily: 'Rubik-Italic',
    fontSize: 9,
    color: config.colors.grayTheme,
    alignSelf: 'flex-end',
    width: '48%',
    marginVertical: 10,
  },
  documentHead: { flexDirection: 'row', paddingHorizontal: 15, justifyContent: 'space-between' },
  selected: {
    fontFamily: 'Rubik-Regular',
    fontSize: 9,
    color: config.colors.grayTheme,
    alignSelf: 'center',
    marginHorizontal: 4,
  },
  rowing: {
    flexDirection: 'row',
  },
  uploadTxt: {
    fontFamily: 'Rubik-Medium',
    fontSize: 11,
    color: config.colors.white,
  },
  submitTxt: {
    fontFamily: 'Rubik-Regular',
    fontSize: 11,
    color: config.colors.white,
  },
  submitBtn: {
    height: 25,
    width: 76,
  },
  uploadBtn: {
    width: 86,
    height: 25,
  },
  topStyling: {
    marginVertical: 10,
  },
  dropdownContainer: {
    width: 160,
    height: 33,
  },
  dropdown: { width: 160, height: 90 },
  acNo: {
    fontSize: RFValue(11),
    color: config.colors.midGray,
  },
  asterisk: {
    fontSize: RFValue(11),
    color: config.colors.red,
  },
  input: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  documentContainer: {
    flex: 1,
    margin: 16,
    paddingTop: 16,
    borderRadius: 10,
    paddingBottom: 20,
    borderColor: config.colors.white,
    borderWidth: 1,
  },
  paddingHori: {
    paddingHorizontal: 15,
    marginTop: 25,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Rubik-Bold',
    color: config.colors.inputBG,
  },
  container: {
    flex: 1,
    backgroundColor: config.colors.screenBG,
  },
});

export default Documents;
