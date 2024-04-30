// React Native component that renders a user interface for a sign-up page. 
// It allows users to enter their full name, email, and password to create an account. 
// This component utilizes Firebase to create a new user and store their information.

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { ref, set } from 'firebase/database';

function CreateAccount() {

    const navigation = useNavigation(); 
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState('');
    const [address, setAddress] = useState('');

    const [error, setError] = useState('');

    const createAccount = () => {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const userId = user.uid;
            set(ref(db, 'users/' + userId), {
                fullName: fullName,
                email: email,
                phoneNumber: phoneNumber,
                gender: gender,
                birthday: birthday,
                address: address,
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
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.fieldsContainer}>
                <Text style={styles.titleFieldTitle}>Full Name</Text>
                <TextInput
                    style={styles.textField}
                    placeholder="Enter your name..."
                    value={fullName}
                    onChangeText={setFullName}
                />
                <Text style={styles.titleFieldTitle}>Phone Number</Text>
                <TextInput
                    style={styles.textField}
                    placeholder="XXX-XXX-XXXX"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
                <Text style={styles.titleFieldTitle}>Gender</Text>
                <TextInput
                    style={styles.textField}
                    placeholder="Enter your gender..."
                    value={gender}
                    onChangeText={setGender}
                />
                <Text style={styles.titleFieldTitle}>Birthday</Text>
                <TextInput
                    style={styles.textField}
                    placeholder="XX/XX/XXXX"
                    value={birthday}
                    onChangeText={setBirthday}
                />
                <Text style={styles.titleFieldTitle}>Address</Text>
                <TextInput
                    style={styles.textField}
                    placeholder="Enter your address..."
                    value={address}
                    onChangeText={setAddress}
                />
                <Text style={styles.titleFieldTitle}>Email Address</Text>
                <TextInput
                    style={styles.textField}
                    placeholder="SafeEats@gmail.com"
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    fieldsContainer: {
        width: "100%",
        alignItems: "center"
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
    signUpButton: {
        backgroundColor: "#8DB670",
        borderRadius: 10,
        marginTop: 10
    },
    signText: {
        color: '#FFF',
        textAlign: 'center',
        paddingLeft: "25%",
        paddingRight: "25%",
        paddingTop: 20,
        paddingBottom: 20,
        fontWeight: "bold"
    }
});

export default CreateAccount;