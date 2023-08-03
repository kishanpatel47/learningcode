import { KeyboardAvoidingView,Text, View,TextInput ,Dimensions,TouchableOpacity,Alert} from 'react-native'
import React, { Component } from 'react'
import firebase from '@react-native-firebase/app'
import  auth   from '@react-native-firebase/auth'


export default class Register extends Component {
constructor(props){
   super(props)
  this.state ={
    firename :'',
    lastname:'',
    email :'',
    password: ''
  } 
}




  render() {
  const {firename,lastname,email,password} =this.state
   
 const  Registerdata=async()=>{
  firebase.app().auth()
  
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    this.props.navigation.navigate('Login');
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });

  // firestore().collection('RegisterData').doc(firename).set({firename:firename,lastname:lastname,email:email,password:password}).then(()=>{
//   Alert.alert(
//     'Success',
//     'You are Registered Successfully',
//     [
//       {
//         text: 'Ok',
//         onPress:
//           () => this.props.navigation.navigate('Dashboard'),
//       },
//     ],
//     {cancelable: false},
//   );
// }).catch((RegisterError) =>{
//   Alert.alert(
//     'Exception',
//     RegisterError,
//     [
//       {
//         text: 'Ok',
//         onPress:
//           () => console.log('Register error' + RegisterError)
//       },
//     ],
//     {cancelable: false},
//   );
// })
} 
  return (
    <KeyboardAvoidingView style={{flex:1,alignSelf:'center'}} >
      <View style={{flex:1,justifyContent:'center',flexDirection:'column'}}>
       <View style={{alignItems:'center',alignSelf:'center'}}>
  <Text style={{fontWeight:'bold',color:'black',fontSize:20}}>Register here </Text>
<TextInput placeholder='Enter the Email' placeholderTextColor='white'  onChangeText={(useremail)=>this.setState({email:useremail})} style={{ textAlign:'center',color:'white',backgroundColor:'grey',width:Dimensions.get('screen').width/1.2,alignSelf:'center',top:20,borderRadius:10}} />
<TextInput placeholder='Enter the Password' placeholderTextColor='white' onChangeText={(userpassword)=>this.setState({password:userpassword})}  style={{ textAlign:'center',color:'white',backgroundColor:'grey',width:Dimensions.get('screen').width/1.2,alignSelf:'center',top:25,borderRadius:10}} />

  <TouchableOpacity onPress={()=>Registerdata()}>
   <View style={{padding:15,top:35,backgroundColor:'green',width:Dimensions.get('screen').width/2,borderRadius:25}}>
       <Text  style={{textAlign:'center',color:'white'}} >
        Register here
       </Text>
   </View>

  </TouchableOpacity>



  

 <View>


 </View>
 
       </View> 
       <TouchableOpacity style={{bottom:0,position:'absolute',alignSelf:'center'}} onPress={()=>{


         this.props.navigation.navigate('Login')
       }}>
       <View style={{bottom:5,position:'absolute',alignItems:'center',alignSelf:'center'}}>
<Text style={{textAlign:'center',color:'black'}}>
 Already register ? <Text style={{color:'red'}}>Login now </Text>

</Text>
</View>    
</TouchableOpacity>
 
      </View>
      </KeyboardAvoidingView>
    )
  }
}