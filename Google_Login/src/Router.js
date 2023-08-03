import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Googleloginsigninfo from './Pages/Googleloginsigninfo';
import Googlelogin from './Pages/Googlelogin';
import Cloudfirestorage from './Pages/Cloudfirestorage';
import Register from './Pages/Register';
import Update from './Pages/Update';
import ViewUser from './Pages/Viewuser';
import Dashboard from './Pages/Dashboard';
import DeleteUser from './Pages/DeleteUser';
import Login from './Pages/Login';
import PhoneAuthication from './Pages/PhoneAuthication';
import Storage from './Pages/Storage';
const RootStack =createNativeStackNavigator();
export default function Route() {
return(
    <NavigationContainer>
    <RootStack.Navigator initialRouteName='PhoneAuthication'>
    <RootStack.Screen name='Cloudfirestorage' component={Cloudfirestorage} ></RootStack.Screen>
        <RootStack.Screen  name='PhoneAuthication' component={PhoneAuthication}></RootStack.Screen>
        <RootStack.Screen name='Googlelogin' component={Googlelogin}></RootStack.Screen>
        <RootStack.Screen name='Register' component={Register}></RootStack.Screen>
        <RootStack.Screen  name='Dashboard' component={Dashboard}/>
        <RootStack.Screen  name='Update' component={Update}/>
        <RootStack.Screen name = 'ViewUser' component={ViewUser}></RootStack.Screen>
        <RootStack.Screen    name='DeleteUser' component={DeleteUser}></RootStack.Screen>
        <RootStack.Screen    name='Login' component={Login}></RootStack.Screen>
      <RootStack.Screen  name='Storage' component={Storage}></RootStack.Screen>
        <RootStack.Screen name='Googleloginsigninfo' component={Googleloginsigninfo}></RootStack.Screen>
    </RootStack.Navigator>
    </NavigationContainer>
)

}
