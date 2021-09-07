import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/Home';
import Estrenos from '../screens/Estrenos';
import Favorites from '../screens/Favorites';
import MovieDetails from '../components/EstrenosList/MovieDetails';
import COLORS from '../constants/colors';

const Stack = createNativeStackNavigator();

const ROUTES = {
  HOME: 'Home',
  ESTRENOS: 'Estrenos',
  FAVORITOS: 'Favoritos',
}

const BreadNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}>
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.ESTRENOS} component={Estrenos} />
      <Stack.Screen name={ROUTES.FAVORITOS} component={Favorites} />
      <Stack.Screen name='MovieDetails' 
        options={{
            title: 'Detalle de Película'
        }}
        component={MovieDetails} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default BreadNavigator;
