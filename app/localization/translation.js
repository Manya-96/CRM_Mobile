import LocalizedStrings from 'react-native-localization';
import english from './en.js';

export const localizedStrings = new LocalizedStrings({
  en: english,
});

export const changeLaguage = languageKey => {
  localizedStrings.setLanguage(languageKey);
};
