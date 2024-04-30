import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Partner from "./Partner";

export default function HomePartners(props) {
  const [seeAllClicked, setSeeAllClicked] = useState(false);

  const handleSeeAllRestaurants = () => {
    setSeeAllClicked(true);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.featuredPartnersContainer}>
        <Text style={styles.featuredPartnersTitle}>Featured Partners</Text>

        {!seeAllClicked && (
          <TouchableOpacity
            style={styles.seeAllButton}
            onPress={handleSeeAllRestaurants}
          >
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView
        style={seeAllClicked ? styles.verticalView : styles.horizontalView}
        horizontal={!seeAllClicked}
        contentContainerStyle={styles.scrollViewContent}
      >
        {/* Render restaurants based on seeAllClicked state */}
        {props.restaurants.map((restaurant, key) => (
          <View
            key={key}
            style={[
              styles.partnerView,
              seeAllClicked && styles.verticalRestaurantContainer,
            ]}
          >
            <Partner
              style={[
                styles.partnerContent,
                seeAllClicked && styles.verticalRestaurantContent,
              ]}
              url={restaurant.url}
              title={restaurant.name}
              address={restaurant.address}
              navigation={props.navigation}
            />
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  featuredPartnersContainer: {
    flexDirection: "row",
    margin: 10,
  },
  featuredPartnersTitle: {
    fontSize: 24,
  },
  seeAllButton: {
    marginLeft: "auto",
  },
  seeAllText: {
    color: "#8DB670",
    textDecorationLine: "underline",
  },
  horizontalView: {
    flexDirection: "row",
  },
  verticalView: {
    flexDirection: "column",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  partnerView: {
    margin: 10,
  },
  partnerContent: {
    // Your partner content styles here
  },
  verticalRestaurantContainer: {
    // Additional styles for vertical view
  },
  verticalRestaurantContent: {
    // Additional styles for vertical view
  },
});
