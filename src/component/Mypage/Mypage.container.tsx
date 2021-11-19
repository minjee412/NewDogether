import * as React from 'react'
import UserInformation from '../../../pages/screens/UserInformation'
import NickName from '../../../pages/screens/NickName/Detail'
import MyFriendList from '../../../pages/screens/MyFriend/list/index'
import {
    SafeArea,
    SafeAreaTop,
    Button,
    HeaderTitle,
    // Photo,
    UserInformationWrapper,
    NickNameWrapper,
    MyFriendListWrapper,
} from "./Mypage.styles"
import { TouchableOpacity} from 'react-native'


function MyPagePage ({navigation},){
    
    return(
        <>   
            <SafeArea>   
                <SafeAreaTop>
                    {/* <TouchableOpacity onPressOut={() => navigation.pop()}>
                        <Button
                            source={require("../../../public/images/List/left-arrow.png")}
                        />
                    </TouchableOpacity> */}
                    <HeaderTitle>마이페이지</HeaderTitle> 
                   
                </SafeAreaTop>
                <UserInformationWrapper>
                    <UserInformation/>
                </UserInformationWrapper>
                <NickNameWrapper>      
                    <NickName/>
                </NickNameWrapper>
                <MyFriendListWrapper>
                    <MyFriendList/>    
                </MyFriendListWrapper> 
            </SafeArea> 
        </> 
    )
}

export default MyPagePage;
