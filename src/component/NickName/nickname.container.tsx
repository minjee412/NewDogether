import * as React from 'react'
import {
    SafeArea,
    NickName_Wrapper,
    NickName,
    NickName_Title,
    ChangeNickName,
    NickNameInput,
} from "./nickname.styles"


function NickNamePage () {
        return(
            <>
                <SafeArea>
                    <NickName_Wrapper>
                        <NickName>
                            <NickName_Title>닉 네 임</NickName_Title>
                        </NickName>
                        <ChangeNickName>
                            <NickNameInput>
                                이중현
                            </NickNameInput>
                        </ChangeNickName>
                    </NickName_Wrapper>
                </SafeArea>
            </>
        )
}

export default NickNamePage;