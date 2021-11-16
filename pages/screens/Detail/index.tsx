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
    Wrapper,
} from "./Detail.styles"
import {ScrollView, TouchableOpacity, FlatList} from "react-native"
import MemoWrite from "../../../src/component/memo/memoWrite"
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { getPosts } from "../../../src/commons/library/posts"

// import MemoList from "../../../src/component/memo/memoList"

function Detail({navigation}){

    // // dummy data
    // const Aaa = [
    //     {bbb: "🏠  집", bbb: "🗓  2021.11.23", ccc: "👥  홍길동, 둘리", ddd: "🔴  우선순위 1"},
    // ]

    // const [post, setPost] = useState(null);

    // const user = auth().currentUser;
    // const WriteCollection = firestore().collection('Users').doc(user.email).collection('Todo')
    // // console.log("데이터: ", firestore().collection('Users').doc(user.email).collection('Todo').get())
    
    // async function getPosts(){
    //     const snapshot = await WriteCollection.get();
    //     const posts = snapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       ...doc.data(),
    //     }));
    //     return posts;
    //   }

    //   React.useEffect(()=> {
    //     getPosts().then(setPost)
    //  },[])    


    const user = auth().currentUser;
    const aaa = [];
    const [ detailV, setDetailV ] = React.useState([])
    const [ opt, setOpt ] = React.useState([]);

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
                setOpt(aaa.reverse())
              
                //reverse 쓰는 이유 찾아놓기
            })
    }, [])
    // [firestore().collection("Users").doc("").collection("Todo").get()]
    console.log("가나다", firestore().collection("Users").doc("").collection("Todo").get())



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
                            <HeaderTitle>date</HeaderTitle>
                            <Button2 source={require("../../../public/images/List/pencil.png")}/>
                            <Button1 source={require("../../../public/images/List/delete.png")}/>
                        </Header>
                        {detailV.map((el:any, i: number) => (
                            <Body key={i}>
                                <BodyTop>
                                    <BodyTitle>{el?.title}</BodyTitle>
                                    <BodyContent>{el?.contents}</BodyContent>
                                </BodyTop>
                                <BodyMiddel>
                                    <ScrollView horizontal={true}>
                                        {opt.filter((el) => el !== "").map((el, j:number) => (
                                            <Wrapper key={j}>
                                                <BodyText>{el.place}</BodyText>
                                                <BodyText>{el.important}</BodyText>
                                                {/* <BodyText>{el.date}</BodyText> */}
                                            </Wrapper>
                                        ))}
                                    </ScrollView>
                                </BodyMiddel>
                                <BodyBottom></BodyBottom>
                            </Body>
                        ))}
                </SafeAreaTop>
                <MemoWrite/>
            </SafeArea>
        </>
    )
}

export default Detail;