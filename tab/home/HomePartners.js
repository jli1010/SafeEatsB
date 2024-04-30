import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import Partner from "./Partner";

export default function HomePartners(props) {
  const [seeAllClicked, setSeeAllClicked] = useState(false);

  const handleSeeAllRestaurants = () => {
    setSeeAllClicked(true);
  };

  return (
    <ScrollView style={styles.scrollView}>
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

  scrollView: {
    flex: 1,
  },
  horizontalView: {
    width: "100%",
    flexDirection: "row",
    alignContent: "flex-start",
  },
  verticalView: {
    width: "100%",
  },
  scrollViewContent: {
    alignItems: 'flex-start',
  },
  featuredPartnersContainer: {
    margin: 10,
    flexDirection: "row",
  },
  featuredPartnersTitle: {
    fontSize: 24,
  },
  seeAllButton: {
    justifyContent: "space-evenly",
    marginLeft: "30%",
  },
  seeAllText: {
    color: "#F00",
    textDecorationLine: "underline",
  },
  partnerView: {
    flex: 1,
    margin: 10,
  },
  verticalRestaurantContainer: {
    width: Dimensions.get("window").width - 20,
  },
  partnerContent: {
    // 
  },
  verticalRestaurantContent: {
    width: "100%",
    height: "auto",
  },
});
