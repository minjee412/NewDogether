import styled from '@emotion/native';
import {Image, SafeAreaView, View, Text} from 'react-native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #0d0d0d;
`;
export const SafeAreaTop = styled(View)`

    flex:0.15;    
    display: flex;
    flex-direction: row;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
    padding-top: 30px;
    /* border: 1px solid lightgray; */
    padding-left: 20px;
    padding-right: 20px;
`

export const Button = styled(Image)`
  width: 20px;
  height: 20px;
`;
export const HeaderTitle = styled(Text)`
    display:flex;
    text-align: center;
    font-size: 20px;
    font-weight : 700;
    color: #ffbe0b;
`

export const UserInformationWrapper = styled(View)`
    flex: 0.4;
    /* background-color: grey; */
    padding-top:15px;
`

export const NickNameWrapper = styled(View)`
    flex: 0.20;
    padding: 10px 10px;
`

export const PushWrapper = styled(View)`
  flex: 0.1;
  padding: 10px 10px;
`;
