import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

const SplashPage = () => {
  const navigation = useNavigation();
  let swiperRef = null;

  const goToNextSlide = () => {
    if (swiperRef) {
      swiperRef.scrollBy(1);
    }
  };

  const skipToNextScreen = () => {
    navigation.navigate('Main');
  };

  return (
  <Swiper style={styles.wrapper} showsButtons={false} ref={(ref) => (swiperRef = ref)}>
    <View style={styles.slide}>
      <Image style={styles.pattern} source={require('../img/splash.png')} />
      <Text style={styles.title}>Welcome to SafeEats</Text>
      <Text style={styles.description}>An app designed for allergen free dining.</Text> 
      <Pressable onPress={goToNextSlide} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
      <Pressable onPress={skipToNextScreen}>
        <Text style={styles.skipText}>Skip</Text>
      </Pressable>
    </View>
    <View style={styles.slide}>
      <Image style={styles.pattern} source={require('../img/splash.png')} />
      <Text style={styles.title2}>Select foods that are personalized to you</Text>
      <Text style={styles.description2}>Now eat well, and stress-free. Save your allergies on your profile and select from foods tailored to your liking.</Text> 
      <Pressable onPress={goToNextSlide} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
      <Pressable onPress={skipToNextScreen}>
        <Text style={styles.skipText}>Skip</Text>
      </Pressable>
    </View>
    <View style={styles.slide}>
      <Image style={styles.pattern} source={require('../img/splash.png')} />
      <Text style={styles.title}>Let's get started</Text>
      <Text style={styles.description}>Begin by creating an account or logging in with your email and password.</Text> 
      <Pressable onPress={skipToNextScreen} style={styles.button}>
        <Text style={styles.buttonText}>Let's Go</Text>
      </Pressable>
      <Pressable onPress={skipToNextScreen}>
        <Text style={styles.skipText}>Skip</Text>
      </Pressable>
    </View>
  </Swiper>
);
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  pattern: {
    width: '100%',
    height: '65%',
    resizeMode: 'stretch',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 20,
  },
  title2: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  description2: {
    fontSize: 15,
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#8DB670',
    marginTop: 15,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  skipText: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 50,
  },
});

export default SplashPage;