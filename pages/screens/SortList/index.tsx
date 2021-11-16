import * as React from 'react';
import styled from '@emotion/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function SortList(props:any){
    return(
        <Wrapper style={{flex:1}} >
            <Check_Box source={(props.important === '4' ? require ('../../../public/images/List/bluecircle.png') : props.important === '2' ? require('../../../public/images/List/yellowcircle.png') : props.important === '3' ? require ('../../../public/images/List/greencircle.png') : require('../../../public/images/List/redcircle.png'))}/>
            <List>{props.title.length > 14 ? props.title.slice(0, 14) : props.title}</List>
            {/* <Text>asd;lfkjasl;dfkjasd;lfkjadsl;fkdasjfl;ksd</Text> */}
            <Text>{props.value}</Text>
            <Check_Hamburger source={(props.important === '4' ? require ('../../../public/images/List/bluehamburger.png') : props.important === '2' ? require('../../../public/images/List/yellowhambergur.png') : props.important === '3' ? require ('../../../public/images/List/greenhambergur.png') : require('../../../public/images/List/redhamburger.png'))}/>
        </Wrapper>
    )
}

const Wrapper = styled(View)`
    width: 311px;
    height: 44px;
    border-radius: 1px;
    /* elevation: 1px; */
    border-width: 0.5px;
    border: gray;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    padding-left: 10px;
    justify-content: space-between;
    /* border: 1px solid black; */
`

const Check_Box = styled(Image)`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`

const List = styled(Text)`
    font-size: 16px;
    /* align-items: flex-start; */
`

const Check_Hamburger = styled(Image)`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`