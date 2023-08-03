import { KeyboardAvoidingView,Text, View,TextInput ,Dimensions,TouchableOpacity,Alert} from 'react-native'
import React, { Component } from 'react'
import firebase from '@react-native-firebase/app'
import  auth   from '@react-native-firebase/auth'
export default class Login extends Component {
constructor(props){
   super(props)
  this.state ={
    
    email :'',
    password: ''
  } 
}




  render() {
  const {firename,lastname,email,password} =this.state
   
 const  Loginhere=async()=>{
firebase.app().auth().signInWithEmailAndPassword(email,password).then(()=>
{
  alert('Login here '+ email),
  console.log('User account created & signed in12!');
  
})

} 
  return (
    <KeyboardAvoidingView style={{flex:1,alignSelf:'center'}} >
      <View style={{flex:1,justifyContent:'center',flexDirection:'column'}}>
       <View style={{alignItems:'center',alignSelf:'center'}}>
  <Text style={{fontWeight:'bold',color:'black',fontSize:20}}>Login here </Text>
<TextInput placeholder='Enter the Email' placeholderTextColor='white'  onChangeText={(useremail)=>this.setState({email:useremail})} style={{ textAlign:'center',color:'white',backgroundColor:'grey',width:Dimensions.get('screen').width/1.2,alignSelf:'center',top:20,borderRadius:10}} />
<TextInput placeholder='Enter the Password' placeholderTextColor='white' onChangeText={(userpassword)=>this.setState({password:userpassword})}  style={{ textAlign:'center',color:'white',backgroundColor:'grey',width:Dimensions.get('screen').width/1.2,alignSelf:'center',top:25,borderRadius:10}} />

  <TouchableOpacity onPress={()=>Loginhere()  }>
   <View style={{padding:15,top:35,backgroundColor:'green',width:Dimensions.get('screen').width/2,borderRadius:25}}>
       <Text  style={{textAlign:'center',color:'white'}} >
        Login  here
       </Text>
   </View>

  </TouchableOpacity>



  

 <View>


 </View>
 
       </View> 
       <TouchableOpacity style={{bottom:0,position:'absolute',alignSelf:'center'}} onPress={()=>{


         this.props.navigation.navigate('Register')
       }}>
       <View style={{bottom:5,position:'absolute',alignItems:'center',alignSelf:'center'}}>
<Text style={{textAlign:'center',color:'black'}}>
 Already register ? <Text style={{color:'red'}}>Register now </Text>

</Text>
</View>    
</TouchableOpacity>
 
      </View>
      </KeyboardAvoidingView>
    )
  }
}