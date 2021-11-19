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
    justify-content: space-between;
    align-items: center;
    elevation: 4;
`
export const Button = styled(Image)`
    width: 20px;
    height: 20px;
`
export const HeaderTitle = styled(Text)`
    width: 160px;
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
export const BodyTitleEmpty = styled(Text)`
    /* font-family: ; */
    font-size: 16px;
    font-weight : 700;
    color: #c4c4c4;
`
export const BodyContent = styled(Text)`
    /* font-family: ; */
    font-size: 15px;
    color: #888888;
    margin-top: 19px;
`
export const BodyContentEmpty = styled(Text)`
    /* font-family: ; */
    font-size: 15px;
    color: #c4c4c4;
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
export const  NullWrapper =styled(View)``



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
// 불러오는 댓글 컴포넌트
export const MemoListWrapper = styled(View)`

`
export const MemoListLeft = styled(View)`

`
export const MemoContent = styled(View)`

`
export const MemoCreatedAt = styled(View)`

`
export const MemoDeleteButton = styled(Image)`
    width: 15px;
    height: 15px;
`


export const Aaa = styled(View)`
width: 100px;
height: 100px;
background-color: red;

`
