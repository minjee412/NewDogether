import * as React from 'react';
import MainList from '../screens/MainList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../screens/Register';
import CalendarScreen from '../screens/Calendar'; 
import Detail from '../screens/Detail';
const Stack = createNativeStackNavigator();

export default function MainListNavigation() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false, animation:'slide_from_right'}}>
        <Stack.Screen name="MainList" component={MainList} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
      </Stack.Navigator>
  );
}
