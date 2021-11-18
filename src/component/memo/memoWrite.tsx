// import React, { useEffect, useRef, } from "react";
// import { StyleSheet, View } from "react-native";
// import { useRoute } from "@react-navigation/native"


// const UploadScreen = () => {
//     return <View style={styles.block} />
// }

// const styles = StyleSheet.create({
//     block: {}
// })

// export default UploadScreen



import React, {useState} from "react";
import styled from "@emotion/native"
import { View, Image, TextInput } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import {v4} from 'uuid'
import 'react-native-get-random-values'
// import {useUserContext} from "../../../contexts/UserContext"

function MemoWrite(){

    const [content, setContent] = useState("")
    
    const ID = v4();
    
    // React.useEffect(() => {
    //     const doc = firestore()
    //         .collection("Users")
    //         .doc(user.email)
    //         .collection("Todo")
    //         // .orderBy("data", "asc")
    //         .get()
    //         .then(snapshot => {
    //             snapshot.forEach(doc => {
    //                 aaa.push(doc.data())
    //             });
    //             setDetailV(aaa.reverse())             
    //             //reverse 쓰는 이유 찾아놓기
    //         })
    // }, [])


    // 댓글 등록
    const user = auth().currentUser;
    const Submit = () => {            
        firestore()
            .collection('Users')
            .doc(user.email)
            .collection("Todo")
            .add({
                content: content,
                id:ID,
                createdAt: firestore.FieldValue.serverTimestamp(),
            })
    }

    return(
        <Footer>
            <InnerFooter> 
                <InputBar 
                    placeholder="댓글을 입력하세요"
                    placeholderTextColor={"#888888"}
                    maxLength={100}
                    value={content}
                    onChangeText={setContent}
                />
                <TouchableOpacity onPressOut={Submit}>
                    <SendIcon source={require("../../../public/images/List/send.png")}/>
                </TouchableOpacity>
            </InnerFooter>
        </Footer>
    )
};

export default MemoWrite;


const Footer = styled(View)`
    height: 76px;
    background-color: #ffffff;
    padding: 16px;
    elevation: 4;
`
const InnerFooter = styled(View)`
    border-width: 1px;
    border-radius: 10px;
    border-color: #518099;
    padding: 0 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const InputBar = styled(TextInput)`
    width: 287px;
    font-size: 16px;
    color: #000000;
`
const SendIcon = styled(Image)`
    width: 20px;
    height: 20px;
`
