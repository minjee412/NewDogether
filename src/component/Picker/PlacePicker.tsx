import React, { useState } from 'react';
import styled from '@emotion/native';
import {Picker} from '@react-native-picker/picker';
import { Text, View } from 'react-native';

const Container = styled(View)`
  /* width: 45%; */
  /* elevation: 2; */
  /* border-width: 1px; */
  /* justify-content: center; */
  /* border-radius: 10px; */
  /* border: 1px solid black; */
  
`

const Wrapper = styled(View)`
elevation:2;
width: 130px;
margin-right: 33px;
padding-top: 5px;
/* border-right-width: 0.2; */
`

export default function PlacePicker(props){

  // console.log({place});

  return(
    <Wrapper>
      <View style={{alignItems:'center'}}>
      <Text style={{color:'black'}}> 장소 </Text>
      </View>
    <Container>
      <Picker
        selectedValue={props.place}
        onValueChange={(value) =>
          props.setPlace(value)
        }
        // dropdownIconColor='blue'
        mode='dialog'
        style={{borderWidth:1, borderStyle:'dashed'}}>
        <Picker.Item label='🏠 집' value='집' />
        <Picker.Item label='🏢 회사' value="회사" />
        <Picker.Item label='🏫 학교' value='학교' />
      </Picker>
    </Container>
    </Wrapper>

  )
}