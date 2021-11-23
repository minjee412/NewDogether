import * as React from 'react'
import {
    SafeArea,
    Header,
    Header_Title,
    MyFriendList,
    FriendText,
} from './myFriendList.styles'

function MyFriendListPage () {
    return (
        <>
            <SafeArea>
                <Header> 
                    <Header_Title>친구 목록</Header_Title>
                </Header>
                {/* <MyFriendList>
                    <FriendText>노원두</FriendText>     
                    <FriendText>nowon@naver.com</FriendText>
                </MyFriendList>
                <MyFriendList>
                    <FriendText>호날두</FriendText>     
                    <FriendText>woorihyung@gmail.com</FriendText>
                </MyFriendList> 
                <MyFriendList>
                    <FriendText>윈터</FriendText>     
                    <FriendText>winter@gmail.com</FriendText>
                </MyFriendList> 
                <MyFriendList>
                    <FriendText>손흥민</FriendText>     
                    <FriendText>wooriheung@gmail.com</FriendText>
                </MyFriendList> 
                <MyFriendList>
                    <FriendText>아이린</FriendText>     
                    <FriendText>irene@naver.com</FriendText>
                </MyFriendList>   */}
            </SafeArea>
        </>
    )
}

export default MyFriendListPage;