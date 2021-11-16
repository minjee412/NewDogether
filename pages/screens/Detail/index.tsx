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

    React.useEffect(() => {
        const doc = firestore()
            .collection("Users")
            .doc(user.email)
            .collection("Todo")
            // .orderBy("data", "asc")
            .get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    aaa.push(doc.data())
                });
                setDetailV(aaa.reverse())             
                //reverse 쓰는 이유 찾아놓기
            })
    }, [])


    console.log("가나다", firestore().collection("Users").doc("").collection("Todo").get())
    // console.log("props: ", props.item.title)

    console.log("aaa", route.params)

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
                            <Button source={require("../../../public/images/List/delete.png")}/>
                        </Header>
                                <BodyTop>
                                    {route.params.title ? <BodyTitle>{route.params?.title}</BodyTitle> : <BodyTitleEmpty>제목이 없습니다</BodyTitleEmpty> }
                                    {route.params.contents ? <BodyContent>{route.params?.contents}</BodyContent> : <BodyContentEmpty>내용이 없습니다</BodyContentEmpty> }
                                </BodyTop>
                                <BodyMiddel>
                                    {route.params.place ? <BodyText>{route.params.place}</BodyText> : <NullWrapper/> }
                                    {route.params.important ? <BodyText>{route.params.important}</BodyText> : <NullWrapper/> }
                                    {/* <ScrollView horizontal={true} key={i}>
                                        {detailV.filter((el) => el !== "").map((el, i:number) => (
                                            <Wrapper key={i}>
                                                <BodyText>{el.place}</BodyText>
                                                <BodyText>{el.important}</BodyText>
                                                <BodyText>{el.date}</BodyText>
                                            </Wrapper>
                                        ))}
                                    </ScrollView> */}
                                </BodyMiddel>
                                <BodyBottom></BodyBottom>
                </SafeAreaTop>
                <MemoWrite/>
            </SafeArea>
        </>
    )
}

export default Detail;