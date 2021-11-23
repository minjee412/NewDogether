import React, {useEffect, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  SafeArea,
  SafeAreaTop,
  Header,
  Button,
  HeaderTitle,
  Body,
  BodyTop,
  BodyMiddel,
  BodyBottom,
  BodyTitle,
  BodyTitleEmpty,
  BodyContent,
  BodyContentEmpty,
  BodyText,
  NullWrapper,
  MemoListWrapper,
  MemoListLeft,
  MemoContent,
  MemoCreatedAt,
  MemoDeleteButton,
} from './Detail.styles';
import {
  TouchableOpacity,
  Alert,
  FlatList,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import CommentWrite from '../../../src/component/Comment/CommentWrite';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ScrollView} from 'react-native-gesture-handler';

function Detail({navigation, route}) {
  const dayDate =
    `${route.params.createdAt.slice(5, 7)}` +
    '월 ' +
    `${route.params.createdAt.slice(8, 10)}` +
    '일의 감상평';
  const dayTime =
    `${route.params.createdAt.slice(11, 13)}` +
    '시 ' +
    `${route.params.createdAt.slice(14, 16)}` +
    '분 작성';
  const user = auth().currentUser;

  // 글 삭제
  const deleteView = () => {
    try {
      Alert.alert(
        '삭제',
        '정말로 삭제하시겠어요?',
        [
          {text: '취소', style: 'cancel'},
          {
            text: '삭제',
            onPress: () => {
              firestore()
                .collection('Users')
                .doc(user.email)
                .collection('Todo')
                .doc(route.params.id)
                .delete();
              navigation.navigate('MainList');
            },
            style: 'destructive',
          },
        ],
        {
          cancelable: true,
        },
      );
    } catch (error) {
      console.log('error: ', error);
      // alert("삭제실패")
    }
  };

  // 댓글 내용 조회
  const [post, setPost] = useState(null);
  const postCollection = firestore()
    .collection('MemoList')
    .doc(route.params.id)
    .collection('Memo')
    .orderBy('createdAt', 'desc');

  const getPosts = async () => {
    const snapshot = await postCollection.get();
    const posts = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return posts;
  };

  useEffect(() => {
    getPosts().then(setPost);
  }, [getPosts()]);

  // // 메모 삭제
  // const deleteMemo = (itemId) => {
  //     try {
  //         const result = firestore()
  //             .collection("MemoList")
  //             .doc(route.params.id)
  //             .collection("Memo")
  //             .doc(itemId)
  //             .delete()
  //             // .doc(item.id)
  //             // .delete()
  //     } catch(error) {
  //         console.log(error)
  //     }
  // }

  // const renderItem = ({item}) => (
  //     <MemoListWrapper>
  //         <MemoListLeft>
  //             <MemoCreatedAt>
  //                 {
  //                     `${item.createdAt.slice(5,7)}` + "월" +
  //                     `${item.createdAt.slice(8,10)}` + "일 " +
  //                     `${item.createdAt.slice(11,13)}` + ":" +
  //                     `${item.createdAt.slice(14,16)}` + ":" +
  //                     `${item.createdAt.slice(17,19)}`
  //                 }
  //             </MemoCreatedAt>
  //             <MemoContent>
  //                 {item.memoContent}
  //             </MemoContent>
  //         </MemoListLeft>
  //         <TouchableOpacity
  //             onPressOut={()=>deleteMemo(item.id)}
  //         >
  //             <MemoDeleteButton
  //                 source={require("../../../public/images/List/delete.png")}
  //             />
  //         </TouchableOpacity>
  //     </MemoListWrapper>
  // )
  // 메모 삭제
  const deleteMemo = itemId => () => {
    try {
      const result = firestore()
        .collection('MemoList')
        .doc(route.params.id)
        .collection('Memo')
        .doc(itemId)
        .delete();
      // .doc(item.id)
      // .delete()
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({item}) => (
    <MemoListWrapper>
      <MemoListLeft>
        <MemoCreatedAt>
          {`${item.createdAt.slice(5, 7)}` +
            '월' +
            `${item.createdAt.slice(8, 10)}` +
            '일 ' +
            `${item.createdAt.slice(11, 13)}` +
            ':' +
            `${item.createdAt.slice(14, 16)}` +
            ':' +
            `${item.createdAt.slice(17, 19)}`}
        </MemoCreatedAt>
        <MemoContent>{item.memoContent}</MemoContent>
      </MemoListLeft>
      <TouchableOpacity onPressOut={deleteMemo(item.id)}>
        {/* <MemoDeleteButton
          source={require('../../../public/images/List/delete.png')}
        /> */}
        <MaterialCommunityIcons
          name="close"
          style={{fontSize: 24, color: '#ffbe0b'}}
        />
      </TouchableOpacity>
    </MemoListWrapper>
  );

  return (
    <ScrollView>
      <SafeArea>
        <SafeAreaTop>
          <Header>
            <TouchableOpacity onPressOut={() => navigation.pop()}>
              {/* <Button
                source={require('../../../public/images/List/left-arrow.png')}
              /> */}
              <MaterialCommunityIcons
                name="chevron-left"
                style={{fontSize: 28, color: '#ffbe0b'}}
              />
            </TouchableOpacity>
            <HeaderTitle>{dayDate}</HeaderTitle>
            <TouchableOpacity onPressOut={deleteView}>
              {/* <Button
                source={require('../../../public/images/List/delete.png')}
              /> */}
              <MaterialCommunityIcons
                name="close"
                style={{fontSize: 28, color: '#ffbe0b'}}
              />
            </TouchableOpacity>
          </Header>
          <BodyTop>
            {route.params.title ? (
              <BodyTitle>{route.params?.title}</BodyTitle>
            ) : (
              <BodyTitleEmpty>제목이 없습니다</BodyTitleEmpty>
            )}
            {route.params.contents ? (
              <BodyContent>{route.params?.contents}</BodyContent>
            ) : (
              <BodyContentEmpty>내용이 없습니다</BodyContentEmpty>
            )}
          </BodyTop>
          <View style={{flexDirection: 'row'}}>
            {route.params.category ? (
              <BodyText>{route.params.category}</BodyText>
            ) : (
              <NullWrapper />
            )}
            {route.params.important ? (
              <BodyText>{route.params.important}</BodyText>
            ) : (
              <NullWrapper />
            )}
            {route.params.createdAt ? (
              <BodyText>⏰ {dayTime}</BodyText>
            ) : (
              <NullWrapper />
            )}
          </View>
        </SafeAreaTop>
        {/* <MemoWrite route={route} /> */}
        {/* <KeyboardAwareScrollView> */}
        <BodyBottom>
          <FlatList
            data={post}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </BodyBottom>

        <CommentWrite route={route} />
        {/* </KeyboardAwareScrollView> */}
      </SafeArea>
    </ScrollView>
  );
}

export default Detail;
