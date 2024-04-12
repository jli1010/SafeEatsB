// React Native component that renders a user interface for a sign-up page. 
// It allows users to enter their full name, email, and password to create an account. 
// This component utilizes Firebase to create a new user and store their information.

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { ref, set } from 'firebase/database';

function CreateAccount() {

    const navigation = useNavigation(); 
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const createAccount = () => {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const userId = user.uid;
            set(ref(db, 'users/' + userId), {
                username: fullName,
                email: email,
                foodres: "0"
              });

            console.log(auth.currentUser.uid)
        navigation.navigate("TabNav");
        })
        .catch((error) => {
            setError(error.message);
        });
          
        navigation.navigate("TabNav")
    }

    return (
        <View style={styles.container}>
            <View style={styles.fieldsContainer}>
                <Text style={styles.titleFieldTitle}>Full Name</Text>
                <TextInput
                    style={styles.textField}
                    placeholder="Enter your name..."
                    value={fullName}
                    onChangeText={setFullName}
                />
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
                    placeholder="Create your password..."
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity
                    style={styles.signUpButton}
                    onPress={createAccount}
                    underlayColor='#fff'>
                    <Text style={styles.signText}>Sign Up</Text>
                </TouchableOpacity>
        </View>
    </View>
    )
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
    fieldsContainer: {
        flexDirection: "column",
        flex: 2,
        width: "100%",
        alignItems: "center"
    },
    signUpContainer: {
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
    signUpButton: {
        backgroundColor: "#8DB670",
        borderRadius: 10,
        marginTop: 10
    },
    signText:{
        color:'#FFF',
        textAlign:'center',
        paddingLeft : "25%",
        paddingRight : "25%",
        paddingTop: 20,
        paddingBottom: 20,
        fontWeight: "bold"
    }
});

export default CreateAccount;