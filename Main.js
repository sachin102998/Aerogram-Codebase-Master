


import * as React from 'react';
import { Text, View, StyleSheet,ActivityIndicator ,FlatList,TextInput,Button} from 'react-native';
import {  createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Map from './Map'
import Profile from './Profile';
import Data from './Data';
import News from './News';
import Store from './Store';
// import './leaflet';
import Icon from 'react-native-vector-icons/Ionicons';  
import AddButton from '../components/Addbutton';





const TabNavigator = createBottomTabNavigator({
  Data: { screen: Data,navigationOptions:{  
         
          tabBarIcon:({tintColor})=>(  
              <Icon name="ios-home" color={tintColor} size={25}/>  
          )  
        }  },
  Map: { screen: Map,navigationOptions:{  
         
          tabBarIcon:({tintColor})=>(  
              <Icon name="ios-navigate" color={tintColor} size={25}/>  
          )  
        }  },
  Profile:{ screen:Profile,navigationOptions:{  
        
          tabBarIcon:({tintColor})=>(  
              <Icon name="ios-profile" color={tintColor} size={25}/>  
          )  
        }  },
  News22:{screen:News,navigationOptions:{  
        
          tabBarIcon:({tintColor})=>(  
              <Icon name="ios-book" color={tintColor} size={25}/>  
          )  
        }  },
  Store:{
    screen:Store,
    navigationOptions:{ 
          tabBarIcon:({tintColor})=>(  
              <Icon name="ios-basket" color={tintColor} size={25}/>  
          )  
        }  },
},{
tabBarOptions:{
showLabel:false,
initialRouteName: 'Data',
}
}

 
);
const AppContainer = createAppContainer(TabNavigator);


export default class App extends React.Component {
  render(){
    return(
<AppContainer />
    )
  }

}
