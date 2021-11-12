import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginPage from './pages/screens/LoginScreen';
import MainListNavigation from './pages/navigation/MainListNavigation';
import MyPage from './pages/navigation/MypageNavigation';


const Tab = createBottomTabNavigator()

export default function App() {  

  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName="LoginPage" screenOptions={{tabBarActiveTintColor:'red', tabBarActiveBackgroundColor:'beige'}} >
        <Tab.Screen name="LoginPage" 
          component={LoginPage}
          options={{headerShown:false, tabBarIcon:() => (<Ionicons
                    name="log-in-outline"
                    size={20}
          />
          )
          }}
        />
        <Tab.Screen name="MainList" 
          component={MainListNavigation} 
          options={{headerShown:false, tabBarIcon:()=>(<Ionicons 
                    name="list-outline"
                    size={20}/>
          )}} 
        />
        <Tab.Screen name="MyPage" 
          component={MyPage} 
          options={{tabBarIcon:()=>(<Ionicons
            name="apps-outline"
            size={20}/>

          )}}
        />
        <Tab.Screen name="Detail" 
          component={MainListNavigation} 
          options={{headerShown:false, tabBarIcon:()=>(<Ionicons 
                    name="list-outline"
                    size={20}/>
          )}} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  ) 
}
