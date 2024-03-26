import * as Location from 'expo-location';

const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        throw new Error("Permission ot access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({});

    return {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
    }
}

export {getUserLocation};