import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainListNavigation from './MainListNavigation'
import MyPageNavigation from './MypageNavigation'
// import { Image } from "react-native"
import Movies from '../screens/Movie/MoviePage'
import { useColorScheme } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export default function TabNavigator () {
    const Tab = createBottomTabNavigator()
    const isDark = useColorScheme() === 'dark';
    

    return (

        <Tab.Navigator initialRouteName="MainList" screenOptions={{
                tabBarActiveTintColor: isDark ? "#ffbe0b" : '#518099',
                tabBarInactiveTintColor: isDark ? "gray" : "gray" ,
                
                tabBarStyle:{ backgroundColor: isDark ? "black" : "white"},             
                tabBarShowLabel:false
        }} >


            <Tab.Screen name="MainList" 
                component={MainListNavigation}
                options={{headerShown:false, tabBarIcon:({focused, color, size})=> {
                    return (
                        <MaterialCommunityIcons name={focused ? 'clipboard-list' :'clipboard-list-outline'} color={color} size={size} />
                    )
                }}}
            />

            <Tab.Screen name="Movie"
                component={Movies} 
                options={{headerShown:false,tabBarIcon:({focused, color, size})=> {
                    return (
                        <Ionicons name={focused ?'film' : 'film-outline'} color={color} size={size} />
                    )
                }}}
            />

            <Tab.Screen name="MyPage"
                component={MyPageNavigation} 
                options={{tabBarIcon:({focused, color, size})=> {
                    return (
                        <FontAwesome name={focused ?'user' : 'user-o'} color={color} size={size} />
                    )
                }}}
            />
        </Tab.Navigator>
    )
}