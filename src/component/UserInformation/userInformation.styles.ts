import styled from '@emotion/native';
import {Image, SafeAreaView, View, Text,TouchableOpacity} from 'react-native'



export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    
    display: flex;
    flex-direction: column;
    background-color: #0d0d0d;
    padding: 10px 10px;
    /* background-color: red; */
    justify-content: space-between;
`

export const InforHeader = styled(View)`
    flex:0.5;
    display: flex;
    border-radius: 20px;
    justify-content: space-between;
`
export const Photo_Title = styled(Text)`
    flex:0.35;
    display:flex;
    font-size: 16px;
    margin-left: 22px;
    font-weight: bold;
    color: white;
`
export const InfoWrapper = styled(View)`
    flex:0.65;
    display:flex;
    flex-direction: row;
    padding-top:8px;
    margin-bottom: 10px;
`
export const LeftInfo = styled(View)`
    flex:0.25;
    /* background-color: blue; */
    display: flex;
    flex-direction: column;

`



export const Photo = styled(Image)`
    width: 50px;
    height: 50px;
    border-radius: 40px;
    display:flex;
    margin-left: 35px;
    margin-top: 1px;
    /* flex-direction: row;
    align-items: center; */
    `

export const RightInfo = styled(View)`
    flex: 0.8;
    /* background-color: yellow; */
    display: flex;
    justify-content: space-evenly;
    border-radius: 10px;
    margin-right:20px;
    margin-left:40px;
`
export const LogoutButton = styled(TouchableOpacity)`
    flex: 0.25;
    display:flex;
    background-color:  #222222;
    /* #222222; */
    /* margin-top: 30px; */
    border-radius: 10px;
    align-items: center;
    margin-left:25px;
    margin-right:25px;
    
`
export const Button = styled(Text)`
    flex:1;
    display:flex;
    font-size: 14px;
    color: white;
    margin-top:10px;
    justify-content:center;
    /* text-align: cent?er; */
`
