import { TextInput, Text, View, StyleSheet } from 'react-native';
import React, {Component, useEffect, useState} from "react";
import { auth, db } from '../../config/firebase';
import { ref, set, update } from 'firebase/database';

export default function PersonalInfo(props) {
    var data = props.personalData;

    const [fullName, setFullName] = useState(data[0]);
    const [email, setEmail] = useState(data[1]);
    const [phoneNumber, setPhoneNumber] = useState(data[2]);
    const [gender, setGender] = useState(data[3]);
    const [birthday, setBirthday] = useState(data[4]);
    const [address, setAddress] = useState(data[5]);

    const user = auth.currentUser;
    const userId = user.uid;
    const userRef = ref(db, 'users/' + userId);

    var isEditable = false;
    if (props.iconButtonCounter % 2 == 1) {
        isEditable = true;
    }

    const huh = () => {
    useEffect(() => {
        setFullName(data[0])
        setEmail(data[1])
        setPhoneNumber(data[2])
        setGender(data[3])
        setBirthday(data[4])
        setAddress(data[5])
      }, []);    
    }

    return (

    <View style={styles.personalInfoView}>
        <Text style={styles.title}>Personal Information</Text>
        <View style={isEditable ? styles.personalInfoDataEditing: styles.personalInfoData}>
            <View>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.label}>Phone Number</Text>
                <Text style={styles.label}>Gender</Text>
                <Text style={styles.label}>Birthday</Text>
                <Text style={styles.label}>Address</Text>
            </View>
            <View style={styles.info}>
                <TextInput editable={isEditable} style={styles.label} value={ data[0] } 
                    onChangeText={(text) => {{
                        update(userRef, {fullName: text});
                        setFullName(text);
                        data[0] = text;
                        props.setPersonalData(data);
                    }}} />
                <TextInput editable={false} style={styles.label} value={ data[1] }/>
                
                <TextInput editable={isEditable} style={styles.label} value={ data[2] } 
                    onChangeText={(text) => {{
                        update(userRef, {phoneNumber: text});
                        setPhoneNumber(text);
                        data[2] = text;
                        props.setPersonalData(data);
                    }}} />
                <TextInput editable={isEditable} style={styles.label} value={ data[3] } 
                    onChangeText={(text) => {{
                        update(userRef, {gender: text});
                        setGender(text);
                        data[3] = text;
                        props.setPersonalData(data);
                    }}} />
                <TextInput editable={isEditable} style={styles.label} value={ data[4] } 
                    onChangeText={(text) => {{
                        update(userRef, {birthday: text});
                        setBirthday(text);
                        data[4] = text;
                        props.setPersonalData(data);
                    }}} />
                <TextInput editable={isEditable} style={styles.label} value={ data[5] } 
                    onChangeText={(text) => {{
                        update(userRef, {address: text});
                        setAddress(text);
                        data[5] = text;
                        props.setPersonalData(data);
                    }}} />
            </View>
        </View>
    </View>);
}




const styles = StyleSheet.create({
    personalInfoView: {
        width: "100%"
    }, 
    personalInfoData: {
        marginTop: 5,
        marginLeft: "5%",
        width: "90%",
        flexDirection: "row",

        borderColor: "#3B3B3B33",
        borderWidth: 2,
        borderRadius: 10,
    },
    personalInfoDataEditing: {
        marginTop: 5,
        marginLeft: "5%",
        width: "90%",
        flexDirection: "row",

        borderColor: "#3B3B3B33",
        backgroundColor: "#3B3B3B33",
        borderWidth: 2,
        borderRadius: 10,
    },
    info: {
        //marginLeft: "10%",
    },  
    title: {
        fontSize: 16,
        marginLeft: "7%",
        fontWeight: "bold"
    },
    label: {
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
    }
  });
  