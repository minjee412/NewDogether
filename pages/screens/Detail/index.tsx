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
    Footer,
    InnerFooter,
    InputBar,
    SendIcon,
} from "./Detail.styles"
import { TouchableOpacity } from "react-native"
import MemoWrite from "../../../src/component/memo/memoWrite"
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import {v4} from 'uuid'



function Detail({navigation, route, props}, ){

    const [content, setContent] = useState("")
    const ID = v4();

    console.log("디테일페이지 프롭스: ",route)

    const user = auth().currentUser;
    const aaa = [];
    const [ detailV, setDetailV ] = React.useState([])

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



        // 글 삭제
    const Submit = async () => {
        try {
            const result = await firestore()
                .collection("Users")
                .doc(user.email)
                .collection("Todo")
                .doc("74XKZB9reJJePNpNjbYL")
                .delete()
                alert("삭제완료")                
        } catch (error) {
            console.log(error)
            alert("삭제실패")
        }
    }


    //     // 글 삭제
    // const Submit = async () => {
    //     try {
    //         const result = await firestore()
    //             .collection("Users")
    //             .doc(user.email)
    //             .collection("Todo")
    //             .doc(id)
    //             .delete()
    //             alert("삭제완료")                
    //     } catch (error) {
    //         console.log(error)
    //         alert("삭제실패")
    //     }
    // }

    // // 메모 등록
    // const Submit = () => {            
    //     firestore()
    //         .collection('Users')
    //         .doc(user.email)
    //         .collection("Todo")
    //         .doc(route.params.id)
    //         .collection("4")
    //         .add({
    //             content,
    //             ID,
    //             createdAt: new Date
    //         })
    // }


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
                                <BodyBottom>
                                    {/* <Memo>{route.params.id}</Memo> */}
                                </BodyBottom>
                </SafeAreaTop>
                {/* <MemoWrite /> */}
                <Footer>
                    <InnerFooter> 
                        <InputBar 
                            placeholder="댓글을 입력하세요"
                            placeholderTextColor={"#888888"}
                            maxLength={100}
                            value={content}
                            onChangeText={setContent}
                        />
                        {/* <TouchableOpacity onPressOut={MemoSubmit}>
                            <SendIcon source={require("../../../public/images/List/send.png")}/>
                        </TouchableOpacity> */}
                    </InnerFooter>
                </Footer>
            </SafeArea>
        </>
    )
}

export default Detail;