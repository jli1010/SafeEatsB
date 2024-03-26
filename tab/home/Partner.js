import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { useNavigation } from '@react-navigation/native';
  
  
  export default function Partner(props) {
      const navigation = useNavigation(); 
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MenuScreen", {
              name: props.title,
              url: props.url,
              title: props.title,
              address: props.address,
            });
          }}
        >
          <Image style={[styles.img, {height: 200, width: 200}]} source={props.url} />
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.address}>{props.address}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5",
      height: 250,
      paddingLeft: 10,
      paddingRight: 10,
    },
    img: {
      borderRadius: 15
    },
    title: {
      fontSize: 22,
      marginLeft: 10,
    },
    address: {
      fontSize: 16,
      marginLeft: 10,
      color: "gray",
    },
  });