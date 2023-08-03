import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import auth from '@react-native-firebase/auth';
 

const PhoneSignIn = ()=>{
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);
  const [number, setNumber] = useState(false)
  const [code, setCode] = useState('');

  // Handle the button press
  const _signInWithPhoneNumber = async()=>{
    if(!number) return
    alert(number)
    const confirmation = await auth().signInWithPhoneNumber(number)
    console.log(confirmation)
    setConfirm(confirmation);
  }

  const confirmCode= async()=>{
    try {
      await confirm.confirm(code).then(res => {
        alert(`Verified! ${res.user.uid}`)
      })
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <View style= {{flex: 1}}>
        <TextInput style={{ width: '100%'}} placeholder= "enter number +923075018584" onChangeText={text => setNumber(text)}/>
        <Button
          title="Phone Number Sign In"
          onPress={() => _signInWithPhoneNumber()}
        />
      </View>
    );
  }

  return (
    <>
      <TextInput value={code} placeholder="Code" onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
}

export default PhoneSignIn