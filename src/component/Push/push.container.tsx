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
    background-color: #222222;
    display:flex;
    border-radius: 20px;
`

const PushView = styled(View)`
    flex: 1;
    background-color: #222222;
    display:flex;
    justify-content: center;
    border-radius: 20px;
`
const PushText = styled(Text)`
    flex:0.3;
    display:flex;
    font-size: 16px;
    margin-left: 22px;
    font-weight: bold;
    color: white;
`