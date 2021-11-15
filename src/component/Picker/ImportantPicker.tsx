import React, { useState } from 'react';
import styled from '@emotion/native';
import {Picker} from '@react-native-picker/picker';
import { Text, View } from 'react-native';

const Container = styled(View)`
/* border-left-width: 1; */
`

const Wrapper = styled(View)`
elevation:2;
width: 173px;
padding-top: 5px;
/* border-left-width: 0.2; */
`

export default function ImportantPicker(props){

  return(

    <Wrapper>
      <View style={{alignItems:'center'}}>
        <Text style={{color:'black'}}> 우선순위 </Text>
      </View>
    <Container>
      <Picker
        selectedValue={props.important}
        onValueChange={(value) =>
          props.setImportant(value)
        }
        // dropdownIconColor='blue'
        mode='dialog'
        style={{borderWidth:1, borderStyle:'solid'}}>
        <Picker.Item label='    🔴  (1순위)   ' value='first' />
        <Picker.Item label='    🟠  (2순위)    ' value='second' />
        <Picker.Item label='    🟢  (3순위)    ' value='thrid' />
        <Picker.Item label='    🔵  (4순위)    ' value='forth' />
      </Picker>
    </Container>
    </Wrapper>

  )
}