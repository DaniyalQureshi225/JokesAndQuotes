import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Stack = createNativeStackNavigator();

export default function AfterAuth() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const value = await AsyncStorage.getItem('token');
        if (value !== null) {
          setIsLogin(value);
        } 
      } catch (error) {
        console.error('AsyncStorage error: ', error);
      }
    };

    checkLoginStatus();
  }, []); 

console.log(isLogin);

  return (
<Stack.Navigator initialRouteName={isLogin ? 'Home' : 'Login'}>
  <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
  <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
</Stack.Navigator>

  )
}