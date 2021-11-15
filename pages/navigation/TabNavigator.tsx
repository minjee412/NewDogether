import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainListNavigation from './MainListNavigation'
import MyPageNavigation from './MypageNavigation'
import Detail from '../screens/Detail'
import Ionicons from "react-native-vector-icons/Ionicons"

export default function TabNavigator () {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator initialRouteName="MainList" screenOptions={{tabBarActiveTintColor:'red', tabBarActiveBackgroundColor:'beige'}} >
            <Tab.Screen name="MainList" 
                component={MainListNavigation} 
                options={{headerShown:false, tabBarIcon:()=>(<Ionicons 
                        name="list-outline"
                        size={20}/>
                )}} 
            />
            <Tab.Screen name="MyPage" 
                component={MyPageNavigation} 
                options={{tabBarIcon:()=>(<Ionicons
                name="apps-outline"
                size={20}/>

                )}}
            />
            <Tab.Screen name="Detail" 
                component={Detail} 
                options={{headerShown:false, tabBarIcon:()=>(<Ionicons 
                        name="list-outline"
                        size={20}/>
                )}} 
            />
        </Tab.Navigator>
        
    )
}