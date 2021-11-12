import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Detail from './components/Detail';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={styles}
      >
        <Stack.Screen
          name="Details"
          component={Detail}
          options={{ title: 'Details' }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Tap List' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#09091C'
  },
  headerTintColor: '#1BE1F2',
  headerTitleStyle: {
    fontWeight: 'normal',
    fontSize: 23,
    textAlign: 'center'
  }
})

export default App;
