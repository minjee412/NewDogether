import * as React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import styled from '@emotion/native'

export default function PushPage () {
    return (
        <>
            <SafeArea>
                <PushView>
                    <PushText>
                        푸시알림
                    </PushText>
                </PushView>
            </SafeArea>
        </>
    )
}

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    display:flex;
    /* background-color:  #222222; */
    /* margin-top: 30px; */
    border-radius: 10px;
    align-items: center;
    margin-left:25px;
    margin-right:25px;
    background-color: #FFBE0B;
`

const PushView = styled(View)`
    flex: 1;
    
    display:flex;
    justify-content: center;
   
`
const PushText = styled(Text)`
    flex:1;
    display:flex;
    font-size: 14px;
    color: #0d0d0d;
    margin-top:12px;
    justify-content:center;
    font-weight: bold;
    
`