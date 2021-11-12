import * as React from 'react';
import {SafeAreaView, View, Text, TextInput, ScrollView, TouchableOpacity, Button} from 'react-native';
import styled from '@emotion/native';
import PropTypes from 'prop-types'
import Task from '../../../src/component/Task';
import IconButton from '../../../src/component/IconButton/IconButton';
import { Images } from '../../../src/images';
import moment from 'moment';
import 'moment/locale/ko';





export default function MainList({navigation}){
  const [newTask, setNewTask] = React.useState('')
  const [tasks, setTasks] = React.useState([])
  const [date, setDate] = React.useState(moment().format('MM/DD'))
  const [now, setNow] = React.useState(new Date());

  function Today(){
    setDate(moment().format('MM/DD'))
    
  }

  function Tomorrow() {
    setDate(moment(now).add(1,'days').format('MM/DD'));
    setNow( new Date((now).setHours(24)));
  }

  function Yesterday(){
    setDate(moment().subtract(1,'days').format('MM/DD'));
    setNow( new Date((now).setHours(-24)));
  }
  

  Input.propTypes={
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onSubmitEditing:PropTypes.func.isRequired
  };
  
  function AddTask(){
    const ID = Date.now().toString();
    const newTaskObject ={
      [ID]: {id: ID, text: newTask, completed:false}
    };
    setNewTask('');
    setTasks({...tasks, ...newTaskObject})
  }

  function HandleTextChange (text){
    setNewTask(text)
  }
  
  const ToggleTask = id => {
    const cureentTasks = Object.assign({},tasks);
    currentTasks[id]['completed'] = !currentTasks[id]['completed']
    setTasks(currentTasks)
  }
  console.log('aaa',Object.values(tasks))
  
    return(
    <>
      <SafeArea>
        <Title_Wrapper>
          <View style={{width:'100%', flexDirection:'row', justifyContent:'flex-end'}}>
        <IconButton type={Images.Calendar} onPressOut={() => navigation.navigate('Calendar')}/>
        </View>
          <Date_Wrapper>
          <IconButton type={Images.left_arrow} onPressOut={Yesterday}/>
        <Date_font onPress={Today}>{date}</Date_font>
        <IconButton type={Images.right_arrow} onPressOut={Tomorrow}/>
        </Date_Wrapper>
        </Title_Wrapper>
        <CardWrapper>
        <Input_Wrapper>
        <Input 
            placeholder='일정을 추가 해주세요...(30자 내외)' 
            placeholderTextColor={'#999'} 
            maxLength={30}
            autoCapitalize='none'
            autoCorrect={false}
            returnKeyType="done"
            value={newTask}
            onChangeText={HandleTextChange}
            onSubmitEditing={AddTask}            
        />
      </Input_Wrapper>

      <ScrollView style={{flex:1}}>
        {Object.values(tasks)[0]
        ?
        Object.values(tasks)
        .reverse()
        .map(item => (
          <Task key={item.id} text = {item.text} />
        ))
        :<View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Text style={{color:'black'}}>Dogether 항목이 없습니다.</Text>
        <Text style={{color:'black'}}>오늘 할일은 무엇인가요 ?</Text>
        </View>
        }
        </ScrollView>
        <TouchableOpacity onPressOut={() => navigation.navigate('Register')} >
          <Text>등록하기</Text>
          </TouchableOpacity>
        </CardWrapper>
      </SafeArea>
    </>
    )
}




const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #FFFFFF;
  /* padding-left: 10px; */
  /* padding-right: 10px; */
`

const Title_Wrapper = styled.View`
  height: 20%;
  width: 100%;
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  /* border-bottom-width: 1; */
  /* border-bottom-color: red; */
  padding-bottom: 5px;
  padding-top: 20px;
  elevation:2
`

// const AppTitle = styled(Text)`
//   color: #888888;
//   font-size: 25px;
//   margin-top: 5px;
//   font-weight: 300;
//   text-align: center;
//   justify-content: center;
//   border: 1px solid black;
//   /* margin-right: 50px; */
// `

const CardWrapper = styled(View)`
  background-color:#fff;
  /* border: 1px solid blasck; */
  flex: 1;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`

const Input_Wrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  border-bottom-color: gray;
  border-bottom-width: 1px;
  margin-bottom: 10px;
  width: auto;
  /* border: 1px solid black; */
`

const Input = styled(TextInput)`
  width: auto;
  font-size: 15px;
  margin-right: 10px;
  /* border: 1px solid black; */
`

const Date_font = styled(Text)`
  font-size: 32px;
`

const Date_Wrapper = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
 
`
