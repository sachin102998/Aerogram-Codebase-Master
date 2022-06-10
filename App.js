import * as React from 'react';
import { Text, View, StyleSheet,ActivityIndicator ,FlatList,TextInput,Button,Image,TouchableOpacity} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './screens/Main';
class Splash extends React.Component{
  constructor(props) {
    super(props);
  }
  
    render(){
      return(
        

        <View style={styles.mainbody}>
        <Image source={{uri: 'https://media.licdn.com/dms/image/C510BAQHoFIFBhHUKEA/company-logo_200_200/0?e=2159024400&v=beta&t=vz1HQ4n6tMKIBH48DLP7XfNB7fq2J_whXb3FQE7Q_lo'}}
       style={styles.imagesplash} />
        
         <TouchableOpacity style={styles.btntake} onPress={() => this.props.navigation.navigate('Main')}>
<Text style={styles.textbtn}>Take Me In</Text>
         </TouchableOpacity>
        </View> 
      )
    }
   
}

const styles=StyleSheet.create({
  mainbody:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#ffffff'
  },
  imagesplash:{
    height:200,
    width:200
  },
  
  btntake:{
       borderRadius:200,
       width:240,
       backgroundColor:'#339FFF',
       padding:10,
       textAlign:'center',
       marginTop:70
  },
  textbtn:{
    fontSize:18,
    color:'#fff',
    fontWeight:"bold",
    textAlign:'center',
    width:240
  }
})


const RootStack = createStackNavigator(
  {
    Splash: Splash,
    Main: Main,
  },
  {
    mode:'modal',
    headerMode:'none',
    initialRouteName: 'Splash',
  }
);


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}