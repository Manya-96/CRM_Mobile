import { localizedStrings } from '../../localization/translation';
import {
  callback,
  check,
  dashboard,
  deposit,
  documents,
  lock,
  logout,
  personalInfo,
  refer,
  support,
  trading,
  transactions,
  twoFactor,
  withdraw,
} from '../../assets/images';
import config from '../../config';

export const drawerCellAction = () => {
  const cellAction = [
    {
      cellText: localizedStrings.DASHBOARD,
      leftImage: dashboard,
      routeName: config.routes.DASHBOARD,
    },
    {
      cellText: localizedStrings.DEPOSIT,
      leftImage: deposit,
      routeName: config.routes.DEPOSIT,
    },
    {
      cellText: localizedStrings.WITHDRAW,
      leftImage: withdraw,
      routeName: config.routes.WITHDRAW,
    },
    {
      cellText: localizedStrings.TRADING_INFO,
      leftImage: trading,
      routeName: config.routes.TRADING_INFO,
    },
    {
      cellText: localizedStrings.TRANSACTION_HISTORY,
      leftImage: transactions,
      routeName: config.routes.TRANSACTIONS,
    },
    {
      cellText: localizedStrings.DOCUMENTS,
      leftImage: documents,
      routeName: config.routes.DOCUMENTS,
    },
    {
      cellText: localizedStrings.TWO_FACTOR_AUTHENTICATION,
      leftImage: twoFactor,
      routeName: config.routes.TWO_FACTOR,
    },
  ];
  return cellAction;
};

export const drawerFooterItems = () => {
  const cellAction = [
    {
      cellText: localizedStrings.REQUEST_CALLBACK,
      leftImage: callback,
    },
    {
      cellText: localizedStrings.REFER_FRIEND,
      leftImage: refer,
    },
    {
      cellText: localizedStrings.SUPPORT_EMAIL,
      leftImage: support,
    },
  ];
  return cellAction;
};

export const drawerHeaderMenuItems = () => {
  const cellAction = [
    {
      leftImage: personalInfo,
    },
    {
      leftImage: lock,
    },
    {
      leftImage: check,
    },
    {
      leftImage: logout,
    },
  ];
  return cellAction;
};
