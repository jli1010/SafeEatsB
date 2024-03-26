import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Pages
import Main from './pages/Main';
import TabNav from './tab/TabNav';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen
        name="Main"
        component={Main}
      />
      <Stack.Screen 
        name="TabNav"
        component={TabNav}
      />
    </Stack.Navigator>
    </NavigationContainer>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    fontSize: 30
  },
  textField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: "80%",
    margin: 10,
    padding: 5
  },
  checkboxContainer: {
    marginBottom: 20,
    flexDirection: 'row',

  },
  checkboxColumn: {
    flexDirection: 'column',
    margin: 2,
  },
  checkboxRow: {
    margin: 5,
  }
});
