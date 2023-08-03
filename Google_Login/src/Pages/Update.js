// #2 Integration of Firebase Cloud Firestore Database
// https://aboutreact.com/react-native-firebase-cloud-firestore-db
 
import React, {useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import Mytextinput from './Mytextinput';
import Mybutton from './Mybutton';
import firestore from '@react-native-firebase/firestore';
 
const Update = (props) => {
  let [userId, setUserId] = useState('');
  let [firename, setfirename] = useState('');
  let [lastname ,setlastname] =useState('')
  let [email,setemail] =useState('')
  let [password,setpassword] =useState('')
  
  const searchUser = () => {
    if (userId) {
      firestore()
        .collection('RegisterData')
        .doc(userId)
        .get()
        .then((documentSnapshot) => {
    console.log(userId)
          if (documentSnapshot.exists) {
            setfirename(documentSnapshot.data().firename);
            setlastname(documentSnapshot.data().lastname);
            setemail(documentSnapshot.data().email);
            setpassword(documentSnapshot.data().password);
          }
          
          
          

            else {
            setfirename('');
            setlastname('');
           setemail('')
            setpassword('');
          
          }
        });
    }
  };
 
  const updateUser = () => {
    if (userId && firename && lastname && email && password) {
    
      firestore()
        .collection('RegisterData')
        .doc(userId)
        .update({
          firename: firename,
          lastname :lastname,
          email:email,
          password:password
        })
        .then(() => {
          Alert.alert(
            'Success',
            'Updated Successfully',
            [
              {
                text: 'Ok',
                onPress:
                  () => props.navigation.navigate('HomeScreen')
              },
            ],
            {cancelable: false},
          );
        })
        .catch((error) => {
          Alert.alert(
            'Exception',
            error,
            [
              {
                text: 'Ok',
                onPress:
                  () => props.navigation.navigate('HomeScreen'),
              },
            ],
            {cancelable: false},
          );
        });
    } else {
      alert('Please fill all fields');
    }
  };
 
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: 35
      }}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior="padding"
          style={{flex: 1, justifyContent: 'space-between'}}>
          <Mytextinput
            placeholder="Enter User Id"
            style={{padding: 10}}
            value={userId}
            onChangeText={(userId) => setUserId(userId)}
          />
          <Mybutton title="Search User" customClick={searchUser} />
      
          <Mytextinput
            placeholder="Enter the first name"
            value={'' + firename}
            onChangeText={
              (firename) => setfirename(firename)
            }
            maxLength={10}
            style={{padding: 10}}
    
          />
         
         <Mytextinput
            placeholder="Enter the last name"
            value={'' + lastname}
            onChangeText={
              (lastname) => setlastname(lastname)
            }
            maxLength={10}
            style={{padding: 10}}
          />
         
         
         <Mytextinput
            placeholder="Enter the email"
            value={'' + email}
            onChangeText={
              (email) => setemail(email)
            }
            maxLength={10}
            style={{padding: 10}}
          />
         
         
         <Mytextinput
            placeholder="Enter the password"
            value={'' + password}
            onChangeText={
              (password) => setpassword(password)
            }
            maxLength={10}
            style={{padding: 10}}
            keyboardType="numeric"
          />
         
          <Mybutton title="Update User" customClick={updateUser} />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
 
export default Update;
