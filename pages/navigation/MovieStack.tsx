import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Movies from '../screens/Movie/MoviePage';
import MovieDetail from '../screens/MovieDetail';

const Stack = createNativeStackNavigator();

export default function MovieStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="Movies" component={Movies} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
    </Stack.Navigator>
  );
}
