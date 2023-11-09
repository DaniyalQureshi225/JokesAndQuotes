import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function AppButton({Tex, onPress}) {
  return (
    <View>
    <TouchableOpacity style={{backgroundColor:'blue', padding:10, margin:10, borderRadius:5, alignItems:'center', justifyContent:'center'}} onPress={onPress}>
        <Text style={{color:'#fff'}}>{Tex}</Text>
    </TouchableOpacity>
    </View>
  )
}