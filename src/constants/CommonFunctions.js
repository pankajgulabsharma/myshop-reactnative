/* eslint-disable prettier/prettier */

import AppConstants from './AppConstants';
import {colors} from './AppStyles';
import {mailformat} from './Regex';

export const toTitleCase = str =>
  str
    ? str.replace(
        /\w\S*/g,
        txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
      )
    : '';

// export const validateEmail = username => {
//   if (!username.match(mailformat)) {
//     return 'Invalid Email! Please enter a valid email';
//   } else {
//     return '';
//   }
// };

export const validateArray = text => {
  const validationArray = {
    upperCase: false,
    lowerCase: false,
    eightLetters: false,
    specialCharacters: false,
    number: false,
  };

  if (text.toString().search(/[0-9]/) < 0) {
    validationArray.number = true;
  }
  if (text.toString().search(/[!@#\$%\^&\*_]/) < 0) {
    validationArray.specialCharacters = true;
  }
  if (text.toString().length < 8) {
    validationArray.eightLetters = true;
  }
  if (text.toString().search(/[a-z]/) < 0) {
    validationArray.lowerCase = true;
  }
  if (text.toString().search(/[A-Z]/) < 0) {
    validationArray.upperCase = true;
  }
  if (text.toString().search(/[0-9]/) > 0) {
    validationArray.number = false;
  }
  if (text.toString().search(/[!@#\$%\^&\*_]/) > 0) {
    validationArray.specialCharacters = false;
  }
  if (text.toString().length > 8) {
    validationArray.eightLetters = false;
  }
  if (text.toString().search(/[a-z]/) > 0) {
    validationArray.lowerCase = false;
  }
  if (text.toString().search(/[A-Z]/) > 0) {
    validationArray.upperCase = false;
  }
  return validationArray;
};

// export const setApiPayload = data => {
//   const main = {
//     formData: {
//       channelId: -1,
//       timePeriod: graphType,
//     },
//     sessionData: {
//       userDetails: {
//         companyId: 869,
//         compName: 'ABC Corporation',
//         prodMaintenance: 2,
//         userId: 18569,
//         groupId: 1232,
//         userEmailId: 'pradnyesh.kadam@etpgroup.com',
//         isAdmin: 1,
//         isAllAccess: 1,
//         userName: 'Pradnyesh Kadam',
//         langCode: 'EN',
//       },
//       timezone: 'Asia/Calcutta',
//     },
//   };
// };

export const getCommaString = data => {
  return data?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const listArray = [
  {
    value: 'Orders',
    image: require('../assets/images/Group4919.png'),
    inventoryValue: 0,
  },
  {
    value: 'Inventory',
    image: require('../assets/images/Group2.png'),
    inventoryValue: 0,
  },
  {
    value: 'Logistics',
    image: require('../assets/images/Group3.png'),
    inventoryValue: 0,
  },
  {
    value: 'Product Information',
    image: require('../assets/images/Group4.png'),
    inventoryValue: 0,
  },
  {
    value: 'Sales Channels',
    image: require('../assets/images/Group5.png'),
    inventoryValue: 0,
  },
  {
    value: 'Services & Others',
    image: require('../assets/images/Group6.png'),
    inventoryValue: 0,
  },
];
export const statusArray = [
  {
    value: AppConstants.Low,
    color: colors.black4,
  },
  {
    value: AppConstants.Medium,
    color: colors.blue4,
  },
  {
    value: AppConstants.High,
    color: colors.brown2,
  },
  {
    value: AppConstants.Critical,
    color: colors.darkRed,
  },
];
