import * as React from 'react'
import auth from "@react-native-firebase/auth"
import styled from '@emotion/native'
import { SafeAreaView,TouchableOpacity,Text } from 'react-native'
import Modal from 'react-native-simple-modal'
export default function LogoutButtonPage () {
    // const user = auth().currentUser
    const state= {open:false}

    return (
        <>
            <SafeArea>
                <TouchableOpacity onPressOut={() => auth().signOut()} style={{borderColor:'red', borderWidth:1, alignItems:'center', backgroundColor:'lightpink'}}>
                    <Button style={{color:'red', fontWeight:'600'}}>로그아웃</Button>
                </TouchableOpacity>
            </SafeArea>
        </>
    )

}

export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    display: flex;

`
export const Button = styled(Text)`

`