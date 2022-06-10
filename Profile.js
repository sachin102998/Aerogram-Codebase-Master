import * as React from 'react';
import { Text, View,TouchableOpacity, StyleSheet,ActivityIndicator ,FlatList,TextInput,Button,Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator } from 'react-navigation-drawer';
import 'react-native-material-ui';
import {ProfileScreen,MessageScreen,ActivityScreen,ListScreen,ReportScreen,StatisticScreen,SignOutScreen} from '../components/Index';
import {FontAwesome5} from '@expo/vector-icons'
import SideUpper from '../components/SideUpper';

class Profile extends React.Component{
  static navigationOptions = {
    title: 'Profile',
    headerLeft: <TouchableOpacity style={{alignItems:"flex-start",margin:16}}>
<FontAwesome5 name="bars" size={24} /> 

</TouchableOpacity>,
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render(){
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
      <Image
          style={{ width: 100, height: 130,alignSelf:'center',marginTop:20}}
          source={{uri:"https://image.flaticon.com/icons/png/512/21/21294.png"}}
        />
      </View>
    )
  }
}


const AppNavigator = createStackNavigator({ Profile: Profile});

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