import {
    Text,
    View,
    StyleSheet,
    Image,
  } from "react-native";
  import React from "react";
  import BouncyCheckbox from "react-native-bouncy-checkbox";
  
  export default function Allergies(props) {
    const allergiesList = [
      "Milk",
      "Eggs",
      "Fish",
      "Tree Nuts",
      "Peanuts",
      "Soybeans",
      "Wheat",
      "Shellfish",
      "Gluten Free",
      "Vegan",
      "Vegetarian",
      "Halal",
    ];
    const urls = [
      require("../../img/icons/Milk.png"),
      require("../../img/icons/Eggs.png"),
      require("../../img/icons/Fish.png"),
      require("../../img/icons/TreeNuts.png"),
      require("../../img/icons/Peanuts.png"),
      require("../../img/icons/Soybeans.png"),
      require("../../img/icons/Wheat.png"),
      require("../../img/icons/Shellfish.png"),
      require("../../img/icons/GlutenFree.png"),
      require("../../img/icons/Vegan.png"),
      require("../../img/icons/Vegetarian.png"),
      require("../../img/icons/Halal.png"),
    ];
    var columnOne = [];
    var columnTwo = [];
    var isEdittable = false;
    if (props.iconButtonCounter % 2 == 1) {
      isEdittable = true;
    }
  
    var allergyBool = props.allergyBool;
    if (allergyBool === undefined) {
      var allergyBool = new Array(12).fill(false);
    }
  
    for (let i = 0; i < allergiesList.length / 2; i++) {
      columnOne.push(
        <View style={styles.checkboxRowContainer} key={i}>
          {props.iconButtonCounter % 2 == 0 && (
            <BouncyCheckbox
              textStyle={{ textDecorationLine: "none" }}
              style={styles.checkboxRow}
              text={allergiesList[i]}
              fillColor="#359EFF"
              disableBuiltInState
              bounceEffectIn="1"
              isChecked={allergyBool[i]}
              onPress={(isChecked) => {
                {
                  if (isChecked) {
                  }
                  console.log(allergiesList[i] + " " + isChecked);
                }
              }}
            />
          )}
          {props.iconButtonCounter % 2 == 1 && (
            <BouncyCheckbox
              textStyle={{ textDecorationLine: "none" }}
              style={styles.checkboxRow}
              text={allergiesList[i]}
              fillColor="#359EFF"
              isChecked={allergyBool[i]}
              onPress={(isChecked) => {
                {
                  allergyBool[i] = isChecked;
                  props.setAllergyBool(allergyBool);
                }
              }}
            />
          )}
          <Image style={styles.icon} source={urls[i]} />
        </View>
      );
  
      columnTwo.push(
        <View
          style={styles.checkboxRowContainer}
          key={allergiesList.length / 2 + i}
        >
          {props.iconButtonCounter % 2 == 0 && (
            <BouncyCheckbox
              textStyle={{ textDecorationLine: "none" }}
              style={styles.checkboxRow}
              text={allergiesList[allergiesList.length / 2 + i]}
              fillColor="#359EFF"
              disableBuiltInState
              bounceEffectIn="1"
              isChecked={allergyBool[allergiesList.length / 2 + i]}
              onPress={(isChecked) => {
                console.log(
                  allergiesList[allergiesList.length / 2 + i] + " " + isChecked
                );
              }}
            />
          )}
          {props.iconButtonCounter % 2 == 1 && (
            <BouncyCheckbox
              textStyle={{ textDecorationLine: "none" }}
              style={styles.checkboxRow}
              text={allergiesList[allergiesList.length / 2 + i]}
              fillColor="#359EFF"
              isChecked={allergyBool[allergiesList.length / 2 + i]}
              onPress={(isChecked) => {
                {
                  allergyBool[allergiesList.length / 2 + i] = isChecked;
                  props.setAllergyBool(allergyBool);
                }
              }}
            />
          )}
          <Image
            style={styles.icon}
            source={urls[allergiesList.length / 2 + i]}
          />
        </View>
      );
    }
  
    return (
      <View style={styles.allergiesView}>
        <Text style={styles.title}>My Allergies</Text>
        <View
          style={
            isEdittable ? styles.allergiesDataEditting : styles.allergiesData
          }
        >
          <View style={styles.checkboxColumn}>{columnOne}</View>
          <View style={styles.checkboxColumn}>{columnTwo}</View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    allergiesView: {
      width: "100%",
      marginTop: 10,
    },
    title: {
      fontSize: 16,
      marginLeft: "7%",
      fontWeight: "bold",
    },
    checkboxContainer: {
      marginBottom: 20,
      flexDirection: "row",
    },
    checkboxRowContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    allergiesData: {
      marginTop: 5,
      marginLeft: "5%",
      width: "90%",
      flexDirection: "row",
  
      borderColor: "#3B3B3B33",
      borderWidth: 2,
      borderRadius: 10,
    },
    allergiesDataEditting: {
      marginTop: 5,
      marginLeft: "5%",
      width: "90%",
      flexDirection: "row",
  
      borderColor: "#3B3B3B33",
      backgroundColor: "#3B3B3B33",
      borderWidth: 2,
      borderRadius: 10,
    },
    checkboxColumn: {
      flexDirection: "column",
      margin: 2,
    },
    checkboxRow: {
      margin: 5,
      fillColor: "red",
      unfillColor: "#FFFFFF",
    },
    icon: {
      height: 20,
      width: 20,
      resizeMode: "contain",
    },
    label: {
      color: "#6F6F6F",
      fontSize: 14,
      marginRight: 5,
    },
  });