import * as React from 'react'
import { Text, View, Button} from 'react-native'
import auth from '@react-native-firebase/auth'

export default function MyPage () {
    const user = auth().currentUser;
    return (
        <View>
            <Text>{user?.displayName}</Text>
            <Text>{user?.email}</Text>
            <View>
                <Button title="logout" onPress={() => auth().signOut()}/>
            </View>
        </View>
    )
}