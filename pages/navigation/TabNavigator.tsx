import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainListNavigation from './MainListNavigation'
import MyPageNavigation from './MypageNavigation'
import Ionicons from "react-native-vector-icons/Ionicons"
import { Image } from "react-native"



export default function TabNavigator () {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator initialRouteName="MainList" screenOptions={{tabBarActiveTintColor:'#518099'}} >
            <Tab.Screen name="MainList" 
                component={MainListNavigation}
                options={{headerShown:false, tabBarIcon:({size})=> {
                    return (
                        <Image
                            style={{width:size, height:size }}
                            source={require('../../public/images/List/checkList.png')}
                        />
                    )
                }}}
            />
            <Tab.Screen name="MyPage"
                component={MyPageNavigation} 
                options={{tabBarIcon:({size})=> {
                    return (
                        <Image
                            style={{width:size, height:size }}
                            source={require('../../public/images/List/user.png')}
                        />
                    )
                }}}
            />
        </Tab.Navigator>
    )
}