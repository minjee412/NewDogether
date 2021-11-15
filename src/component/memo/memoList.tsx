import React, {useEffect, useState} from "react";
import styled from "@emotion/native"
import { View, FlatList } from "react-native";
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
//book
import {getPosts} from "../../commons/library/posts" 

function MemoList(){

    // //book
    // const [posts, setPosts] = useState("");
    // useEffect(()=> {
    //     getPosts().then(setPosts);
    // }, [])
    // //book

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