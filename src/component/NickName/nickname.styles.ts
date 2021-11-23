import styled from '@emotion/native';
import { SafeAreaView, View, Text } from 'react-native'

export const SafeArea = styled(SafeAreaView)`
    flex:1;
    /* background-color: skyblue; */
    background-color: #0d0d0d;
    /* padding-top: 5px; */
`

export const NickName_Wrapper = styled(View)`
    flex: 1;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
`

export const NickName = styled(View)`
    flex: 0.35;
    display:flex;
`

export const NickName_Title = styled(Text)`
    font-size: 16px;
    margin-left: 25px;
    font-weight: bold;
    color: white;
    margin-top: 10px;
`

export const ChangeNickName = styled(View)`
    flex:0.45;
    display:flex;
    background-color: #222222;
    /* #222222; */
    /* margin-top: 30px; */
    border-radius: 10px;
    /* align-items: center; */
    margin-left:25px;
    margin-right:25px;
`

export const NickNameInput = styled(Text)`
    font-size: 16px;
    margin-top:10px;
    margin-left:18px;
    margin-right: 20px;
    color: white;
    /* border-radius: 10px; */
    
`

