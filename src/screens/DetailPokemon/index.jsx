import React, { Fragment } from "react";
import { Text , View, Image} from "react-native";
import styles from "./style";

export default function DetailPokemon({route}) {
    console.log(route.params.pokemonPhoto)
  return (
    <View style={styles.container}>
        <Text
        style={styles.pokemonName}
        >{route.params.name}</Text>
        <View style={styles.pokemonBgView}>
            <Image 
            style={styles.pokemonImage}
            source={{uri: route.params.pokemonPhoto}}
            />
        </View>
    </View>
  );
}