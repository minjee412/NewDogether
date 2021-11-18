import * as React from 'react';
import {SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import styled from '@emotion/native';
import PropTypes from 'prop-types'
import IconButton from '../../../src/component/IconButton/IconButton';
import { Images } from '../../../src/images';
import moment from 'moment';
import 'moment/locale/ko';
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import SortList from '../SortList';





export default function MainList({navigation}){
  const [post, setPost] = React.useState(null)
  const [date, setDate] = React.useState(moment().format('YYYY/MM/DD'))
  const [now, setNow] = React.useState(new Date());

  

  Input.propTypes={
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onSubmitEditing:PropTypes.func.isRequired
  };
  
  const user = auth().currentUser
  // const array = [];
  const postCollection = firestore().collection('Users').doc(user?.email).collection('Todo').orderBy('important','desc')
// console.log(firestore().collection('Users').doc(user.email).collection('Todo').get())
  

  // React.useEffect(() => {
  //   const doc = firestore()
  //     .collection('Users')
  //     .doc(String(user?.email))
  //     .collection('Todo')
  // //     .orderBy('date', 'asc')
  //     .get()
  //     .then(snapshot => {
  //       snapshot.forEach(doc => {
  //         array.push(doc.data());
  //       });
  //       setData(array.reverse());
  //     });
  // }, [firestore().collection('Users').doc('').collection('Diary').get()]);

  async function getPosts(){
    const snapshot = await postCollection.get();
    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return posts;
  }

   React.useEffect(()=> {
     getPosts().then(setPost)
  },[getPosts()])


  const renderItem = ({item}) =>(
    <TouchableOpacity onPressOut={()=>navigation.navigate('Detail',item)}>
      <SortList important={item.important} title={item.title} id={item.id} user={item.user} date={item.date}/>
    </TouchableOpacity>
  )
  
  
    return(
    <>
      <SafeArea>
        <Title_Wrapper>
          <View style={{width:'100%', flexDirection:'row', justifyContent:'flex-end'}}>
        <IconButton type={Images.Calendar} onPressOut={() => navigation.navigate('Calendar')}/>
        </View>
          <Date_Wrapper>
            <Text>오늘</Text>
            <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
        <Date_font >{date}</Date_font>
        </View>
        </Date_Wrapper>
        </Title_Wrapper>
        <CardWrapper>

      <FlatList 
        data={post}
        renderItem={renderItem}
        keyExtractor={(item) => item.date}
      />
          <RegisterBtn onPressOut={() => navigation.navigate('Register')} >
            <ButtonImage source={require('../../../public/images/List/Add.png')}/>
          </RegisterBtn> 
        </CardWrapper>
      </SafeArea>
    </>
    )
}




const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #FFFFFF;
`

const Title_Wrapper = styled.View`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
  padding-top: 20px;
  elevation:2;
`


const CardWrapper = styled(View)`
  background-color:#fff;
  flex: 1;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: center;
  align-items: center;
  elevation:20;
`

const Input_Wrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  border-bottom-color: gray;
  border-bottom-width: 1px;
  margin-bottom: 10px;
  width: auto;
`

const Input = styled(TextInput)`
  width: auto;
  font-size: 15px;
  margin-right: 10px;
`

const Date_font = styled(Text)`
  font-size: 32px;
`

const Date_Wrapper = styled(View)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const RegisterBtn = styled(TouchableOpacity)`
  width: 50px;
  height: 50px;
  position: absolute;
  left: 300px;
  bottom: 10px;
  z-index: 1;
`

const ButtonImage = styled(Image)`
  width: 50px;
  height: 50px;
`
