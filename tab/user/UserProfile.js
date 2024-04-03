import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PersonalInfo from "./PersonalInfo";
import Allergies from './Allergies';
import { SimpleLineIcons, Feather } from '@expo/vector-icons';
import { ref, get, update } from "firebase/database";
import { db, auth } from '../../config/firebase';
import { numToBool, boolToNum } from '../../config/converts';

export default function UserProfile(props) {
    const navigation = useNavigation();
    const [personalData, setPersonalData] = useState([]);
    const [iconButtonCounter, setIconButtonCounter] = useState(0);
    const [allergyBool, setAllergyBool] = useState(new Array(12).fill(false));

    useEffect(() => {
        getUserInfo();
    }, []);

    const getUserInfo = async () => {
        try {
            const user = auth.currentUser;
            if (user) {
                const userId = user.uid;
                const userRef = ref(db, 'users/' + userId);
                const snapshot = await get(userRef);
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    const username = userData.username;
                    const foodres = parseInt(userData.foodres, 10);
                    setAllergyBool(numToBool(foodres));
                    const email = userData.email;
                    const personalData = [
                        username,
                        email,
                        "+(123) 456-7890",
                        "Female",
                        "04/16/1997",
                        "321 Main St, Chapel Hill, NC 27516"
                    ];
                    setPersonalData(personalData);
                } else {
                    console.log("User data doesn't exist in the database");
                }
            } else {
                console.log("User not logged in");
            }
        } catch (error) {
            console.log(error)
        }
    };

    const updateInfo = () => {
        setIconButtonCounter(iconButtonCounter + 1);
        let num = boolToNum(allergyBool)
        if (num != 0) {
            const user = auth.currentUser;
            if (user) {
                const userId = user.uid;
                const userRef = ref(db, 'users/' + userId);
                let updates = {}
                updates['/users/' + userId + '/foodres'] = num.toString();

                update(ref(db), updates);
            } else {
                console.log("User not logged in");
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.upperView}>
                <Image style={styles.pattern} source={require('../../img/Pattern.png')} />
                <View style={styles.pictureArea}>
                    <Text style={styles.profileText}>Profile</Text>
                    <Image style={styles.profilePicture} source={require('../../img/profile_picture.png')} />
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Main")}
                        underlayColor='#fff'
                        style={styles.logOutButton}>
                        <Text style={styles.logOutText}>Log Out</Text>
                    </TouchableOpacity>
                </View>
                <PersonalInfo iconButtonCounter={iconButtonCounter} personalData={personalData} setPersonalData={setPersonalData} />
                <Allergies iconButtonCounter={iconButtonCounter} allergyBool={allergyBool} setAllergyBool={setAllergyBool} />
                {iconButtonCounter % 2 == 0 &&
                    <TouchableOpacity
                        onPress={() => setIconButtonCounter(iconButtonCounter + 1)}
                        underlayColor='#fff'
                        style={styles.editButton}>
                        <SimpleLineIcons name="pencil" size={24} color="#FFF" />
                    </TouchableOpacity>
                }
                {iconButtonCounter % 2 == 1 &&
                    <TouchableOpacity
                        onPress={updateInfo}
                        underlayColor='#fff'
                        style={styles.editButton}>
                        <Feather name="check" size={30} color="#FFF" />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        height: "100%",
        width: "100%",
    },
    upperView: {
        height: "30%",
        width: "100%",
        flex: 1,
        flexDirection: 'column',
    },
    pictureArea: {
        flexDirection: "row",
        height: "15%",
        justifyContent: "space-around",
        alignItems: "center"
    },
    profileText: {
        fontSize: 28
    },
    profilePicture: {
        aspectRatio: 1,
        height: undefined,
        width: "25%",
        alignSelf: "center",
        borderRadius: 50
    },
    logOutButton: {
        backgroundColor: "#FF0000",
        width: "25%",
        height: "40%",
        borderRadius: 10

    },
    logOutText: {
        fontSize: 20,
        textAlign: "center",
        marginTop: "12.5%",
        color: "#FFF",
        fontWeight: "bold"
    },
    editButton: {
        backgroundColor: "#F00",
        width: 40,
        height: 40,
        alignItems: "center",
        alignSelf: "flex-end",
        borderRadius: 20,
        justifyContent: "center",
        position: "absolute",
        bottom: 7.5,
        right: 20
    },
});
