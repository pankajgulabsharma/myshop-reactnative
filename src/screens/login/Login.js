import React, {useState} from 'react';
import {View, ImageBackground, ScrollView} from 'react-native';
import styles from './styles';
import CustomInput from '../../componets/common/custominput';
import {Button, Text} from '../../componets/elements';
import AppConstants from '../../constants/AppConstants';
import {buttonColor} from '../../constants/AppStyles';
import validateUser from '../../utils/validateUser';
import {navigationRef} from '../../navigation/NavigatorService';
import ScreenNames from '../../constants/ScreenNames';

const Login = () => {
  const initialState = {
    email: '',
    password: '',
  };
  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // useEffect(() => {
  //   return () => {
  //     setUser(initialState);
  //     setErrors({});
  //   };
  // }, []);

  const handleChange = (name, value) => {
    setUser({...user, [name]: value});
  };

  const handleSubmit = async () => {
    let validationArray = await validateUser(user);
    let isValid = Object.values(validationArray).every(x => x == '');

    if (isValid) {
      setUser(initialState);
      setErrors({});
    } else {
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
      <Text TextStyle={styles.loginText}>{AppConstants.login}</Text>
      <View style={styles.inputContainer}>
        <CustomInput
          focus={true}
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

      <Button
        type="text"
        title={`${AppConstants.forgotPassword} ?`}
        addonTextContainerStyle={styles.forgotTextContainerStyle}
        addonTextStyle={styles.forgotTextStyle}
      />

      <Button
        title={AppConstants.login}
        rippleColor={buttonColor.BUTTON_DANGER}
        addonPrimaryStyle={styles.loginButton}
        addonPrimaryTextStyle={styles.logintext}
        onPress={handleSubmit}
      />
      <Button
        title={AppConstants.signup}
        rippleColor={buttonColor.BUTTON_DANGER}
        addonPrimaryStyle={styles.loginButton}
        addonPrimaryTextStyle={styles.logintext}
        onPress={() => navigationRef.navigate(ScreenNames.Signup)}
      />
    </ScrollView>
  );
};

export default Login;
