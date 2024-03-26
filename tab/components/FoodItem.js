import { Text, View, StyleSheet, Image} from 'react-native';
import menu from "../../backend/chmenus.json";


export default function FoodItem(props) {
    let url = require("../../img/partner/chicken.jpeg");
    if (menu[props.restaurant][props.name][0]['image'] != undefined) {
        url = { uri: menu[props.restaurant][props.name][0]['image']}
    }
    return (<View style={styles.container}>
                <Image style={styles.image} source={ url } />
                <Text style={styles.bigText}>{props.name}</Text>
                <Text style={styles.bigText}>${props.price}</Text>
                <Text style={styles.smallText}>{props.details}</Text>
            </View>);
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        resizeMode: "cover",
        borderRadius: 40,
    },  
    columns: {
      flexDirection: 'row',
    },
    infoContainer: {
        marginLeft: 20,
        flexDirection: 'row',
    },
    restaurantName: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 32,
        fontWeight: "bold"
    },
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      flexDirection: "column",
      alignItems: 'center',
      height: "100%",
      width: "100%",
      marginLeft: 20
    },
    bigText: {
        color: "#010F07",
        fontSize: 18,
    },
    smallText: {
        color: "#010F07",
        fontSize: 12,
    },
    spacerText: {
        color: "#868686",
        fontSize: 35,
        top: -20,
        marginLeft: 5,
        marginRight: 5
    },
    cuisineText: {
        color: "#010F07",
        fontSize: 18
    },
    ScrollView: {
        height: "100%"
    },
    subHeader: {
        fontSize: 20,
        marginLeft: 20
    },
    horizontalView: {
      width: "100%",
      flexDirection: "row",
      alignContent: "flex-start"
    },
});