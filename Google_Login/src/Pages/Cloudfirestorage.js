import { Text, View,TextInput ,Dimensions,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'

export default class Cloudfirestorage extends Component {
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',flexDirection:'column'}}>
       <View style={{alignItems:'center',alignSelf:'center'}}>
  <Text style={{fontWeight:'bold',color:'black',fontSize:20}}>Welcome Back</Text>
<TextInput placeholder='Enter the Email' placeholderTextColor='white'  style={{ textAlign:'center',color:'white',backgroundColor:'grey',width:Dimensions.get('screen').width/1.2,alignSelf:'center',top:10,borderRadius:10}} />
<TextInput placeholder='Enter the Password' placeholderTextColor='white'  style={{ textAlign:'center',color:'white',backgroundColor:'grey',width:Dimensions.get('screen').width/1.2,alignSelf:'center',top:15,borderRadius:10}} />
  <TouchableOpacity>
   <View style={{padding:15,top:30,backgroundColor:'green',width:Dimensions.get('screen').width/2,borderRadius:25}}>
       <Text  style={{textAlign:'center',color:'white'}} >
           Login here 
       </Text>
   </View>

  </TouchableOpacity>

 <View>


 </View>
 
       </View> 
       <TouchableOpacity style={{bottom:0,position:'absolute',alignSelf:'center'}}>
       <View style={{bottom:5,position:'absolute',alignItems:'center',alignSelf:'center'}}>
<Text style={{textAlign:'center',color:'black'}}>
 Not a Register User ? <Text style={{color:'red'}}>Register now </Text>

</Text>
</View>    
</TouchableOpacity>
      </View>
    )
  }
}