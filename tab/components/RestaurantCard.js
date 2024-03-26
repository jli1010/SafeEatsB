import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MenuScreen from './MenuScreen';
const RestaurantCard = ({ key,name }) => {

    const navigation = useNavigation();

    const handlePress = () => {
      // Navigate to the RestaurantMenu screen with the restaurant ID as a parameter
      console.log(name)
      navigation.navigate('MenuScreen',{
        name: name
      })
    };
  
    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.container}>
          <Text style={styles.name}>{name}</Text>

        </View>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  // Add other styles here
});

export default RestaurantCard;