import * as React from 'react'
import {
    SafeArea,
    Header,
    Header_Title,
    MyFriendList,
} from './myFriendList.styles'

function MyFriendListPage () {
    return (
        <>
            <SafeArea>
                <Header> 
                    <Header_Title>친 구  목 록</Header_Title>
                </Header>
                <MyFriendList>

                </MyFriendList> 
            </SafeArea>
        </>
    )
}

export default MyFriendListPage;