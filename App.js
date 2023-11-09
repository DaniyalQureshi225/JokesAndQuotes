import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AfterAuth from './src/Routes/AfterAuth';

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

 
  return (
    <NavigationContainer>
    <AfterAuth />
    </NavigationContainer>
  );
}
