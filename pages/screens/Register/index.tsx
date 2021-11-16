import React, { useRef, useState } from 'react';
import { SafeAreaView, Text,TextInput,TouchableOpacity,View } from 'react-native';
import styled from '@emotion/native';
import PlacePicker from '../../../src/component/Picker/PlacePicker';
import ImportantPicker from '../../../src/component/Picker/ImportantPicker';
import DatePick from '../../../src/component/Picker/DatePicker';
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import 'react-native-get-random-values'

import {v4} from 'uuid'



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

export default function Register(props:any) {
    const user = auth().currentUser;

    const [todo,setTodo] = useState('');
    const [details, setDetails] = useState('')
    const [place , setPlace] = useState('');
    const [important, setImportant] = useState('');
    const [date, setDate] = useState(new Date())

    const ID = v4();
    // console.log(v4());

    const TodoRef = useRef();

    console.log(place);
    console.log(important);
    console.log(date);




    async function Submit (){
        try{const result = await firestore()
            .collection('Users')
            .doc(user.email)
            .collection("Todo")
            .add({
                title:todo,
                contents:details,
                place:place,
                id:ID,
                important:important,
                createdAt:firestore.FieldValue.serverTimestamp()
                // date:date
            })
            alert('등록되었습니다.');
            console.log(result);
            props.navigation.navigate('MainList');
        } catch(error){
            console.log(error)
        }
        
    }

	return (
        <Wrapper>
            <Title_Wrapper>
            <Title>두게더 할 일 추가하기</Title>
            <Button_Wrapper onPressOut={Submit}>
                <Button_Text onPress={Submit}>완료</Button_Text>
            </Button_Wrapper>
            </Title_Wrapper>
            <Card_Wrapper >
                <Input placeholder='할 일을 입력 해주세요. (50자 내외)' maxLength={50} value={todo} onChangeText={setTodo} onSubmitEditing={()=>{TodoRef.current.focus()}}></Input>
                <Input placeholder='상세 내용을 입력해주세요. (100자 내외)' maxLength={100} value={details} onChangeText={setDetails} ref={TodoRef}></Input>
                
            <View style={{flexDirection:'row'}}>
                <PlacePicker value={place} setPlace={setPlace} place={place}/>
                <ImportantPicker value={important} setImportant={setImportant} important={important}/>
            </View>
            </Card_Wrapper>
        </Wrapper>
	);
}

