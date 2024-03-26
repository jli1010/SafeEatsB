import { Image, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { useState } from "react";

// Pages
import CreateAccount from "./CreateAccount";
import LogIn from "./Login";

const Main = () => {
    const [currentComponent, setCurrentComponent] = useState(<CreateAccount/>);
    const [createAccountText, setCreateAccountText] = useState(styles.activeText);
    const [createAccount, setCreateAccount] = useState(styles.selectorActive);
    const [logInText, setLogInText] = useState(styles.inactiveText);
    const [logIn, setLogIn] = useState(styles.selectorInactive);

    return (
        <View style={styles.container}>
            <View style={styles.upperView}>
                <Image style={styles.pattern} source={require('../img/topPattern2.png')} />
                <Image style={styles.illustration} source={require('../img/Registration_Page.png')} />
            </View>
            <View style={styles.lowerView}>
                <View style={styles.selectorContainer}>
                    <TouchableOpacity
                        style={[styles.selectorButton, createAccount]}
                        onPress={() => {
                            setCurrentComponent(<CreateAccount />); 
                            setCreateAccount(styles.selectorActive);
                            setCreateAccountText(styles.activeText);
                            setLogIn(styles.selectorInactive);
                            setLogInText(styles.inactiveText);
                        }}>
                        <Text style={createAccountText}>Create Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.selectorButton, logIn]}
                        onPress={() => {
                            setCurrentComponent(<LogIn />); 
                            setLogIn(styles.selectorActive);
                            setLogInText(styles.activeText);
                            setCreateAccount(styles.selectorInactive);
                            setCreateAccountText(styles.inactiveText);
                        }}>
                        <Text style={logInText}>Log In</Text>
                    </TouchableOpacity>
                </View>
                {currentComponent}
            </View>
        </View>
    )
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
    lowerView: {
        height: "70%",
        width: "100%",
        flex: 2,
        backgroundColor: "#F5F5F5"
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
    selectorActive: {
        borderBottomColor: "#8DB670"
    },
    selectorInactive: {
        borderBottomColor: "#999999"
    },
    activeText: {
        fontSize: 20,
        color: "#8DB670",
        paddingBottom: 5
    },
    
    inactiveText: {
        fontSize: 20,
        color: "#999999",
        paddingBottom: 5
        
    },

    pattern: {
        

    },
    illustration: {
        position: "absolute", 
        marginTop: "12.5%"
    }
  });


export default Main;