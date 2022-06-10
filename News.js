import * as React from 'react';

import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Newsblock from '../components/Newsblock';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator } from 'react-navigation-drawer';
import 'react-native-material-ui';
import {ProfileScreen,MessageScreen,ActivityScreen,ListScreen,ReportScreen,StatisticScreen,SignOutScreen} from '../components/Index';
import {FontAwesome5} from '@expo/vector-icons'
import SideUpper from '../components/SideUpper';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      articles: null,
    };
  }
  static navigationOptions = {
    title: 'News',
    headerStyle: {
      backgroundColor: '#0345a5',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  componentWillMount() {
    return fetch(
      'https://newsapi.org/v2/everything?q=pollution&apiKey=5818cc55f9604ee6bef4780e229018a3'
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          articles: res.articles,
        });

        console.log(this.state.articles);
      });
  }
    //  <TouchableOpacity>
    //             <View style={
    //               {
    //                 backgroundColor : '#a1a1a1',
    //                 color: '#fff',
    //                 paddingTop: 10,
    //                 paddingBottom : 10,
    //                 paddingLeft : 4.8,
    //                 marginBottom: 10,
    //               }}
    //               onTouchEnd ={() => Linking.openURL(item.url)}
    //               > 
    //               <Text style={{
    //                 fontWeight : 'bold',
    //                 marginBottom : 5.5,
    //               }}> {item.title} </Text>
    //               <Text > {item.description} </Text>

    //             </View>
    //           </TouchableOpacity>
  render() {
    return (
      <View>
        <FlatList 
          data={this.state.articles}
          renderItem={({ item }) => {
            return (
           
              <Newsblock title={item.title} content={item.content} imgurl={item.urlToImage} newsurl=                  {item.url}/>
            );
          }}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({ News: News});

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
