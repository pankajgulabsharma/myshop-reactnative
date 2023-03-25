import React, {useState, useEffect} from 'react';
import {View, ImageBackground, ScrollView} from 'react-native';
import styles from './styles';
import CustomInput from '../../componets/common/custominput';
import {Button, Text} from '../../componets/elements';
import AppConstants from '../../constants/AppConstants';
import {buttonColor} from '../../constants/AppStyles';
import validateUser from '../../utils/validateUser';
import {navigate} from '../../navigation/NavigatorService';
import ScreenNames from '../../constants/ScreenNames';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const Signup = () => {
  const initialState = {
    userName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };
  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    console.log('===Signup====');
    // return () => {
    //   setUser(initialState);
    //   setErrors({});
    // };
  }, []);

  const handleChange = (name, value) => {
    // console.log('name===', name);
    // console.log('value===', value);
    setUser({...user, [name]: value});
  };

  const handleSubmit = async () => {
    let validationArray = await validateUser(user);
    // console.log('validationArray ===>', validationArray);
    let isValid = Object.values(validationArray).every(x => x == '');
    // console.log('isValid ===>', isValid);

    if (isValid) {
      // console.log('User data==>', user);
      setUser(initialState);
      setErrors({});
    } else {
      // console.log('User error==>', validationArray);
      setErrors(validationArray);
    }
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ImageBackground
          source={require('../../assets/images/login/shopping_cart.png')}
          resizeMode="contain"
          style={styles.imageBackground}></ImageBackground>
        <Text TextStyle={styles.loginText}>{AppConstants.appName}</Text>
      </View>
      <Text TextStyle={styles.loginText}>{AppConstants.signup}</Text>
      <View style={styles.inputContainer}>
        <CustomInput
          focus={true}
          value={user.userName}
          onChangeText={text => handleChange('userName', text)}
          inputstyle={styles.inputstyle}
          customInputContainer={styles.customInputContainer}
          placeholder="Enter User Name"
          iconLeftName="person"
        />
        {errors?.userName ? (
          <Text TextStyle={styles.errorText}>{errors.userName}</Text>
        ) : null}
      </View>
      <View style={styles.inputContainer}>
        <CustomInput
          value={user.email}
          onChangeText={text => handleChange('email', text)}
          inputstyle={styles.inputstyle}
          customInputContainer={styles.customInputContainer}
          placeholder="Email"
          keyboardType="email-address"
          iconLeftName="alternate-email"
        />
        {errors?.email ? (
          <Text TextStyle={styles.errorText}>{errors.email}</Text>
        ) : null}
      </View>
      <View style={styles.inputContainer}>
        <CustomInput
          value={user.phone}
          onChangeText={text => handleChange('phone', text)}
          inputstyle={styles.inputstyle}
          customInputContainer={styles.customInputContainer}
          placeholder="Phone"
          keyboardType="numeric"
          iconLeftName="phone"
        />
        {errors?.phone ? (
          <Text TextStyle={styles.errorText}>{errors.phone}</Text>
        ) : null}
      </View>
      <View style={styles.inputContainer}>
        <CustomInput
          value={user.password}
          onChangeText={text => handleChange('password', text)}
          inputstyle={styles.inputstyle}
          customInputContainer={styles.customInputContainer}
          placeholder="Password"
          iconLeftName="vpn-key"
          iconRightName={isPasswordVisible ? 'visibility' : 'visibility-off'}
          isIconRight={true}
          secureTextEntry={isPasswordVisible ? false : true}
          iconRightPress={() => setIsPasswordVisible(!isPasswordVisible)}
        />
        {errors?.password ? (
          <Text TextStyle={styles.errorText}>{errors.password}</Text>
        ) : null}
      </View>
      <View style={styles.inputContainer}>
        <CustomInput
          value={user.confirmPassword}
          onChangeText={text => handleChange('confirmPassword', text)}
          inputstyle={styles.inputstyle}
          customInputContainer={styles.customInputContainer}
          placeholder="Confirm Password"
          iconLeftName="vpn-key"
          iconRightName={isPasswordVisible ? 'visibility' : 'visibility-off'}
          isIconRight={true}
          secureTextEntry={isPasswordVisible ? false : true}
          iconRightPress={() => setIsPasswordVisible(!isPasswordVisible)}
        />
        {errors?.confirmPassword ? (
          <Text TextStyle={styles.errorText}>{errors.confirmPassword}</Text>
        ) : null}
      </View>
      <Button
        type="text"
        title={`${AppConstants.forgotPassword} ?`}
        addonTextContainerStyle={styles.forgotTextContainerStyle}
        addonTextStyle={styles.forgotTextStyle}
      />

      <View style={{paddingBottom: responsiveWidth(7)}}>
        <Button
          title={AppConstants.signup}
          rippleColor={buttonColor.BUTTON_DANGER}
          addonPrimaryStyle={styles.loginButton}
          addonPrimaryTextStyle={styles.logintext}
          onPress={handleSubmit}
        />
        <Button
          title={AppConstants.login}
          rippleColor={buttonColor.BUTTON_DANGER}
          addonPrimaryStyle={styles.loginButton}
          addonPrimaryTextStyle={[styles.logintext]}
          onPress={() => navigate(ScreenNames.Login)}
        />
      </View>
    </ScrollView>
  );
};

export default Signup;
