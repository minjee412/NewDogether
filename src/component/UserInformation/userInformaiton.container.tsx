import * as React from 'react'
import auth from "@react-native-firebase/auth"
import {  View, Text} from 'react-native'
import { 
    SafeArea,
    Photo_Title,
    InfoWrapper,
    LeftInfo,
    Photo,
    RightInfo,
    
 } from "./userInformation.styles"


export default function UserInformationPage () {
    const user = auth().currentUser

    return (
        <>
            <SafeArea>
                <Photo_Title>프 로 필  정 보</Photo_Title>
                <InfoWrapper>
                    <LeftInfo>
                        
                            <Photo 
                                source={{
                                uri: user?.photoURL,
                                }}
                            />
                    </LeftInfo>
                    <RightInfo>
                        <Text style={{color:'black'}}>이름:   {user?.displayName}</Text>  
                        <Text style={{color:'black'}}>이메일:   {user?.email}</Text>                             
                    </RightInfo>
                </InfoWrapper>
                
            </SafeArea>
        </>
    )
}