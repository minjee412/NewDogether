import React from 'react';
import auth, {firebase} from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';
import {Image, View} from 'react-native';
import MainListNavigation from '../stack/MainListNavigation';
import styled from '@emotion/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import ActivityIndicator from './ActivityIndicator/index';

export default function LoginPage() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '911390576388-7f5qjqe9uah6c6n8v9vginmqt3pnc1kg.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    console.log('로그인버튼누르기전입니다');

    const userInfo: any = await GoogleSignin.signIn();
    console.log(userInfo.idToken);
    AsyncStorage.setItem('accessToken', userInfo.idToken);
    const googleCredential = auth.GoogleAuthProvider.credential(
      userInfo.idToken,
    );
    firestore().collection('Users').get(userInfo.user);
    return auth().signInWithCredential(googleCredential);
  }

  if (loggedIn) {
    return (
      <>
        <ActivityIndicator />
        <MainListNavigation />
      </>
    );
  }
  auth().onAuthStateChanged(user => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <Wrapper>
      {/* <LogoView>   */}
        
        <Logo 
          source={require('../../public/images/Logo/MovitesLogo.png')}
          // resizeMode='contain' 
        />
      {/* </LogoView> */}
      <GoogleSigninButton onPress={onGoogleButtonPress} />
    </Wrapper>
  );
}

const Wrapper = styled(View)`
  width: 375px;
  height: 667px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d0d0d;

`;

// const LogoView = styled(View)`
//   flex: 0.1;
// `
const Logo = styled(Image)`

  width: 260px;
  height: 100px;
  /* justify-content: center;
  align-items: center; */
  margin-bottom: 50px;
  /* display:flex; */
  background-color: #0d0d0d;
`;
