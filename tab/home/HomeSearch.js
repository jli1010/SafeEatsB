import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeSearch() {


  const handleSearch = async () => {
    // FOR FUTURE DEVELOPMENT
    // When the user enters searches for a restaurants, 
    // filter through the list of restaurants based on the user's input.
    // A way of implementing this could beto compare the users' input to the search with the names of the restaurants.
    // The restaurant information could also be stored in a database 
    // UI should update dynamically as the user inputs text in the search bar
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Results</Text>
      {/*  search results */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
