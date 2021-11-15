import * as React from 'react'
import { Text, View, Button, Image} from 'react-native'
import auth from '@react-native-firebase/auth'
import styled from '@emotion/native';
import firestore from '@react-native-firebase/firestore'

export default function MyPagePage (){
    const user = auth().currentUser;
    function writeToDo () {
        firestore()
            .collection('Users')
            .doc(user.email)
            .collection("TestTodo")
            .add({
                title: '9시기상',
                contents: '양치하기',
                id: "115618080895428113971",
            })
            .then((res) =>  {
                console.log(res)
                console.log('ToDo added!');
            }).catch(error=> console.log(error))
    }
    return (
        <View>
            <Text>{user?.displayName}</Text>
            <Text>{user?.email}</Text>
            <Photo 
                source={{
                uri: user?.photoURL,
                }}/>
            <View>
                <Button title="logout" onPress={() => auth().signOut()}/>
            </View>
            <Button onPress={writeToDo} title="데이터보내기!"/>
        </View>
    )
}

const Photo = styled(Image)`
 width: 100px;
 height: 100px;
 border-radius: 50px;
`