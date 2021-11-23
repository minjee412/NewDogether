import * as React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styled from '@emotion/native';
import PropTypes from 'prop-types';
import 'moment/locale/ko';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import SortList from '../../../src/component/SortList';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MainList({navigation}) {
  const [post, setPost] = React.useState(null);
  // const [date, setDate] = React.useState(moment().format('YYYY/MM/DD'));
  // const [now, setNow] = React.useState(new Date());

  Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired,
  };

  const user = auth().currentUser;
  // const array = [];
  const postCollection = firestore()
    .collection('Users')
    .doc(user?.email)
    .collection('Todo')
    .orderBy('important', 'desc');
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

  async function getPosts() {
    const snapshot = await postCollection.get();
    const posts = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return posts;
  }

  React.useEffect(() => {
    getPosts().then(setPost);
  }, [getPosts()]);

  const renderItem = ({item}) => (
    <TouchableOpacity onLongPress={() => navigation.navigate('Detail', item)}>
      <SortList
        important={item.important}
        title={item.title}
        id={item.id}
        user={item.user}
        date={item.date}
        contents={item.contents}
        category={item.category}
      />
    </TouchableOpacity>
  );

  return (
    <>
      <SafeArea style={{backgroundColor: '#0d0d0d'}}>
        <Title_Wrapper>
          <Title_font style={{color: '#ffbe0b'}}>memo</Title_font>
          <TouchableOpacity onPressOut={() => navigation.navigate('Calendar')}>
            <MaterialCommunityIcons
              name="calendar-month"
              style={{fontSize: 24, color: '#ffbe0b'}}
            />
          </TouchableOpacity>
        </Title_Wrapper>
        <CardWrapper style={{backgroundColor: '#0d0d0d'}}>
          <FlatList
            data={post}
            renderItem={renderItem}
            keyExtractor={item => item.date}
          />
          <RegisterBtn
            onPressOut={() => navigation.navigate('Register')}
            style={{borderWidth: 1, borderColor: 'white'}}>
            <ButtonText>+</ButtonText>
          </RegisterBtn>
        </CardWrapper>
      </SafeArea>
    </>
  );
}

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  /* background-color: #FFFFFF; */
`;

const Title_Wrapper = styled.View`
  height: 15%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  padding-top: 30px;
  /* border: 1px solid lightgray; */
  padding-left: 20px;
  padding-right: 20px;
`;

const CardWrapper = styled(View)`
  /* background-color:#fff; */
  flex: 1;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: center;
  align-items: center;
  elevation: 20;
`;

const Input = styled(TextInput)`
  width: auto;
  font-size: 15px;
  margin-right: 10px;
`;

const Title_font = styled(Text)`
  font-size: 32px;
  font-weight: 700;
`;

const Date_Wrapper = styled(View)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const RegisterBtn = styled(TouchableOpacity)`
  width: 50px;
  height: 50px;
  position: absolute;
  left: 80%;
  bottom: 10%;
  background-color: #ffbe0b;
  border-radius: 50px;
  /* justify-content: center; */
  align-items: center;
  /* border-style: none; */
  /* z-index: 1; */
`;

const ButtonText = styled(Text)`
  font-size: 33px;
  color: white;
`;
