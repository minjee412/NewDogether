import styled from '@emotion/native';
import {Image, SafeAreaView, View, Text} from 'react-native'




export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    background-color: #FFFFFF;
    justify-content: space-between;
`
export const SafeAreaTop = styled(View)`
`
export const Header = styled(View)`
    width: 100%;
    height: 80px;
    padding: 0px 98px;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    elevation: 4;
`

// export const Button = styled(Image)`
//     width: 20px;
//     height: 20px;
// `

export const HeaderTitle = styled(Text)`
    width: 160px;
    text-align: center;
    /* font-family: ; */
    font-size: 20px;
    font-weight : 700;
    color: #000000;
`
export const NickName_Wrapper = styled(View)`
    
`