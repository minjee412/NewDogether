import * as React from 'react';
import styled from '@emotion/native';
import {Image, SafeAreaView, Text, View} from 'react-native';

export default function SortList(props: any) {
  // console.log("color: ",props)
  return (
    <Wrapper style={{flex: 1}}>
      <Check_Box style={{color: 'white'}}>{props.important}</Check_Box>
      <View
        style={{
          flexDirection: 'column',
          // borderWidth: 1,
          width: '70%',
          height: '90%',
        }}>
        <List
          style={{
            color: 'pink',
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            fontSize: 18,
          }}>
          🍿 {props.title.slice(0, 20)}
          {props.title.length > 20 ? '...' : null}
          {/* {props.title.length > 14 ? props.title.slice(0, 14) : props.title} */}
        </List>
        <List>
          🎟 {props.contents.slice(0, 80)}
          {props.contents.length > 80 ? '...' : null}
        </List>
      </View>
      <Check_Hamburger
        source={
          props.important === '🍑 x 5'
            ? require('../../../public/images/List/purplehamburger.png')
            : props.important === '🍑 x 4'
            ? require('../../../public/images/List/bluehamburger.png')
            : props.important === '🍑 x 3'
            ? require('../../../public/images/List/greenhamburger.png')
            : props.important === '🍑 x 2'
            ? require('../../../public/images/List/yellowhamburger.png')
            : require('../../../public/images/List/redhamburger.png')
        }
      />
    </Wrapper>
  );
}

const Wrapper = styled(SafeAreaView)`
  width: 311px;
  height: 100px;
  border-radius: 1px;
  border-width: 0.5px;
  /* border: white; */
  background-color: #222222;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-between;
  /* border: 1px solid black; */
`;

const Check_Box = styled(Text)`
  width: 15%;
  height: 20px;
  margin-right: 5px;
  border-bottom-width: 1px;
  border-bottom-color: white;
  /* border: 1px solid white; */
`;

const List = styled(Text)`
  font-size: 16px;
  width: 100%;
  color: white;
  /* border: 1px solid white; */
`;

const Check_Hamburger = styled(Image)`
  width: 6%;
  height: 20px;
  /* border: 1px solid black; */
`;
