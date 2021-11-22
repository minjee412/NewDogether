import React, { useState } from 'react';
import styled from '@emotion/native';
import {Picker} from '@react-native-picker/picker';
import { Text, View } from 'react-native';

const Container = styled(View)`
/* border-left-width: 1; */
`

const Wrapper = styled(View)`
width: 100%;
/* padding-top: 5px; */
background-color: #222222;

/* border: 1px solid white; */
border-radius: 10px;
margin-top: 10px;
/* border-left-width: 0.2; */
`

export default function ImportantPicker(props){

  return(

    <Wrapper>
      <View style={{alignItems:'center'}}>
        {/* <Text style={{color:'white'}}> 우선 순위 </Text> */}
      </View>
    <Container>
      <Picker
        selectedValue={props.important}
        onValueChange={(value) =>
          props.setImportant(value)
        }
        // dropdownIconColor='blue'
        mode='dialog'
        style={{borderWidth:1, borderStyle:'solid', color:'white'}}
        dropdownIconColor='white'
        >
        <Picker.Item label='🔴 (1순위)' value='🔴 (1순위)' />
        <Picker.Item label='🟠 (2순위)' value='🟠 (2순위)' />
        <Picker.Item label='🟢 (3순위)' value='🟢 (3순위)' />
        <Picker.Item label='🔵 (4순위)' value='🔵 (4순위)' />
      </Picker>
    </Container>
    </Wrapper>

  )
}