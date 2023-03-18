const {
  USERNAME_REGEX,
  mailformat,
  phoneNumberRegex,
  passRegx,
} = require('../constants/Regex');

function validateUser(fieldValue = state) {
  let temp = {};
  if ('userName' in fieldValue) {
    temp.userName =
      fieldValue.userName.trim() == ''
        ? 'User name is required'
        : !fieldValue.userName.match(USERNAME_REGEX)
        ? 'Please enter valid user name'
        : '';
  }

  if ('phone' in fieldValue) {
    temp.phone =
      fieldValue.phone.trim() == ''
        ? 'Phone number is required'
        : !fieldValue.phone.match(phoneNumberRegex)
        ? 'Please enter valid phone number'
        : '';
  }
  if ('email' in fieldValue) {
    temp.email =
      fieldValue.email.trim() == ''
        ? 'Email is required'
        : !fieldValue.email.match(mailformat)
        ? 'Please enter valid email'
        : '';
  }
  if ('password' in fieldValue) {
    temp.password =
      fieldValue.password.trim() == ''
        ? 'password is required'
        : !fieldValue.password.match(passRegx)
        ? 'Please enter valid password'
        : '';
  }
  if ('confirmPassword' in fieldValue) {
    temp.confirmPassword =
      fieldValue.confirmPassword.trim() == ''
        ? 'Confirm password is required'
        : fieldValue.confirmPassword.trim() !== fieldValue.password.trim()
        ? 'Password and Confirm password not matched'
        : '';
  }

  console.log('validateUser temp===>', temp);
  return temp;
}

export default validateUser;
