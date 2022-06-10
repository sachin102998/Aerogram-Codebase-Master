// import * as React from 'react';
// import { Text, View, StyleSheet,ActivityIndicator ,FlatList,TextInput,Button,TouchableOpacity} from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator ,} from 'react-navigation-stack';
// import {createDrawerNavigator } from 'react-navigation-drawer';
// import 'react-native-material-ui';
// import {ProfileScreen,MessageScreen,ActivityScreen,ListScreen,ReportScreen,StatisticScreen,SignOutScreen} from '../components/Index';
// import {FontAwesome5} from '@expo/vector-icons'
// import SideUpper from '../components/SideUpper';
// class Data extends React.Component{
//    static navigationOptions = {
//     title: 'Data',
//     headerLeft: <TouchableOpacity style={{alignItems:"flex-start",margin:16}}>
// <FontAwesome5 name="bars" size={24} /> 

// </TouchableOpacity>,
//     headerStyle: {
//       backgroundColor: '#f4511e',
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//     },
//   };
//   constructor(props) {
//     super(props);
//     this.state={
//       text:'',
//       datasource:null
//     };
//   }

//   handleChangetext=(event)=>{
//     this.setState({
//       text:event
//     })
//   }
  
//   handleSearch=(e)=>{
//     e.preventDefault();
    
//   //  return fetch('https://api.openaq.org/v1/locations?location='+this.state.text)
//   return fetch('https://api.waqi.info/search/?token=abf8e4ef59ff850ddde9af9517f2635d5532dbda&keyword='+this.state.text)
//     .then((response)=>response.json())
//     .then((responseJson)=>{
//          this.setState({
//            datasource:responseJson.data
//          })
//          console.log(this.state.datasource)
//     })
    

//     .catch((error)=>{
//       console.log(error);
//     })
   
//   }
//   render() {

// return (
//       <View style={styles.parent}>
//       <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10}}>
//      <TextInput placeholder="location" style={{height:50,flex:1,borderColor:'#000000',fontSize:20,borderWidth:1,padding:10}} onChangeText={this.handleChangetext}></TextInput>
//       <Button  title="Search" onPress={this.handleSearch}/>

//       </View>
//         <FlatList style={{overflow:'scroll',marginBottom:50}} data={this.state.datasource} renderItem={({item})=>{
//           return(<TouchableOpacity><Text style={styles.slabstyle }
//           >{item.station.name}</Text></TouchableOpacity>)
//         }}/>

//       </View>
//     );
// }
// }

// const styles=StyleSheet.create({
//   parent:{
    
//   },
//   slabstyle:{
//     padding:10,
//     fontSize:18,
//     color:"#fff",
//      height:80,
//      margin:10,
//      borderRadius:5,
//      backgroundColor:'#33C4FF'
//   }
// })



// const AppNavigator = createStackNavigator({ Data: Data});

// const MyDrawer=createDrawerNavigator({Home:{
//   screen:AppNavigator
// },
//   Profile:{
//     screen:ProfileScreen,
//     navigationOptions:{
//       drawerIcon:({tintColor})=><FontAwesome5 name="user" size={16} color={tintColor}/>
//     }
//   },
//   Message:{
//     screen:MessageScreen,
//     navigationOptions:{
//       drawerIcon:({tintColor})=><FontAwesome5 name="sticky-note" size={16} color={tintColor}/>
//     }
//   },Activity:{
//     screen:ActivityScreen,
//     navigationOptions:{
//       drawerIcon:({tintColor})=><FontAwesome5 name="bookmark" size={16} color={tintColor}/>
//     }
//   },List:{
//     screen:ListScreen,
//     navigationOptions:{
//       drawerIcon:({tintColor})=><FontAwesome5 name="user" size={16} color={tintColor}/>
//     }
//   },ReportScreen:{
//     screen:ReportScreen,
//     navigationOptions:{
//       drawerIcon:({tintColor})=><FontAwesome5 name="bolt" size={16} color={tintColor}/>
//     }
//   }
//   ,Statistic:{
//     screen:StatisticScreen,
//     navigationOptions:{
//       drawerIcon:({tintColor})=><FontAwesome5 name="chart-line" size={16} color={tintColor}/>
//     }
//   },SignOut:{
//     screen:SignOutScreen,
//     navigationOptions:{
//       drawerIcon:({tintColor})=><FontAwesome5 name="user" size={16} color={tintColor}/>
//     }
//   },
// },{
//   contentComponent:
//     props=><SideUpper {...props} />
  
