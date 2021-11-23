import React, {useState} from 'react';
import styled from '@emotion/native';
import {View, Image, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function CommentWrite({route}) {
  const user = auth().currentUser;
  const [memoContent, setMemoContent] = useState('');

  // 댓글 등록
  const MemoSubmit = async () => {
    const offset = new Date().getTimezoneOffset() * 60000;
    const today = new Date(Date.now() - offset);
    const createdAt = today.toISOString();

    //     try {
    //         const reuslt = await firestore()
    //             .collection("Users")
    //             .doc(user.email)
    //             .collection("Todo")
    //             .doc(route.params.id)
    //             .collection("Memo")
    //             .add({
    //                 memoContent,
    //                 createdAt,
    //                 // ID
    //             })
    //             // alert("등록되었습니다.")
    //             setMemoContent("")
    //     } catch(error) {
    //         console.log(error)
    //     }
    // }

    try {
      const reuslt = await firestore()
        .collection('MemoList')
        .doc(route.params.id)
        .collection('Memo')
        .add({
          memoContent,
          createdAt,
          // ID
        });
      // alert("등록되었습니다.")
      setMemoContent('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Footer>
      <InnerFooter>
        <InputBar
          placeholder="댓글을 입력하세요"
          placeholderTextColor={'#888888'}
          maxLength={100}
          value={memoContent}
          onChangeText={setMemoContent}
        />
        <TouchableOpacity onPressOut={MemoSubmit}>
          {/* <SendIcon source={require("../../../public/images/List/send.png")}/> */}
          <MaterialCommunityIcons
            name="send"
            style={{fontSize: 20, color: '#ffbe0b'}}
          />
        </TouchableOpacity>
      </InnerFooter>
    </Footer>
  );
}

export default CommentWrite;

const Footer = styled(View)`
  height: 76px;
  /* background-color: red; */
  /* background-color: #0d0d0d; */
  padding: 16px;
  elevation: 4;
`;
const InnerFooter = styled(View)`
  border-width: 1px;
  border-radius: 10px;
  border-color: #ffbe0b;
  padding: 0 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const InputBar = styled(TextInput)`
  width: 287px;
  font-size: 16px;
  color: #ffffff;
`;
const SendIcon = styled(Image)`
  width: 20px;
  height: 20px;
`;
