// 사용 ㄴㄴ

import React from "react";
import firestore from "@react-native-firebase/firestore"

const memoWrite = firestore().collection("Memo");

export function createMemo({user, content}){
    return memoWrite.add({
        user,
        content,
        createAt: firestore.FieldValue.serverTimestamp(),
    })
}

export async function getPosts(){
    const snapshot = await memoWrite.get();
    const posts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return posts;
}