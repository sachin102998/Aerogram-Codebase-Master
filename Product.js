import * as React from 'react';
import { Text, View, StyleSheet,ActivityIndicator ,FlatList,TextInput,Button,ScrollView,Image,TouchableOpacity} from 'react-native';


export default class Product extends React.Component{
  constructor(props) {
    super(props);



this.state={

}
  }


  render(){


    return(
      <View style={{height:300,backgroundColor:'#fff',margin:30,borderRadius:15,}}>
        <View style={{flex:3,borderTopLeftRadius:15,borderTopRightRadius:15}}>
        <Image source={{uri:this.props.imageurl}} style={{flex:1,borderTopLeftRadius:15,borderTopRightRadius:15}} /> 
        </View>
        <View style={{flex:2,backgroundColor:'#fff',borderBottomLeftRadius:15,borderBottomRightRadius:15,justifyContent:'center',alignItems:'center'}}>
        <Text style= {{textAlign:'center',marginTop:8,color:"#6495ed",fontSize:20,fontWeight:'bold'}}> AirFilter Pro </Text>
        <Text style={{textAlign:'center',marginBottom:10,color:"#c1cdcd",fontSize:16}}>The world smartest air monitor</Text>
        <TouchableOpacity style={{borderColor:'#000000',width:140,backgroundColor:"#6495ed",borderRadius:5}}><Text style={{padding:5,fontSize:18,textAlign:'center',color:"#fff"}}>Learn More</Text></TouchableOpacity>
        
        </View>
        </View>
    )
  }
}