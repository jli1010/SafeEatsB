import {
    Text,
    View,
    StyleSheet,
    Image,
  } from "react-native";
  import React from "react";
  import BouncyCheckbox from "react-native-bouncy-checkbox";
  
  export default function Allergies(props) {
    const dietaryList = [
      "Vegan",
      "Vegetarian"
    ];
    const dietaryIcons = [
      require("../../img/icons/Vegan.png"),
      require("../../img/icons/Vegetarian.png")
    ];
    var dietaryColOne = [];
    var dietaryColTwo = [];
    var dietaryBool = props.dietaryBool;
    if (dietaryBool  === undefined) {
      var dietaryBool = new Array(2).fill(false);
    }

    const allergiesList = [
      "Milk",
      "Eggs",
      "Fish",
      "Tree Nuts",
      "Peanuts",
      "Soybeans",
      "Wheat",
      "Shellfish",
      "Gluten",
      "Sesame",
    ];
    const allergieIcons = [
      require("../../img/icons/Milk.png"),
      require("../../img/icons/Eggs.png"),
      require("../../img/icons/Fish.png"),
      require("../../img/icons/TreeNuts.png"),
      require("../../img/icons/Peanuts.png"),
      require("../../img/icons/Soybeans.png"),
      require("../../img/icons/Wheat.png"),
      require("../../img/icons/Shellfish.png"),
      require("../../img/icons/GlutenFree.png"),
      require("../../img/icons/Sesame.png"),
    ];
    var allergiesColOne = [];
    var allergiesColTwo = [];
    var isEdittable = false;
    if (props.iconButtonCounter % 2 == 1) {
      isEdittable = true;
    }
  
    var allergyBool = props.allergyBool;
    if (allergyBool === undefined) {
      var allergyBool = new Array(10).fill(false);
    }

    for (let i = 0; i < dietaryList.length / 2; i++) {
      dietaryColOne.push(
        <View style={styles.checkboxRowContainer} key={i}>
          {props.iconButtonCounter % 2 == 0 && (
            <BouncyCheckbox
              textStyle={{ textDecorationLine: "none" }}
              style={styles.checkboxRow}
              text={dietaryList[i]}
              fillColor="#359EFF"
              disableBuiltInState
              bounceEffectIn="1"
              isChecked={dietaryBool[i]}
              onPress={(isChecked) => {
                {
                  if (isChecked) {
                  }
                  console.log(dietaryList[i] + " " + isChecked);
                }
              }}
            />
          )}
          {props.iconButtonCounter % 2 == 1 && (
            <BouncyCheckbox
              textStyle={{ textDecorationLine: "none" }}
              style={styles.checkboxRow}
              text={dietaryList[i]}
              fillColor="#359EFF"
              isChecked={dietaryBool[i]}
              onPress={(isChecked) => {
                {
                  dietaryBool[i] = isChecked;
                  props.setDietaryBool(dietaryBool);
                }
              }}
            />
          )}
          <Image style={styles.icon} source={dietaryIcons[i]} />
        </View>
      );
  
      dietaryColTwo.push(
        <View
          style={styles.checkboxRowContainer}
          key={dietaryList.length / 2 + i}
        >
          {props.iconButtonCounter % 2 == 0 && (
            <BouncyCheckbox
              textStyle={{ textDecorationLine: "none" }}
              style={styles.checkboxRow}
              text={dietaryList[dietaryList.length / 2 + i]}
              fillColor="#359EFF"
              disableBuiltInState
              bounceEffectIn="1"
              isChecked={dietaryBool[dietaryList.length / 2 + i]}
              onPress={(isChecked) => {
                console.log(
                  dietaryList[dietaryList.length / 2 + i] + " " + isChecked
                );
              }}
            />
          )}
          {props.iconButtonCounter % 2 == 1 && (
            <BouncyCheckbox
              textStyle={{ textDecorationLine: "none" }}
              style={styles.checkboxRow}
              text={dietaryList[dietaryList.length / 2 + i]}
              fillColor="#359EFF"
              isChecked={dietaryBool[dietaryList.length / 2 + i]}
              onPress={(isChecked) => {
                {
                  dietaryBool[dietaryList.length / 2 + i] = isChecked;
                  props.setDietaryBool(dietaryBool);
                }
              }}
            />
          )}
          <Image
            style={styles.icon}
            source={dietaryIcons[dietaryList.length / 2 + i]}
          />
        </View>
      );
    }
  
  
    for (let i = 0; i < allergiesList.length / 2; i++) {
      allergiesColOne.push(
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
          <Image style={styles.icon} source={allergieIcons[i]} />
        </View>
      );
  
      allergiesColTwo.push(
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
            source={allergieIcons[allergiesList.length / 2 + i]}
          />
        </View>
      );
    }
  
    return (
      <View style={styles.allergiesView}>
        <Text style={styles.title}>Dietary Preference</Text>
        <View style={isEdittable ? styles.allergiesDataEditting : styles.allergiesData}>
          <View style={styles.checkboxColumn}>{dietaryColOne}</View>
          <View style={styles.checkboxColumn}>{dietaryColTwo}</View>
        </View>
        <Text style={styles.title}>My Allergies</Text>
        <View style={isEdittable ? styles.allergiesDataEditting : styles.allergiesData}>
          <View style={styles.checkboxColumn}>{allergiesColOne}</View>
          <View style={styles.checkboxColumn}>{allergiesColTwo}</View>
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