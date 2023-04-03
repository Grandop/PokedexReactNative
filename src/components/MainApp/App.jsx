import 'react-native-gesture-handler';
import React from 'react';
import { Image } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Pokemons from '../Pokemons';
import DetailPokemon from "../../screens/DetailPokemon";
import Favorites from '../../screens/Favorites';
import styles from './style';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Pokemons" 
      component={Pokemons}
      options={{
        headerShown: false,
        tabBarActiveTintColor: "#e76f51",
        tabBarIcon: () => {
          return (
            <Image style={styles.tabIconHome} source={require("../../assets/homeIcon.png")}/>
          );
        },
      }}
      />
      <Tab.Screen 
      name="Favorites" 
      component={Favorites}
      options={{
        headerShown: false,
        tabBarActiveTintColor: "#e76f51",
        tabBarIcon: () => {
          return (
            <Image style={styles.tabIconStar} source={require("../../assets/star.png")}/>
          );
        },
      }}
      />
    </Tab.Navigator>
  );
}

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
          headerTitleAlign: "center",
        }}
        name='Pokemons' 
        component={Tabs}/>
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
