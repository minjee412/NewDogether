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
} from "./Detail.styles"
import { TouchableOpacity } from "react-native"
import MemoWrite from "../../../src/component/memo/memoWrite"
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'


function Detail({navigation, route}, ){

    const user = auth().currentUser;
    const aaa = [];
    const [ detailV, setDetailV ] = React.useState([])

    const Submit = async () => {
        try {
            const result = await firestore()
                .collection("Users")
                .doc(user.uid)
                .collection("Todo")
                .doc(ID )  // <=========== 해당 괄호 안에 들어갈 값.. 구할 수가 없어요..!
                .delete()
                alert("삭제완료")                
        } catch (error) {
            console.log(error)
            alert("삭제실패")
        }
    }
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

    // console.log("가나다", firestore().collection("Users").doc("").collection("Todo").get())
    // console.log("props: ", props.item.title)
    // console.log("aaa", route.params)

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
                            <HeaderTitle>오늘의 할 일</HeaderTitle>
                            <TouchableOpacity onPressOut={Submit}>
                                <Button source={require("../../../public/images/List/delete.png")}/>
                            </TouchableOpacity>
                        </Header>
                                <BodyTop>
                                    {route.params.title ? <BodyTitle>{route.params?.title}</BodyTitle> : <BodyTitleEmpty>제목이 없습니다</BodyTitleEmpty> }
                                    {route.params.contents ? <BodyContent>{route.params?.contents}</BodyContent> : <BodyContentEmpty>내용이 없습니다</BodyContentEmpty> }
                                </BodyTop>
                                <BodyMiddel>
                                    {route.params.place ? <BodyText>{route.params.place}</BodyText> : <NullWrapper/> }
                                    {route.params.important ? <BodyText>{route.params.important}</BodyText> : <NullWrapper/> } 
                                </BodyMiddel>
                                <BodyBottom></BodyBottom>
                </SafeAreaTop>
                <MemoWrite/>
            </SafeArea>
        </>
    )
}

export default Detail;