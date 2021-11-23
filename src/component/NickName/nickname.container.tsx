import * as React from 'react'
import {
    SafeArea,
    NickName_Wrapper,
    NickName,
    NickName_Title,
    ChangeNickName,
    NickNameInput,
} from "./nickname.styles"
import auth from "@react-native-firebase/auth"

function NickNamePage () {
    const user = auth().currentUser
        return(
            <>
                <SafeArea>
                    <NickName_Wrapper>
                        <NickName>
                            <NickName_Title>닉네임</NickName_Title>
                        </NickName>
                        <ChangeNickName>
                            <NickNameInput>
                                {user?.displayName}
                            </NickNameInput>
                        </ChangeNickName>
                    </NickName_Wrapper>
                </SafeArea>
            </>
        )
}

export default NickNamePage;