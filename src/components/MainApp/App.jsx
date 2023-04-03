import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Pokemons from '../Pokemons';
import DetailPokemon from "../../screens/DetailPokemon";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen 
        options={{
          title: "Pokedex",
          headerStyle: {
            backgroundColor: "#e76f51",
          },
          headerTransparent: 0,
          headerTitleAlign: "center"
        }}
        name='Pokemons' 
        component={Pokemons}/>
        <Stack.Screen 
        options={{
          title: "Pokemon",
          headerStyle: {
            backgroundColor: "#e76f51",
          },
          headerTintColor: "black",
          headerBackTitle: " ",
          headerTitleAlign: "center"
        }}
        name='DetailPokemon' 
        component={DetailPokemon}/>
      </Stack.Navigator>
    </NavigationContainer> 
  );
}
