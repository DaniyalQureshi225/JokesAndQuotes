import { View, Text } from 'react-native'
import React,{useState} from 'react'
import InputText from '../../Components/InputText'
import Entypo from 'react-native-vector-icons/Entypo';
import Button from '../../Components/Button';
import AppButton from '../../Components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {

    const  [isVisible, setIsVisible] = useState(true);
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    

    const show = <Entypo name="eye" size={15} color="#000" />;
    const hide = <Entypo name="eye-with-line" size={15} color="#000" />;


    const LoginFunction = async () => {
        if (email === 'user' && password === '123456') {
          try {
            await AsyncStorage.setItem('token', 'isLogin');
            console.log('success')
            navigation.navigate('Home')
          } catch (error) {
            console.error('AsyncStorage error: ', error);
          }
        } else {
          alert('Incorrect password');
        }
      };
      


  return (
    <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
   
    <InputText
    placeholder={'your name'}
    placeholderTextColor={'#000'}
    keyboardType='email-address'
    onChangeText={setEmail}
    />

    

<InputText
    placeholder={'your passsword'}
    placeholderTextColor={'#000'}
    OuterStyle={{}}
    secureTextEntry={isVisible}
    rightIcon={isVisible ? hide: show}
     onPressRight={()=>{setIsVisible(!isVisible)}}
     onChangeText={setPassword}
    />

    <AppButton
    Tex={'Login'}
    onPress={()=>LoginFunction()}
    />
    
   </View>
  )
}