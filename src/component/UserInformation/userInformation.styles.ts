import styled from '@emotion/native';
import {Image, SafeAreaView, View, Text} from 'react-native'



export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
`
export const LeftInfo = styled(View)`
    flex:0.3;
    background-color: blue;
    display: flex;
    flex-direction: column;

`

export const Photo_Title = styled(Text)`
    font-size: 16px;
    margin-left: 22px;
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
    flex: 0.7;
    /* background-color: yellow; */
    display: flex;
    justify-content: space-evenly;
`

export const Button = styled(Text)`
    
`