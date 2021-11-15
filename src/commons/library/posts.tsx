// 사용 ㄴㄴ

import React from "react";
import firestore from "@react-native-firebase/firestore"

const memoWrite = firestore().collection("MemoTest");

export function createMemo({user, content}){
    return memoWrite.add({
        user,
        content,
        createAt: firestore.FieldValue.serverTimestamp(),
    })
}