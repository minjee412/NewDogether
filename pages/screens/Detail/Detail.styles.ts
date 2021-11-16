import styled from "@emotion/native"
import { SafeAreaView, View, Image, Text, TextInput, ScrollView, TouchableOpacity } from "react-native"


export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    background-color: #ffffff;
    justify-content: space-between;
`
export const SafeAreaTop = styled(View)`
`
export const Header = styled(View)`
    width: 100%;
    height: 80px;
    padding: 0px 32px;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    elevation: 4;
`
export const Button1 = styled(Image)`
    width: 20px;
    height: 20px;
`
export const Button2 = styled(Image)`
    width: 20px;
    height: 20px;
    margin-right: 20px;
`
export const HeaderTitle = styled(Text)`
    width: 160px;
    margin-left: 56px;
    margin-right: 15px;
    text-align: center;
    /* font-family: ; */
    font-size: 16px;
    font-weight : 700;
    color: #000000;
`
export const Body = styled(View)`

`
export const BodyTop = styled(View)`
    padding: 19px 32px ;
`
export const BodyTitle = styled(Text)`
    /* font-family: ; */
    font-size: 16px;
    font-weight : 700;
    color: #000000;
`
export const BodyContent = styled(Text)`
    /* font-family: ; */
    font-size: 15px;
    color: #888888;
    margin-top: 19px;
`
export const BodyMiddel = styled(View)`
    height: 52px;
    border-width: 1px 0;
    border-color: #f4f4f4;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 16px;
`
export const BodyText = styled(Text)`
    height: 32px;
    background-color: #ffffff;
    border-radius: 10px;
    margin: 9px 0 10px 16px;
    padding: 5px 8px;
    font-size: 15px;
    color: #000000;
    elevation: 4;
`
export const BodyBottom = styled(View)`

`
export const  Wrapper =styled(View)``