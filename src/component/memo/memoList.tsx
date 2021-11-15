import React from "react";
import styled from "@emotion/native"
import { View } from "react-native";
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'


function MemoList(){

    const memo = firestore()
        .collection("Memo"); 

    return(
        <Wrapper>
            <Content>{memo}</Content>
            <WriteDate>{memo}</WriteDate>
        </Wrapper>
    )
};

export default MemoList;

const Wrapper = styled(View)`

`
const Content = styled(View)`

`
const WriteDate = styled(View)`

`