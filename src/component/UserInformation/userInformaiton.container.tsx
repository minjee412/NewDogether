import * as React from 'react'
import auth from "@react-native-firebase/auth"
import {  View, Text} from 'react-native'
import { 
    SafeArea,
    LeftInfo,
    Photo_Title,
    Photo,
    RightInfo,
    Button,
 } from "./userInformation.styles"
import {TouchableOpacity} from "react-native"

export default function UserInformationPage () {
    const user = auth().currentUser

    return (
        <>
            <SafeArea>
                <LeftInfo>
                    <Photo_Title>프로필 사진</Photo_Title>
                        <Photo 
                            source={{
                            uri: user?.photoURL,
                            }}
                        />
                </LeftInfo>
                <RightInfo>
                    <Text>이름: {user?.displayName}</Text>  
                    <Text>이메일: {user?.email}</Text>  
                       
                    <TouchableOpacity onPressOut={() => auth().signOut()}>
                        <Button>로그아웃</Button> 
                    </TouchableOpacity>
                        
                </RightInfo>
            </SafeArea>
        </>
    )
}