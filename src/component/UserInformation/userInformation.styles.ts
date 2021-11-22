import styled from '@emotion/native';
import {Image, SafeAreaView, View, Text} from 'react-native'



export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    /* background-color: #FFFFFF; */
    display: flex;
    flex-direction: column;
    background-color: #222222;
    padding: 10px 10px;
    border-radius: 10px;
`
export const Photo_Title = styled(Text)`
    flex:0.2;
    display:flex;
    font-size: 16px;
    margin-left: 22px;
    font-weight: bold;
    color: white;
`
export const InfoWrapper = styled(View)`
    flex:0.8;
    display:flex;
    flex-direction: row;
    padding-top:8px;
    margin-bottom: 10px;
`
export const LeftInfo = styled(View)`
    flex:0.2;
    /* background-color: blue; */
    display: flex;
    flex-direction: column;

`



export const Photo = styled(Image)`
    width: 50px;
    height: 50px;
    border-radius: 40px;
    display:flex;
    margin-left: 18px;
    margin-top: 10px;
    /* flex-direction: row;
    align-items: center; */
    `

export const RightInfo = styled(View)`
    flex: 0.8;
    /* background-color: yellow; */
    display: flex;
    justify-content: space-evenly;
    
    background-color: #E5E5E5;
    border-radius: 10px;
    margin-right:20px;
    margin-left:15px;
`

