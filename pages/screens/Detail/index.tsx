import React, { useEffect, useState } from "react"
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
    Aaa
} from "./Detail.styles"
import { TouchableOpacity, Alert } from "react-native"
import MemoWrite from "../../../src/component/memo/memoWrite"
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'



function Detail({navigation, route}){
    const dayDate = `${route.params.createdAt.slice(5,7)}` + "월 " + `${route.params.createdAt.slice(8,10)}` + "일의 할 일"
    // const dayTime = `${route.params.createdAt.slice(11,13)}` + "시 " + `${route.params.createdAt.slice(14,16)}` + "분 작성"

    const user = auth().currentUser;

    // 글 삭제
    const deleteView = () => {
        try {
                Alert.alert(
                    "삭제",
                    "정말로 삭제하시겠어요?",
                    [
                        {text: "취소", style: "cancel"},
                        {
                            text: "삭제",
                            onPress: () => {
                                firestore()
                                    .collection("Users")
                                    .doc(user.email)
                                    .collection("Todo")
                                    .doc(route.params.id)
                                    .delete()
                                    navigation.navigate('MainList')
                            },
                            style: "destructive"
                        }
                    ],
                    {
                        cancelable: true
                    }
                )
        } catch (error) {
            console.log("error: ",error)
            // alert("삭제실패")
        }
    }

    // 댓글 내용 조회
    const MemoData = [];
    const [ memoDT, setMemoDT ] = useState([])
    React.useEffect(() => {
        const doc = firestore()
            .collection("Users")
            .doc(user.email)
            .collection("Todo")
            .doc(route.params.id)
            .collection("Memo")
            .get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    MemoData.push(doc.data())
                });
                setMemoDT(MemoData.reverse())
                
            })
    },[])
    console.log("memoDt: ", memoDT)
    // [firestore().collection("Users").doc(user.email).collection("Todo").get()]
    
    console.log(memoDT.filter((el) => el !== "").map((el) => { console.log("el: ",  el.createdAt, el.memoContent)}))

    return(
        <>
            <SafeArea>
                <SafeAreaTop>
                    <Header>
                        <TouchableOpacity onPressOut={() => navigation.pop()}>
                            <Button
                                source={require("../../../public/images/List/left-arrow.png")}
                            />
                        </TouchableOpacity>
                        <HeaderTitle>{dayDate}</HeaderTitle>
                        <TouchableOpacity onPressOut={deleteView}>
                            <Button source={require("../../../public/images/List/delete.png")}/>
                        </TouchableOpacity>
                    </Header>
                    <BodyTop>
                        {route.params.title ? <BodyTitle>{route.params?.title}</BodyTitle> : <BodyTitleEmpty>제목이 없습니다</BodyTitleEmpty> }
                        {route.params.contents ? <BodyContent>{route.params?.contents}</BodyContent> : <BodyContentEmpty>내용이 없습니다</BodyContentEmpty> }
                    </BodyTop>
                    <BodyMiddel>
                        {/* {route.params.createdAt.slice(0,10) ? <BodyText>🗓 {dayTime}</BodyText> : <NullWrapper/> } */}
                        {route.params.place ? <BodyText>{route.params.place}</BodyText> : <NullWrapper/> }
                        {route.params.important ? <BodyText>{route.params.important}</BodyText> : <NullWrapper/> } 
                    </BodyMiddel>
                    <BodyBottom>
                        <>
                        {memoDT.filter((el) => el !== "").map((el, i:number) => {
                            <MemoListWrapper key={i}>
                                <MemoListLeft>
                                    <MemoContent>{el?.memoContent}</MemoContent>
                                    <MemoCreatedAt>{el?.createdAt.slice(0,10)}</MemoCreatedAt>
                                </MemoListLeft>
                                <MemoDeleteButton source={require("../../../public/images/List/delete.png")} />
                            </MemoListWrapper>
                        })}
                        </>
                        <Aaa />
                    </BodyBottom>
                </SafeAreaTop>
                <MemoWrite route={route}/>
            </SafeArea>
        </>
    )
}

export default Detail;