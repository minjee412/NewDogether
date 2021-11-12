import styled from "@emotion/native"
import { SafeAreaView, View, Image, Text, TextInput, ScrollView, TouchableOpacity } from "react-native"


export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    background-color: #ffffff;
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
export const Button = styled(Image)`
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
export const Body2 = styled(View)`
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
export const Body3 = styled(View)`
    height: 240px;
`
export const Footer = styled(View)`
    height: 76px;
    background-color: #ffffff;
    padding: 16px;
    elevation: 4;
`
export const InnerFooter = styled(View)`
    border-width: 1px;
    border-radius: 10px;
    border-color: #518099;
    padding: 0 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const InputBar = styled(TextInput)`
    width: 287px;
    font-size: 16px;
    color: #000000;
`
export const SendIcon = styled(Image)`
    width: 20px;
    height: 20px;
`
