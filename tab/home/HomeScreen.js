// React Native functional component that renders the home screen of a restaurant app. 
// It displays a banner image, a search bar, a list of featured partners, and a list of restaurants near the user's location.

import { TextInput, Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import React, {useState} from "react";
import { getUserLocation } from '../../config/location';
import { AntDesign } from '@expo/vector-icons';
import HomePartners from './HomePartners';
import rest_info from "../../backend/restaurant.json";


export default function HomeScreen(props) {
   
  const [restaurants, setRestaurants] = useState([]); // Initialize the state for the restaurants
  const navigation = props.navigation;

  // var latitude  = 0;//35.91079065648069;
  // var longitude = 0; //-79.06111556099538;
  // This function could be called to fetch the restaurant data from an API and update the state
  const fetchRestaurants = async () => {
    const apiUrl = 'https://dev.virtualearth.net/REST/v1/LocalSearch/';
    const apiKey = 'Atnce2DTxlTsKwbN_6kk2QcX5itHvO8jOLdtN6NFv4ic7rBC-c9kpRo8p4wplAro';

    const radius = 5000;
    const searchType = 'FastFood';

    try {
      const {latitude, longitude} = await getUserLocation();
      const url = `${apiUrl}?type=${searchType}&userCircularMapView=${latitude},${longitude},${radius}&key=${apiKey}`;

      const response = await fetch(url);

      const data = await response.json();
      setRestaurants(data.resourceSets[0].resources);
    } catch (error) {
      console.error(error);
    }
  };

  function parseRestaurants(restaurants) {

    return restaurants.map((restaurant) => {
      let link = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmwDHbETna7if6NuncXU8YBJPH6uiH64dHTsvNlhme3HgpNEY6jyPDUPPkv4V7-nPrOvs&usqp=CAU"
      if ( rest_info[restaurant['name']] != undefined) {
        link =  rest_info[restaurant['name']]['image'];
      }

      return { 
        name: restaurant['name'],
        address: restaurant['Address']['addressLine'],
        url: {uri: link}
      }
    })
  }

  // Call the fetchRestaurants function to update the state with restaurant data
  useState(async() => {
    await fetchRestaurants();
  }, []);

  
  const [currentComponent, setCurrentComponent] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        <Image source={require('../../img/Pattern.png')} />
        <View style={styles.searchSection}>
          <AntDesign style={styles.searchIcon} name="search1" size={24} color="black" />
          <TextInput 
            placeholder="Search" 
            onPressIn={() => setCurrentComponent(1)} 
            style={styles.searchBar} 
          />
          
          { currentComponent == 1 &&
            <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setCurrentComponent(0)}
                  underlayColor='#fff'>
                  <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>}
        </View>

        {currentComponent == 0 && < HomePartners navigation={props.navigation} restaurants={parseRestaurants(restaurants)} />}
        {currentComponent == 1 && < HomeSearch />}
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  blue: {
    backgroundColor: "blue"
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    width: "100%",
  },
  upperView: {
      height: "30%",
      width: "100%",
      flex: 1,
      flexDirection: 'column',
  },
  horizontalView: {
    width: "100%",
    flexDirection: "row",
    alignContent: "flex-start"
  },
  searchBar: {
    height: 50,
    marginTop: -35,
    marginLeft: "12.5%",
    width: '65%'
  },
  searchSection: {
    borderColor: "#8DB670",
    borderWidth: 2,
    borderRadius: 15,
    marginLeft: "5%",
    justifyContent: "center",
    width: "90%",
    flexDirection: "column"
  }, 
  searchIcon: {
    marginTop: 10,
    marginLeft: 10
  },
  featuredPartnersContainer: {
    margin: 10,
    flexDirection: "row"
  },
  featuredPartnersTitle: {
    fontSize: 24
  },
  seeAllButton: {
    justifyContent: "space-evenly",
    marginLeft: "30%",
  }, 
  seeAllText: {
    color: "#8DB670",
    textDecorationLine: 'underline',

  },

  cancelButton: {
    marginTop: -35,
    paddingBottom: 17.5
  },
  cancelText: {
    color: "#8DB670",
    marginLeft: "80%",
  }
  
  });