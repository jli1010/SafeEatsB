import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { ScrollView } from 'react-native-web';

function LogIn() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigation.navigate("TabNav")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // ..
      });
    }
    return (
        <View style={styles.container}>
            <View style={styles.fieldsContainer}>
                <Text style={styles.titleFieldTitle}>Email address</Text>
                <TextInput
                    style={styles.textField}
                    placeholder="Enter your email..."
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={styles.titleFieldTitle}>Password</Text>
                <TextInput
                    style={styles.textField}
                    placeholder="Enter your password..."
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity
                    style={styles.forgotPassword}
                    onPress={() => console.log("forgot password")}
                    underlayColor='#fff'>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
    
            </View>
            <View style={styles.logInContainer}>
                <TouchableOpacity
                    style={styles.logInButton}
                    onPress={login}
                    underlayColor='#fff'>
                    <Text style={styles.signInButtonText}>Log In</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    
        );

}

const styles = StyleSheet.create({
container: {
  display: "flex",
  flexDirection: "column",
  backgroundColor: '#F5F5F5',
  alignItems: 'center',
  justifyContent: 'center',
  height: "100%",
  width: "100%",
},
selectorContainer: {
    flexDirection: "row",
},
selectorButton: {
    marginTop: "12.5%",
    marginLeft: 40,
    marginRight: 40,
    borderBottomWidth: 1,
},
selectorCreateAccount: {
    borderBottomColor: "#999999"
},

selectorLogIn: {
    borderBottomColor: "#FF0000"
},
fieldsContainer: {
    flexDirection: "column",
    flex: 2,
    width: "100%",
    alignItems: "center",
    marginTop: 20
},
logInContainer: {
    flex: 1
},

createAccountText: {
    fontSize: 20,
    color: "#999999",
    paddingBottom: 5
},

logInText: {
    fontSize: 20,
    color: "#FF0000",
    paddingBottom: 5
    
},
forgotPasswordText: {
    color: "#8DB670",
    marginLeft: "52.5%",
},
textField: {
  height: 50,
  borderColor: '#999999',
  borderWidth: 1,

  width: "80%",
  margin: 10,
  paddingLeft: 5,
  paddingRight: 5,
  paddingBottom: 5,
  fontSize: 18,
},
titleFieldTitle: {
    marginTop: 20,
    marginLeft: 40,
    alignSelf: 'stretch',
    fontSize: 18,
},
titleField: {
    marginLeft: 40,
    alignSelf: 'stretch',
    fontSize: 18,
},
logInButton: {
    backgroundColor: "#8DB670",
    borderRadius: 10
},
signInButtonText:{
    color:'#FFF',
    textAlign:'center',
    paddingLeft : "25%",
    paddingRight : "25%",
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: "bold"
}

});

export default LogIn;
