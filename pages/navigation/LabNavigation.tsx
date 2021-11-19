import * as React from 'react';
import LabPage from '../screens/Lab'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
function LabNavigation () {
    return (
        <Stack.Navigator screenOptions={{headerShown:false, animation:'slide_from_right'}}>
            <Stack.Screen name="LabPage" component={LabPage} />
            
        </Stack.Navigator>
    )
}

export default LabNavigation;