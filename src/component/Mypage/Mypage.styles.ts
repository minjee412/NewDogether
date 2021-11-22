import styled from '@emotion/native';
import {Image, SafeAreaView, View, Text} from 'react-native'




export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    background-color: #0d0d0d;
`
export const SafeAreaTop = styled(View)`
    flex:0.15;    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const Button = styled(Image)`
    width: 20px;
    height: 20px;
`
export const HeaderTitle = styled(Text)`
    display:flex;
    text-align: center;
    font-size: 20px;
    font-weight : 700;
    color: white;
`
export const UserInformationWrapper = styled(View)`
    flex: 0.4;
    /* background-color: grey; */
`

export const NickNameWrapper = styled(View)`
    flex: 0.15;
    
    padding: 10px 10px;
`

// export const MyFriendListWrapper = styled(View)`
//     flex: 0.4;
//     margin-top: 20px;
// `
export const LogoutButtonWrapper = styled(View)`
    flex: 0.15;
`

export const PushWrapper = styled(View)`
    flex: 0.15;
    padding: 10px 10px;
`
