import React from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import { Image, View } from 'react-native';
import MainListNavigation from '../navigation/MainListNavigation';
import styled from '@emotion/native';

// import LoginScreen from '..';
// import {View, Text} from 'react-native'


const Wrapper = styled(View)`
  flex:1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F5FBFF;
`


const Logo = styled(Image)`
  flex: 0.115;
  width: 75%;
  /* height: 0%; */
  /* resize: contain; */
  margin-bottom: 30px;
  /* border: 1px solid black; */
`



export default function LoginPage({navigation}){

  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '911390576388-7f5qjqe9uah6c6n8v9vginmqt3pnc1kg.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress(props) {
    console.log('ffff')

    const { idToken } = await GoogleSignin.signIn();
    console.log(idToken);
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  }

  if (loggedIn) {
    return (
      navigation.navigate('MainListNavigation')
    )
  }


    // ... other codes

    auth().onAuthStateChanged((user) => {
        if (user) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
    });
    

    return (
      
      <Wrapper>
        <Logo source={require('../../public/images/Logo/DogetherLogo.png')}/>
        <GoogleSigninButton onPress={onGoogleButtonPress} />
      </Wrapper>

    )    
}