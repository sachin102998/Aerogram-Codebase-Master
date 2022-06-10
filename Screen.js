import React from "react";
import {View,Text,Stylesheet,SafeView,TouchableOpacity} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons'

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
export default class Screen extends React.Component{
   
  render() {
    return(
      <View style={{flex:1,backgroundColor:"#fff"}}>
      <SafeView style={{flex:1}}>
<TouchableOpacity style={{alignItems:"flex-start",margin:16}} onPress={this.props.navigation.openDrawer}>
<FontAwesome5 name="bars" size={24} /> 

</TouchableOpacity>
<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
<Text>{this.props.name} </Text>

</View>
</SafeView>

      </View>
    )
  }
}