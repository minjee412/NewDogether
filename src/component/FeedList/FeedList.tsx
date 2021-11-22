import React from 'react';
import styled from '@emotion/native';
import { Image, SafeAreaView, Text } from 'react-native';

export default function SortList(props){

    return(
        <Wrapper style={{flex:1}}>
            <List>
                {props.title.length > 14 ? props.title.slice(0, 14) : props.title}
            </List>
            <Check_Hamburger
                source={(props.important === '🔵 (4순위)' ?
                    require ('../../../public/images/List/bluehamburger.png') : props.important === '🟠 (2순위)' ?
                    require('../../../public/images/List/yellowhambergur.png') : props.important === '🟢 (3순위)' ?
                    require ('../../../public/images/List/greenhambergur.png') : require('../../../public/images/List/redhamburger.png'))}
            />
        </Wrapper>
    )
}

const Wrapper = styled(SafeAreaView)`
    width: 311px;
    height: 44px;
    border-radius: 1px;
    border-width: 0.5px;
    background-color: #222222;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    padding-left: 20px;
    justify-content: space-between;
`

const Check_Box = styled(Image)`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`

const List = styled(Text)`
    font-size: 16px;
    color: white;
`

const Check_Hamburger = styled(Image)`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`