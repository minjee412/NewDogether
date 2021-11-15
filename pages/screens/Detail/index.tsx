import React, { useEffect, useState } from "react"
import {
    SafeArea,
    SafeAreaTop,
    Header,
    Button1,
    Button2,
    HeaderTitle,
    Body,
    BodyTop,
    BodyMiddel,
    BodyBottom,
    BodyTitle,
    BodyContent,
    BodyText,
} from "./Detail.styles"
import {ScrollView, TouchableOpacity, FlatList} from "react-native"
import MemoWrite from "../../../src/component/memo/memoWrite"
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { getPosts } from "../../../src/commons/library/posts"

// import MemoList from "../../../src/component/memo/memoList"

function Detail({navigation}){

    // dummy data
    const Aaa = [
        {aaa: "🏠  집", bbb: "🗓  2021.11.23", ccc: "👥  홍길동, 둘리", ddd: "🔴  우선순위 1"},
    ]

    // const user = auth().currentUser;
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        getPosts().then(setPosts);
    }, []);


    return(
        <>
            <SafeArea>
                <SafeAreaTop>
                    <Header>
                        <TouchableOpacity onPressOut={() => navigation.pop()}>
                            <Button1
                                source={require("../../../public/images/List/left-arrow.png")}
                            />
                        </TouchableOpacity>
                        <HeaderTitle>11/1의 두게더</HeaderTitle>
                        <Button2 source={require("../../../public/images/List/pencil.png")}/>
                        <Button1 source={require("../../../public/images/List/delete.png")}/>
                    </Header>
                    <Body>
                        <BodyTop>
                            <BodyTitle>{posts?.email}타이틀</BodyTitle>
                            <BodyContent>콘푸라이트 두그릇 맛있게 먹기</BodyContent>
                        </BodyTop>
                        <BodyMiddel>
                            <ScrollView horizontal={true}>
                                {Aaa.map((el) => (
                                    <>
                                        <BodyText>{el.aaa}</BodyText>
                                        <BodyText>{el.bbb}</BodyText>
                                        <BodyText>{el.ccc}</BodyText>
                                        <BodyText>{el.ddd}</BodyText>
                                    </>
                                ))}
                            </ScrollView>
                        </BodyMiddel>
                        <BodyBottom></BodyBottom>
                    </Body>
                </SafeAreaTop>
                <MemoWrite/>
            </SafeArea>
        </>
    )
}

export default Detail;