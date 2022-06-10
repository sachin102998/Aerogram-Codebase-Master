import React from 'react';
 import { Text, View, StyleSheet,ActivityIndicator ,FlatList,TextInput,Button,Image,TouchableOpacity,Linking} from 'react-native';

 export default class Newsblock extends React.Component{
   constructor(props) {
     super(props);
   }

   render() {
     return (
       <View style={{height:430}}>
         
         <View style={{flex:2}}>
         <Image source={{uri:this.props.imgurl}} style={{flex:1}}/>
         </View>
       <View style={{position:'absolute', height:225,backgroundColor:'#fff',zIndex:1000,flex:1,marginTop:135,margin:20,borderRadius:14,justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontWeight:'bold',margin:8}}>{this.props.title}</Text>
              <Text style={{margin:8}}>{this.props.content}</Text>
               <TouchableOpacity style={{borderColor:'#000000',width:140,backgroundColor:"#f4511e",borderRadius:5,}} onPress={() => Linking.openURL(this.props.newsurl)} ><Text style={{padding:5,fontSize:18,textAlign:'center',color:"#fff",}}>Read More</Text></TouchableOpacity>
         </View>
         <View style={{flex:3,backgroundColor:'#EBF5FB'}}>
            
         </View>
       </View>
     )
   }
 }

//  class Block extends React.Component{
//    constructor(props) {
//      super(props);
//    }
//    render(){
//      return(
         
//      )
//    }
//  }