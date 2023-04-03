import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import Title from '../Title';
import styles from './style';
import Pokemons from '../Pokemons';
import DetailPokemon from "../../screens/DetailPokemon";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

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
          headerBackTitle: " "
        }}
        name='DetailPokemon' 
        component={DetailPokemon}/>
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

// <View>
// <Title/>
// <View style={styles.container}>
//   <Pokemons/>
// </View>
// </View>
