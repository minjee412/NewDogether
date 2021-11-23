import styled from '@emotion/native';
import { SafeAreaView, View, Text } from 'react-native'

export const SafeArea = styled(SafeAreaView)`
    flex:1;
    /* background-color: skyblue; */
    background-color: #222222;
    /* padding-top: 5px; */
    border-radius: 20px;
`

export const NickName_Wrapper = styled(View)`
    flex: 1;
    display:flex;
    flex-direction:column;
`

export const NickName = styled(View)`
    flex: 0.3;
    display:flex;
`

export const NickName_Title = styled(Text)`
    font-size: 16px;
    margin-left: 20px;
    font-weight: bold;
    color: white;
    margin-top: 10px;
`

export const ChangeNickName = styled(View)`
    flex:0.3;
    display:flex;
    padding-top:5px;
    background-color: #222222;
`

export const NickNameInput = styled(Text)`
    font-size: 16px;
    margin-top:5px;
    margin-left:18px;
    margin-right: 20px;
    color: white;
    border-radius: 10px;
    
`

