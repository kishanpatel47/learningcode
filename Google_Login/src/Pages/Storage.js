import { Text, View,TouchableOpacity,Dimensions,Image,Button} from 'react-native'
import React, { Component } from 'react'
import * as ImagePicker from "react-native-image-picker"



export default class Storage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resourcePath: {},
    };
  }
  selectFile = () => {
    console.log('upload image  here  :- >')
    var options = {
      title: 'Select Image',
      customButtons: [
        { 
          name: 'customOptionKey', 
          title: 'Choose file from Custom Option' 
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath: source,
        });
      }
    });
  }
      
  render() {
    
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
   <Image  style={{height:100,width:100}} source={require('../Assets/upload.png')}  />
   <Text>{}</Text>
   <Button onPress={() =>
                        ImagePicker.launchImageLibrary(
                          {
                            mediaType: 'photo',
                            includeBase64: false,
                            maxHeight: 200,
                            maxWidth: 200,
                          },
                          (response) => {
                            console.log(response);
                            this.setState({resourcePath: response});
                          },
                        )
                      }
                title="Select Image"/>
      </View>
    )
  }
}