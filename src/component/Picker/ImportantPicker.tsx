import React, {useState} from 'react';
import styled from '@emotion/native';
import {Picker} from '@react-native-picker/picker';
import {Text, View} from 'react-native';

const Container = styled(View)`
  margin-top: 10px;
  background-color: #222222;
  border-radius: 10px;
`;

export default function ImportantPicker(props) {
  return (
    <Container>
      <View style={{alignItems: 'center', marginTop: 5}}>
        <Text style={{color: 'white', alignItems: 'center'}}>
          ❗️ 나만의 평점
        </Text>
      </View>
      <Picker
        selectedValue={props.important}
        onValueChange={value => props.setImportant(value)}
        // dropdownIconColor='blue'
        mode="dialog"
        style={{
          borderWidth: 1,
          borderStyle: 'solid',
          color: 'white',
        }}
        dropdownIconColor="white">
        <Picker.Item
          style={{color: '#311b92'}}
          label="🍑  (1점)"
          value="🍑 x 1"
        />
        <Picker.Item
          style={{color: '#1a237e'}}
          label="🍑 🍑  (2점)"
          value="🍑 x 2"
        />
        <Picker.Item
          style={{color: '#006064'}}
          label="🍑 🍑 🍑  (3점)"
          value="🍑 x 3"
        />
        <Picker.Item
          style={{color: '#f57f17'}}
          label="🍑 🍑 🍑 🍑  (4점)"
          value="🍑 x 4"
        />
        <Picker.Item
          style={{color: 'red'}}
          label="🍑 🍑 🍑 🍑 🍑  (5점)"
          value="🍑 x 5"
        />
      </Picker>
    </Container>
  );
}
