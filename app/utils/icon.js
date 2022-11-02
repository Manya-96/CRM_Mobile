import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

const IoniconsIcon = name => {
  return (size, color) => () => <Ionicons name={name} size={size} color={color} />;
};

const MaterialCommunityIconsIcon = name => {
  return (size, color) => () => <MaterialCommunityIcons name={name} size={size} color={color} />;
};

const FontistoIcon = name => {
  return (size, color) => () => <Fontisto name={name} size={size} color={color} />;
};

const AntDesignIcon = name => {
  return (size, color) => () => <AntDesign name={name} size={size} color={color} />;
};

export const EyeOpenIcon = IoniconsIcon('md-eye-outline');
export const EyeCloseIcon = IoniconsIcon('md-eye-off-outline');
export const UnCheckIcon = MaterialCommunityIconsIcon('checkbox-blank-outline');
export const CheckIcon = IoniconsIcon('checkbox');
export const BackIcon = IoniconsIcon('chevron-back');
export const downArrowIcon = FontistoIcon('angle-down');
export const RightIcon = AntDesignIcon('right');
export const LeftIcon = AntDesignIcon('left');
export const DoubleRightIcon = AntDesignIcon('doubleright');
export const DoubleLeftIcon = AntDesignIcon('doubleleft');
