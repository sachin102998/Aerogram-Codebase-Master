import React from "react";
import {View,Text,Stylesheet,SafeView,TouchableOpacity} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator ,} from 'react-navigation-stack';
import {createDrawerNavigator } from 'react-navigation-drawer';

import {ProfileScreen,MessageScreen,ActivityScreen,ListScreen,ReportScreen,StatisticScreen,SignOutScreen} from './Screen';

const MyDrawer=createDrawerNavigator({
  ProfileScreen,
  MessageScreen,ActivityScreen,ListScreen,ReportScreen,StatisticScreen,SignOutScreen
})

export default createAppContainer(MyDrawer);