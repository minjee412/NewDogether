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
import { TouchableOpacity, Alert } from "react-native"
import MemoWrite from "../../../src/component/memo/memoWrite"
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import {v4} from 'uuid'



function Detail({navigation, route}, ){
    console.log("aaa", route)
    const [content, setContent] = useState("")
    const ID = v4();

    console.log("디테일페이지 프롭스: ",route)

    const user = auth().currentUser;
    // const aaa = [];
    // const [ detailV, setDetailV ] = React.useState([])

    // 글 삭제
    const Submit = () => {
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
            console.log(error)
            // alert("삭제실패")
        }
    }



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