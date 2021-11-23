import styled from '@emotion/native';
import { SafeAreaView, View, Text } from 'react-native';

export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    background-color: #222222;
    display:flex;
    border-radius: 20px;
`
export const Header = styled(View)`
    /* background-color: red; */
    display:flex;
    justify-content: center;
    flex:0.2;
`
export const Header_Title = styled(Text)`
    font-size: 16px;
    margin-left: 25px;
    font-weight: bold;
    color:white;
    margin-top: 25px;
`
export const MyFriendList = styled(View)`
    flex:0.8;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    margin-left:40px;
    margin-right:40px;
    margin-top: 18px;
`

export const FriendText =styled(Text)`
    color:white;
    font-size: 18px;
`