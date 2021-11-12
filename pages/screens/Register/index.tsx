import React, { useState } from 'react';
import { SafeAreaView, Text,TextInput,TouchableOpacity,View } from 'react-native';
import styled from '@emotion/native';
import PlacePicker from '../../../src/component/Picker/PlacePicker';
import ImportantPicker from '../../../src/component/Picker/ImportantPicker';
import DatePick from '../../../src/component/Picker/DatePicker';


const Wrapper = styled(SafeAreaView)`
    flex: 1;
    background-color: white;
`
const Card_Wrapper = styled(View)`
    /* flex: 0.8; */
    height: 500px;
    background-color: white;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
`
const Title_Wrapper = styled(View)`
    height: 70px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    elevation: 2;
    border-width: 0.1px;
    /* border-bottom: black; */
`
const Title = styled(Text)`
    font-size: 16px;
    font-weight: bold;
    color: black;
    margin-left: 50px;
`

const Button_Wrapper = styled(TouchableOpacity)`
    left: 50px;
`

const Button_Text = styled(Text)`
    color: #518099;
    font-size: 16px;
    font-weight: bold;
`

const Input = styled(TextInput)`
    width: 100%;
    /* border: 1px solid black */
    elevation: 2;
    border-width: 0.1px;
    padding-left: 10px;
    margin-bottom: 10px;
`

export default function Register() {

	return (
        <Wrapper>
            <Title_Wrapper>
            <Title>두게더 할 일 추가하기</Title>
            <Button_Wrapper>
                <Button_Text>완료</Button_Text>
            </Button_Wrapper>
            </Title_Wrapper>
            <Card_Wrapper >
                <Input placeholder='할 일을 입력 해주세요. (50자 내외)' maxLength={50}></Input>
                <Input placeholder='상세 내용을 입력해주세요. (100자 내외)' maxLength={100}></Input>
                
            <View style={{flexDirection:'row'}}>
                <PlacePicker/>
                <ImportantPicker/>
            </View>
            <DatePick />
            </Card_Wrapper>
        </Wrapper>
	);
}

