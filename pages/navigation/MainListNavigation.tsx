import * as React from 'react';
import MainList from '../screens/MainList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../screens/Register';
import Calendar from '../screens/Calendar'; 
const Stack = createNativeStackNavigator();

export default function MainListNavigation() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="MainList" component={MainList} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Calendar" component={Calendar} />
      </Stack.Navigator>
  );
}
