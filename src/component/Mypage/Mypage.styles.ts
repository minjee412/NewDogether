import styled from '@emotion/native';
import {Image, SafeAreaView, View, Text} from 'react-native'




export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    background-color: gray;
    
`
export const SafeAreaTop = styled(View)`
    flex:0.1;
    background-color:yellow;
    display: flex;
    flex-direction: row;
`


export const Button = styled(Image)`
    width: 20px;
    height: 20px;
`

export const HeaderTitle = styled(Text)`
    width: 160px;
    text-align: center;
    /* font-family: ; */
    font-size: 20px;
    font-weight : 700;
    color: #000000;
`
export const UserInformationWrapper = styled(View)`
    flex: 0.3;
    background-color: blue;
`

export const NickNameWrapper = styled(View)`
    flex: 0.3;
`