import * as React from 'react';
import {Text,View,StyleSheet,ActivityIndicator, FlatList,TextInput,Button,Dimensions} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MapView, { Marker, Circle,Callout ,PROVIDER_GOOGLE} from 'react-native-maps';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import {createDrawerNavigator } from 'react-navigation-drawer';
import 'react-native-material-ui';
import {ProfileScreen,MessageScreen,ActivityScreen,ListScreen,ReportScreen,StatisticScreen,SignOutScreen} from '../components/Index';
import {FontAwesome5} from '@expo/vector-icons'
import SideUpper from '../components/SideUpper';
class CustomCalloutView extends React.Component{
  constructor(props) {
    super(props);

  }
    render() {
        return (

            <View>
                <View style={{width:200,height:50,borderRadius:10}}>
                    <Text style={{
                        fontWeight: "bold",
                    }}>
                        Test
                </Text>
                </View>
                <View>
                   <Text> "Location:"{this.props.location} </Text>
                    <Text> "PM value by count :"{this.props.pm25} </Text>
                </View>
            </View>

        )
    }
}


class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      datasource: null,
    };
        
  }
    componentDidMount(){
    console.log("component mounted");
    return fetch(
      'https://api.openaq.org/v1/measurements/?parameter=pm25&country=IN&limit=1000'
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          datasource: responseJson.results,
        });
        console.log(this.state.datasource);
      })

      .catch(error => {
        console.log(error);
      });                                          
   
  }

  handleChangetext = event => {
    this.setState({
      text: event,
    });
  };


  handleSearch = e => {
    e.preventDefault();

    return fetch('https://api.openaq.org/v1/measurements/?parameter=pm25&city='+this.state.text)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          datasource: responseJson.results,
        });
        console.log(this.state.datasource);
      })

      .catch(error => {
        console.log(error);
      });
  };
  

 

  // <FlatList style={{overflow:'scroll'}} data={this.state.datasource} renderItem={({item})=>{
  //         return(

  //          <MapView.Marker coordinate={this.state.datasource.coordinates} />
  //         )
  //       }}/>

  // <Circle key={index} center={marker.coordinates}  radius={marker.count%1000}
  //       strokeWidth={2}
  //       strokeColor={'#fdb8a0'}
  //       fillColor={"#fdb8a0"}>

  //     </Circle>

  

  render() {
    if(this.state.datasource==null){
      return(
 <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
              style={{
                height: 50,
                width: 250,
                borderColor: '#000000',
                backgroundColor: '#fff',
                fontSize: 20,
                borderWidth: 1,
                padding: 10,
              }}
              placeholder="location"
              onChangeText={this.handleChangetext}
            />
            <Button title="Search" onPress={this.handleSearch} />
          </View>
         <BallIndicator color="red"/>
          
        </View>
      )
    }else{

    
   
      return (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
              style={{
                height: 50,
                width: 250,
                borderColor: '#000000',
                backgroundColor: '#fff',
                fontSize: 20,
                borderWidth: 1,
                padding: 10,
              }}
              placeholder="location"
              onChangeText={this.handleChangetext}
            />
            <Button title="Search" onPress={this.handleSearch} />
          </View>

          <MapView provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
            style={styles.mapStyle}
            region={{latitude:20.5937,longitude:78.9629, latitudeDelta: 15,
      longitudeDelta: 15,}} >
            {this.state.datasource.map((marker, index) => {
              {console.log("**********************")}
             console.log(marker.location)
            
              return (
                
                <Marker
                  key={index}
                  coordinate={marker.coordinates}
                  
                  onPress={() => console.log('Marker pressed')}>
                  <View
                    style={this.getTextStyle(~~marker.value)} >
                    <Text style={styles.pinText}>{~~marker.value}</Text>
                  </View>

                  <Callout>
                   <CustomCalloutView location={marker.location} pm25={marker.value}/>

                  </Callout>
                </Marker>
              );
            })}
          </MapView>
        </View>
      );
    }
  }

 
  


  static navigationOptions = ({ navigation }) => ({
    title: 'Map',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  

 getTextStyle(value) {
 if(value<=50) {
  return {
      backgroundColor:'#9DE517',
      width:30,
      height:30,
      borderRadius:30/2,
      borderWidth:1,
      borderColor:'green'
        }
 }else if(value>50 && value<=100) {
   return {
      backgroundColor:'#FFF033',
      width:30,
      height:30,
      borderRadius:30/2,
      borderWidth:1,
      borderColor:'yellow'
   }
 }else if(value>100 && value <=150) {
   return{
      backgroundColor:'orange',
      width:30,
      height:30,
      borderRadius:30/2,
      borderWidth:1,
      borderColor:'#E56517'
   }
 } else if(value>150 && value <=200) {
   return {
      backgroundColor:'red',
      width:30,
      height:30,
      borderRadius:30/2
   }
 }else{
   return{
      backgroundColor:'violet',
      width:30,
      height:30,
      borderRadius:30/2
   }
 }
}


}


var mapStyle=[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
]




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  inputContainer: {
    zIndex: 2,
    height: 40,
    padding: 10,
    position: 'absolute',
    top: 0,
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'space-around',
  },
  pinText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
  },
});

const AppNavigator = createStackNavigator({ Map: Map});

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