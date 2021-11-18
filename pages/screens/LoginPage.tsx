import React from 'react';
import auth, { firebase } from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import { Image, View } from 'react-native';
import MainListNavigation from '../navigation/MainListNavigation'
import styled from '@emotion/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore'
import ActivityIndicator from './ActivityIndicator/index'

export default function LoginPage() { 

  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '911390576388-7f5qjqe9uah6c6n8v9vginmqt3pnc1kg.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    console.log('로그인버튼누르기전입니다')

    const userInfo : any = await GoogleSignin.signIn();
    console.log(userInfo.idToken);
    AsyncStorage.setItem('accessToken', userInfo.idToken)
    const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
    firestore().collection("Users").get(userInfo.user)
    return auth().signInWithCredential(googleCredential);
  }

  if (loggedIn) {
    return (
      <>  
        <ActivityIndicator/>
        <MainListNavigation/>
      </>
    )
  }
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
      <GoogleSigninButton 
        onPress={onGoogleButtonPress}
      />
    </Wrapper>
  )    
}

const Wrapper = styled(View)`
  flex:1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F5FBFF;
`


const Logo = styled(Image)`
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`

