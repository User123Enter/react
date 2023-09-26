import { SafeAreaView, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { CustomInput, InputHandle } from '../components/CustomInput';
import { styles } from '../styles/styles';
import { CustomButton } from '../components/CustomButton';
import React, { useRef, useState } from 'react';
import login from '../data/login';


export default function Login({ navigation } : any) {
  const emailRef = useRef<InputHandle>(null);
  const passwordRef = useRef<InputHandle>(null);
  const [userLoginDetails] = useState({
    email: '',
    password: ''
  });
  const onSubmit = async () : Promise<void> => {
    try {
      userLoginDetails.email = `${emailRef.current?.getValue()}`;
      userLoginDetails.password = `${passwordRef.current?.getValue()}`;
      if (
        userLoginDetails.email === '' ||
        userLoginDetails.password === ''
      )
        throw Error('Please fill all fields');
      else {
        const loginRequest: any = await login(userLoginDetails);
        const statusCode = loginRequest.status;
        const response = await loginRequest.json();
        if(statusCode !== 200)
          throw Error(response.message);
        else
          console.log(response.token)
      }
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
          source={require('../assets/drinkerKoala.png')}
        />
        <Text style={ styles.welcomeText }> {'MyDrinkingPal'}</Text>
      </View>


      <CustomInput ref={ emailRef } label={'email@example.com'} />
      <CustomInput ref={ passwordRef } label={'Your Password'} isPassword={true} />
      <CustomButton label={'SIGN IN'} onPress={ onSubmit } />

      <View style={ styles.signInQuestionContainer }>
        <Text>Do not have an account?</Text>
        <TouchableOpacity onPress={() => {
            navigation.navigate('Register');
        }}>
          <Text style={ styles.clickableText }>SIGN UP!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
