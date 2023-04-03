import React, { useState, useEffect} from "react";
import { Text , View, Image} from "react-native";

import styles from "./style";

export default function DetailPokemon({route}) {
  const [pokemonStats, setStats] = useState([])

  const getPokemonStats = async () => {
    try {
      const response = await fetch(route.params.url);
      const json = await response.json();
      setStats(json.stats)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemonStats()
  }, [])

  return (
    <View style={styles.backgroundView}>
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
      <View style={styles.footerView}>
      {pokemonStats.map(({stat, base_stat}) => (
        <>
          <Text style={styles.textStats}> {stat.name}: {base_stat}</Text>
        </>
      ))}
      </View>
    </View>
  );
}