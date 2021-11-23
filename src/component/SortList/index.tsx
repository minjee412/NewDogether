import * as React from 'react';
import styled from '@emotion/native';
import {SafeAreaView, Text, View} from 'react-native';

export default function SortList(props: any) {
  // console.log(props.category);
  return (
    <Wrapper>
      <View
        style={{
          flexDirection: 'column',
          // borderWidth: 1,
          width: '100%',
          height: '65%',
          marginBottom: 10,
          justifyContent: 'center',
        }}>
        <List
          style={{
            color: 'pink',
            // borderBottomColor: 'white',
            // borderBottomWidth: 1,
            fontSize: 18,
          }}>
          {props.title.slice(0, 30)}
          {props.title.length > 25 ? '...' : null}
          {/* {props.title.length > 14 ? props.title.slice(0, 14) : props.title} */}
        </List>
        <List>
          {props.contents.slice(0, 35)}
          {props.contents.length > 35 ? '...' : null}
        </List>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: '25%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Check_Box style={{color: 'white'}}>{props.important}</Check_Box>
        <Check_Hamburger>{props.category}</Check_Hamburger>
      </View>
    </Wrapper>
  );
}

const Wrapper = styled(SafeAreaView)`
  width: 330px;
  height: 120px;
  border-radius: 10px;
  background-color: #222222;
  /* border-radius: 10px; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  /* margin-left: 10px; */
  /* margin-right: 10px; */

  padding: 10px;
  justify-content: space-between;
  /* border: 1px solid black; */
`;

const Check_Box = styled(Text)`
  width: 40%;
  height: 100%;
  /* margin-right: 5px; */
  font-size: 16px;
  /* border-bottom-width: 1px; */
  /* border-bottom-color: white; */
  /* border: 1px solid white; */
`;

const List = styled(Text)`
  font-size: 16px;
  width: 100%;
  color: white;
  /* border: 1px solid white; */
`;

const Check_Hamburger = styled(Text)`
  width: 37%;
  height: 100%;
  margin-right: 5px;
  font-size: 16px;
  color: white;
  /* border: 1px solid white; */
`;
