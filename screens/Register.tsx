import { SafeAreaView, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { CustomInput, InputHandle } from '../components/CustomInput';
import { styles } from '../styles/styles';
import { CustomButton } from '../components/CustomButton';
import React, { useRef, useState } from 'react';

export default function Register({ navigation } : any) {
  const [userRegisterDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const emailRef = useRef<InputHandle>(null);
  const passwordRef = useRef<InputHandle>(null);
  const confirmPasswordRef = useRef<InputHandle>(null);
  const firstNameRef = useRef<InputHandle>(null);
  const lastNameRef = useRef<InputHandle>(null);
  const onSubmit = async () => {
    try {
      userRegisterDetails.firstName = `${firstNameRef.current?.getValue()}`;
      userRegisterDetails.lastName = `${lastNameRef.current?.getValue()}`;
      userRegisterDetails.email = `${emailRef.current?.getValue()}`;
      userRegisterDetails.password = `${passwordRef.current?.getValue()}`;
      userRegisterDetails.confirmPassword = `${confirmPasswordRef.current?.getValue()}`;
      if (
        userRegisterDetails.firstName === '' ||
        userRegisterDetails.lastName === '' ||
        userRegisterDetails.email === '' ||
        userRegisterDetails.password === ''
      )
        throw Error('Please fill all fields');
      if (userRegisterDetails.password !== userRegisterDetails.confirmPassword)
        throw Error('Password and Confirm Password are not the same');
      Alert.alert('Great Work', 'Page is running Successfully', [
        {
          text: 'Cancel',
          onPress: () => '',
          style: 'cancel',
        },
        { text: 'OK', onPress: () => {
          
        }},
      ])
    } catch (error: any) {
      Alert.alert('Something Went Wrong', error.message, [
        { text: 'OK', onPress: () => '' },
      ]);
    }
  };

  return (
    <SafeAreaView  style={styles.container}>
      <View style={ styles.imageContainer }>
        <Image
          style={ styles.image }
          source={ require('../assets/drinkerKoala.png') }
        />
        <Text style={ styles.welcomeText }> {'MyDrinkingPal'}</Text>
      </View>


      <CustomInput ref={ firstNameRef } label={'First Name'} />
      <CustomInput ref={ lastNameRef } label={'Last Name'} />
      <CustomInput ref={ emailRef } label={'email@example.com'} />
      <CustomInput ref={ passwordRef } label={'Your Password'} isPassword={true} />
      <CustomInput ref={ confirmPasswordRef } label={'Re-write Password'} isPassword={true} />
      <CustomButton label={'SIGN UP'} onPress={ onSubmit} />

      <View style={ styles.signInQuestionContainer }>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => {
              navigation.navigate('Login');
          }}>
          <Text style={ styles.clickableText }>SIGN IN!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
