import * as React from 'react'
import {
    SafeArea,
    NickName_Wrapper,
    NickName,
    NickName_Title,
    ChangeNickName,
    NickNameInput,
} from "./nickname.styles"
import {Text} from "react-native"

function NickNamePage () {
        return(
            <>
                <SafeArea>
                    <NickName_Wrapper>
                        <NickName>
                            <NickName_Title>닉네임</NickName_Title>
                        </NickName>
                        <ChangeNickName>
                            <NickNameInput>

                            </NickNameInput>
                        </ChangeNickName>
                    </NickName_Wrapper>
                </SafeArea>
            </>
        )
}

export default NickNamePage;