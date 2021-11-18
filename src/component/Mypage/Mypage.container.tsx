import * as React from 'react'
import UserInformation from '../../../pages/screens/UserInformation'
import NickNamePage from '../../../pages/screens/NickName'
import {
    SafeArea,
    SafeAreaTop,
    Header,
    // Button,
    HeaderTitle,
    // Photo,
    NickName_Wrapper,
    
} from "./Mypage.styles"
// import { TouchableOpacity} from 'react-native'


function MyPagePage ({navigation},){
    
    return(
        <>   
            <SafeArea>   
                <SafeAreaTop>
                    <Header>
                        {/* <TouchableOpacity onPressOut={() => navigation.pop()}>
                            <Button
                                source={require("../../../public/images/List/left-arrow.png")}
                            />
                        </TouchableOpacity> */}
                        <HeaderTitle>마이페이지</HeaderTitle> 
                    </Header>
                </SafeAreaTop>
                <UserInformation/>
                {/* <NickNamePage/> */}
            </SafeArea> 
        </> 
    )
}

export default MyPagePage;
