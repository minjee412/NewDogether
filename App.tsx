import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './pages/screens/LoginPage'
import Auth from "@react-native-firebase/auth"
import { createStackNavigator } from "@react-navigation/stack"
import TabNavigator from './pages/navigation/TabNavigator';
import 'react-native-gesture-handler'

interface IContext {
  user: any;
  setUser: (_: any) => void;
}
export const AuthContext = React.createContext<IContext>({
  user: {},
  setUser: (_: any ) => {},
})
const App = () => {  
  const Stack = createStackNavigator()
  const [ user, setUser] =React.useState({})
  const [ initializing, setInitialzing] =React.useState(true);

  const onAuthStateChanged = (googleCredential) => {
    setUser(googleCredential);
    if (initializing) setInitialzing(false);
  };

  React.useEffect (() => {
    const subscriber = Auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber
  }, [])
  
  return(
    <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}}>
          {user ? (
            <Stack.Screen name="tabNavigator" component={TabNavigator} />
          ) : (
            <Stack.Screen name="LoginPage" component={LoginPage} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  ) 
}

export default App;