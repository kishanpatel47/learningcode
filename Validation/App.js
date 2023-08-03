import { StatusBar, ImageBackground, TouchableOpacity, Text, View, TextInput, Dimensions, Alert, KeyboardAvoidingView } from 'react-native'
import React, { Component } from 'react'
import AppTheme from './src/Helper/AppTheme'
import loginbackground from './src/assets/loginbackground.jpg'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vaildation: false
    }
  }
  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>

        <ImageBackground style={{ flex: 1 }} source={require('./src/assets/loginbackground.jpg')}>
          <StatusBar barStyle={'light-content'} backgroundColor={'#f6c3d2'} />
          <View style={{ justifyContent: 'center', flex: 1, alignSelf: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Welocme back</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Login here</Text>
            <View style={{ backgroundColor: AppTheme.APPCOLOR.GRAY, width: Dimensions.get('screen').width / 1.2 }}>
              <TextInput

                style={{ color: AppTheme.APPCOLOR.WHITE }}

                placeholderTextColor={AppTheme.APPCOLOR.WHITE}
                placeholder=' Enter the  First name'
              />

            </View>

            <View style={{ top: 5, backgroundColor: AppTheme.APPCOLOR.GRAY, width: Dimensions.get('screen').width / 1.2, flexDirection: 'row' }}>
              <TextInput

                style={{ color: AppTheme.APPCOLOR.WHITE }}

                placeholderTextColor={AppTheme.APPCOLOR.WHITE}
                placeholder=' Enter the  Last name'
              />

            </View>
            <View style={{ top: 10, backgroundColor: AppTheme.APPCOLOR.GRAY, width: Dimensions.get('screen').width / 1.2, flexDirection: 'row' }}>
              <TextInput

                style={{ color: AppTheme.APPCOLOR.WHITE }}
                keyboardType={'number-pad'}
                placeholderTextColor={AppTheme.APPCOLOR.WHITE}
                placeholder=' Enter the  Mobile number'
              />

            </View>

            <View style={{ top: 15, backgroundColor: AppTheme.APPCOLOR.GRAY, width: Dimensions.get('screen').width / 1.2, flexDirection: 'row' }}>
              <TextInput

                style={{ color: AppTheme.APPCOLOR.WHITE }}

                placeholderTextColor={AppTheme.APPCOLOR.WHITE}
                placeholder=' Enter the  Email'
              />

            </View>

            <View style={{ top: 20, backgroundColor: AppTheme.APPCOLOR.GRAY, width: Dimensions.get('screen').width / 1.2, flexDirection: 'row' }}>
              <TextInput

                style={{ color: AppTheme.APPCOLOR.WHITE }}

                secureTextEntry={true}

                placeholderTextColor={AppTheme.APPCOLOR.WHITE}
                placeholder=' Enter the  Password'
              />

            </View>

            <TouchableOpacity onPress={() => {
              //   Alert.alert("Register" ,"your succressfully Register", [{
              //   text:'ok',

              // }])


            }}>
              <View style={{ backgroundColor: AppTheme.APPCOLOR.PRIMARY, top: 30, borderRadius: 30 }}>
                <Text style={{ textAlign: 'center', padding: 10, color: AppTheme.APPCOLOR.WHITE }}>
                  Submit
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    )
  }
}
