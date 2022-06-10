import React from "react";
import {View,Text,StyleSheet,SafeView,TouchableOpacity,ScrollView,Image,ImageBackground} from 'react-native';
import { createAppContainer } from 'react-navigation';
import {DrawerItems } from 'react-navigation-drawer';
import {ionicons} from '@expo/vector-icons';

const SideUpper = props => {

    return (
        <ScrollView>
            <ImageBackground source={{uri:"https://raw.githubusercontent.com/DesignIntoCode/DrawerNavigation/master/assets/background.png"}} style={{width:undefined,padding:16,paddingTop:48}}>
 <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3Xl2Hp9cYXCwr_yK5rTYWMEOxs0GUM1pI_ngN7qgWNHSTiVH&s"} }  style={styles.profile}  />
<Text style={styles.name}>John Doe</Text>


            </ImageBackground>
            <View style={styles.container}>

       <DrawerItems {...props} />
            </View>
        </ScrollView>
    )
  
}

const styles=StyleSheet.create({
  container:{
flex:1
  },
profile:{
  width:80,
  height:80,
  borderRadius:40,
  borderWidth:3,
  borderColor:'#fff'

},
name:{
color:'#fff',
fontSize:20,
fontWeight:"800",
marginVertical:8
}
})

export default SideUpper;

