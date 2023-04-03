import React, { useState, useEffect} from "react";
import { Text , View, Image, TouchableOpacity} from "react-native";

import styles from "./style";
import star from "../../assets/star.png"
import starClear from "../../assets/starClear.png"; 

export default function DetailPokemon({route}) {
  const [pokemonStats, setStats] = useState([])
  const [starIcon, setIcon] = useState(starClear)

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
        <View style={styles.namePokemonView}>
          <Text
          style={styles.pokemonName}
          >{route.params.name}</Text>
          <TouchableOpacity
          style={styles.favoriteIconView}
          onPress={() => {
            if(starIcon === starClear){
              setIcon(star)
            } else {
              setIcon(starClear)
            }
          }}
          >
            <Image 
            source={starIcon}
            style={styles.favoriteIcon}
            />
          </TouchableOpacity>
        </View>
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