import React, {useState} from 'react';
import styled from '@emotion/native';
import {Picker} from '@react-native-picker/picker';
import {Text, View} from 'react-native';

const Container = styled(View)`
  /* width: 45%; */
  /* elevation: 2; */
  /* border-width: 1px; */
  /* justify-content: center; */
  /* border-radius: 10px; */
  /* border: 1px solid black; */
`;

const Wrapper = styled(View)`
  width: 100%;
  margin-right: 33px;
  /* padding-top: 5px; */
  background-color: #222222;
  /* border: 1px solid white; */
  border-radius: 10px;
  /* border-right-width: 0.2; */
`;

export default function CategoryPicker(props) {
  // console.log({place});

  return (
    <Wrapper>
      <View style={{marginTop: 5, marginLeft: 15}}>
        <Text style={{color: 'white', alignItems: 'center', fontSize: 16}}>
          장르
        </Text>
      </View>

      <View style={{alignItems: 'center'}}>
        {/* <Text style={{color:'white'}}> 장르 </Text> */}
      </View>
      <Container>
        <Picker
          selectedValue={props.place}
          onValueChange={value => props.setPlace(value)}
          // dropdownIconColor='blue'
          mode="dialog"
          style={{borderWidth: 1, borderStyle: 'dashed', color: 'white'}}
          dropdownIconColor="white">
          <Picker.Item label="🥰  로맨스 & 멜로" value="🥰  로맨스 & 멜로" />
          <Picker.Item label="🤨  액션 & 스릴러" value="🤨  액션 & 스릴러" />
          <Picker.Item label="😱  공포 & 호러" value="😱  공포 & 호러" />
          <Picker.Item label="🤩  SF & 판타지" value="🤩  SF & 판타지" />
          <Picker.Item label="👩🏻‍❤️‍💋‍👨🏻  성인" value="👩🏻‍❤️‍💋‍👨🏻  성인" />
        </Picker>
      </Container>
    </Wrapper>
  );
}
