import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'


const width = Dimensions.get('window').width;


export default function InputText({
    placeholder, 
    placeholderTextColor,
    OuterStyle = {},
    onChangeText = () =>{},
    rightIcon,
    onPressRight,
    ...props
    
}) {
  return (
    <View style={styles.flexView}>
      <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor={placeholderTextColor}
      style={{...styles.InputText, ...OuterStyle}}
      {...props}
      />
    {!!rightIcon ?
      <TouchableOpacity onPress={onPressRight}>
        <Text>{rightIcon}</Text>
      </TouchableOpacity>
      : null }
    </View>
  )
}

const styles =StyleSheet.create({
    InputText:{
        width:width*0.8,
        color:'#000'
    },
    flexView:{
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        marginTop:10,
        width:width*0.9,
        borderColor:'gray',
        borderRadius:8,
        paddingHorizontal:5   
    }
})