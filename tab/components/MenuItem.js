import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDown from './DropDown';
const MenuItem = ({name,description,price}) => {
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
        <DropDown>
        <Text>{description}</Text>
        </DropDown>
        </View>
    );
}


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


export default MenuItem;