// })

// export default createAppContainer(MyDrawer);








import * as React from 'react';
import { Text, View, StyleSheet,ActivityIndicator ,FlatList,TextInput,Button,TouchableOpacity} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import MapView from 'react-native-maps'

import {BallIndicator} from 'react-native-indicators';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator ,} from 'react-navigation-stack';
import {createDrawerNavigator } from 'react-navigation-drawer';
import 'react-native-material-ui';
import {ProfileScreen,MessageScreen,ActivityScreen,ListScreen,ReportScreen,StatisticScreen,SignOutScreen} from '../components/Index';
import {FontAwesome5} from '@expo/vector-icons'
import SideUpper from '../components/SideUpper';
class Data extends React.Component{


   static navigationOptions = {
    title: 'Data',
    headerLeft: <TouchableOpacity  style={{alignItems:"flex-start",margin:16}}>
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

    toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };

  constructor(props) {
     super(props);

     this.state={
       latitude:0,
       longitude:0,
       error:null,
       datasource:null

     }
   }


   handleLocation=(e)=>{
      e.preventDefault();
navigator.geolocation.getCurrentPosition(position=>{
       this.setState({
         latitude:position.coords.latitude,
         longitude:position.coords.longitude,
         error:null
       });
     },
     error=>this.setState({error:error}),
     { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
     )
     console.log("************");
     console.log(this.state);
       return fetch('https://api.waqi.info/feed/geo:'+this.state.latitude+';'+this.state.longitude+'/?token=abf8e4ef59ff850ddde9af9517f2635d5532dbda')
       .then(response => response.json())
      .then(responseJson => {
        this.setState({
          datasource: responseJson.data,
        });
        console.log(this.state.datasource);
      })

      .catch(error => {
        console.log(error);
      });
     
   }
   render() {
     if(this.state.datasource==null) {
       return (
         <View style={{flex:1,alignItems:'center',marginTop:30}}>
      
         <Text>Hello </Text>
          <TouchableOpacity style={{borderColor:'#000000',width:140,backgroundColor:"#f4511e",borderRadius:5,}} onPress={this.handleLocation} ><Text style={{padding:5,fontSize:18,textAlign:'center',color:"#fff",}}>Read More</Text></TouchableOpacity>
       
       </View>
       )
     }else {
return (
       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      
          <TouchableOpacity style={{borderColor:'#000000',width:140,backgroundColor:"#f4511e",borderRadius:5,}} onPress={this.handleLocation} ><Text style={{padding:5,fontSize:18,textAlign:'center',color:"#fff",}}> Get Data</Text></TouchableOpacity>
          <View>
          <Text>AQI:{this.state.datasource.aqi}</Text>
          <Text>Dominant pollutant:{this.state.datasource.dominentpol}</Text>
           <Text>Major pollutants:-</Text>
           <Text>1.co = {this.state.datasource.iaqi.co.v}</Text>
           <Text>2.no2 = {this.state.datasource.iaqi.no2.v}</Text>
           <Text>3.o3 = {this.state.datasource.iaqi.o3.v}</Text>
           <Text>4.pm10 = {this.state.datasource.iaqi.pm10.v}</Text>
           <Text>5.pm25 = {this.state.datasource.iaqi.pm25.v}</Text>
           <Text>6.so2 = {this.state.datasource.iaqi.so2.v}</Text>
          </View>
          <View>
  <LineChart
    data={{
      labels: ["co", "no2", "o3", "pm10", "pm25", "so2"],
      datasets: [
        {
          data: [
            this.state.datasource.iaqi.co.v,
            this.state.datasource.iaqi.no2.v,
            this.state.datasource.iaqi.o3.v,
            this.state.datasource.iaqi.pm10.v,
            this.state.datasource.iaqi.pm25.v,
            this.state.datasource.iaqi.so2.v
          ]
        }
      ]
    }}
    width={300} // from react-native
    height={220}
    yAxisSuffix={" g/m3"}
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 1
    }}
  />
</View>


       </View>
     )
     }
     
   }
 }

 const styles=StyleSheet.create({
  parent:{
    
  },
  slabstyle:{
    padding:10,
    fontSize:18,
    color:"#fff",
     height:80,
     margin:10,
     borderRadius:5,
     backgroundColor:'#33C4FF'
  }
})



const AppNavigator = createStackNavigator({ Data: Data});

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

