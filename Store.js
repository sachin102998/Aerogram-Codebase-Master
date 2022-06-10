import * as React from 'react';
import { Text, View, StyleSheet,ActivityIndicator,TouchableOpacity ,FlatList,TextInput,Button,ScrollView,Image,SafeAreaView} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Animated,{nativeEvent} from 'react-native-reanimated'
import Product from '../components/Product';
import {createDrawerNavigator } from 'react-navigation-drawer';
import 'react-native-material-ui';
import {ProfileScreen,MessageScreen,ActivityScreen,ListScreen,ReportScreen,StatisticScreen,SignOutScreen} from '../components/Index';
import {FontAwesome5} from '@expo/vector-icons'
import SideUpper from '../components/SideUpper';
class Store extends React.Component{
  static navigationOptions = {
    title: 'Store',
    headerLeft: <TouchableOpacity style={{alignItems:"flex-start",margin:16}}>
<FontAwesome5 name="bars" size={24} /> 

</TouchableOpacity>,
    headerStyle: {
      backgroundColor: '#0345a5',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props) {
    super(props);
  }
  
    render(){ 
      return(
        
        <View style={{flex:1,backgroundColor:'#EBF5FB'}}>
       
      
        <ScrollView >
 <View >
        <Text style={{fontSize:24,marginTop:14,marginLeft:18,color:"#6495ed",fontWeight:'bold',}}>Monitor Your Air</Text>

  </View>
        <Product imageurl="https://5.imimg.com/data5/IX/IG/MY-22948224/commercial-air-purifier-500x500.jpg"/>


       <Product imageurl="https://img.etimg.com/thumb/msid-55330176,width-643,imgsize-47050,resizemode-4/all-you-need-to-know-before-purchasing-an-air-purifier.jpg"/>


        <Product imageurl="https://thewirecutter.com/wp-content/uploads/2019/09/airpurifiers-lowres-2596.jpg"/>

        <Product imageurl="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTOrqVXhxq3fZQ29g6qJ_YOepzDpdFfO7A10dzmr9bX_5yDGGcIcF7viCZGkALLOu7s5Vvp5T8&usqp=CAc"/>

        
        </ScrollView>
        
        </View>
    )
    }
  
}
const AppNavigator = createStackNavigator({ Store: Store});

const MyDrawer=createDrawerNavigator({Home:{
  screen:AppNavigator
},
  Profile:{
    screen:ProfileScreen,
    navigationOptions:{
      drawerIcon:({tintColor})=><FontAwesome5 name="user" size={16} color={tintColor}/>
    }
  },
  Message:{
    screen:MessageScreen,
    navigationOptions:{
      drawerIcon:({tintColor})=><FontAwesome5 name="sticky-note" size={16} color={tintColor}/>
    }
  },Activity:{
    screen:ActivityScreen,
    navigationOptions:{
      drawerIcon:({tintColor})=><FontAwesome5 name="bookmark" size={16} color={tintColor}/>
    }
  },List:{
    screen:ListScreen,
    navigationOptions:{
      drawerIcon:({tintColor})=><FontAwesome5 name="user" size={16} color={tintColor}/>
    }
  },ReportScreen:{
    screen:ReportScreen,
    navigationOptions:{
      drawerIcon:({tintColor})=><FontAwesome5 name="bolt" size={16} color={tintColor}/>
    }
  }
  ,Statistic:{
    screen:StatisticScreen,
    navigationOptions:{
      drawerIcon:({tintColor})=><FontAwesome5 name="chart-line" size={16} color={tintColor}/>
    }
  },SignOut:{
    screen:SignOutScreen,
    navigationOptions:{
      drawerIcon:({tintColor})=><FontAwesome5 name="user" size={16} color={tintColor}/>
    }
  },
},{
  contentComponent:
    props=><SideUpper {...props} />
  
})

export default createAppContainer(MyDrawer);