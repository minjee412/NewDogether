import * as React from 'react'
import auth from "@react-native-firebase/auth"
import {  View, Text,TouchableOpacity} from 'react-native'
import { 
    SafeArea,
    InforHeader,
    Photo_Title,
    InfoWrapper,
    LeftInfo,
    Photo,
    RightInfo,
    Button,
    LogoutButton,
} from "./userInformation.styles"


export default function UserInformationPage () {
    const user = auth().currentUser
    
    return (
        <>
            <SafeArea>
                <InforHeader>
                    <Photo_Title>프로필 정보</Photo_Title>
                    <InfoWrapper>
                        <LeftInfo>
                            <Photo source={{uri: user?.photoURL,}}/>
                        </LeftInfo>
                        <RightInfo>
                            <Text 
                                style={{
                                color:'white', 
                                fontWeight:'bold', 
                                fontSize: 16,
                                marginLeft:8,
                                }}
                            >   
                                {user?.displayName}
                            </Text>  
                            <Text style={{color:'white', fontSize: 14}}>   {user?.email}</Text>                             
                        </RightInfo>
                    </InfoWrapper>
                </InforHeader>
                <LogoutButton 
                    onPressOut={() => auth().signOut()} 
                    // style={{borderColor:'red', borderWidth:1, alignItems:'center', backgroundColor:'lightpink'}}
                >
                    <Button>로그아웃</Button>
                </LogoutButton>
                
            </SafeArea>
        </>
    )
}