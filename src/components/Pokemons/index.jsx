import React, {useState, useEffect} from "react";
import { View, Text, FlatList, Image, TouchableOpacity} from "react-native";
import styles from "./style";

export default function Pokemons({navigation}) {
const [pokemonData, setData] = useState([])

const getPokemons = async () => {
  let baseURL= "https://pokeapi.co/api/v2";
  let endPoint = "/pokemon?limit=100";
  try {
    const response = await fetch(`${baseURL}${endPoint}`);
    const json = await response.json();
    setData(json.results);
  } catch (error) {
    console.log(error);
  }
};

const getPokemonImage = (url) => {
  const id = url.split("/").filter(Boolean).at(-1)
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

useEffect(() => {
    getPokemons();
}, []);

  return (
    <FlatList 
      style={styles.flatListStyle}
      showsVerticalScrollIndicator={false}
      data={pokemonData}
      renderItem={({item}) => {
        return(
        <TouchableOpacity 
        onPress={() => navigation.navigate("DetailPokemon", 
        {
          pokemonPhoto: getPokemonImage(item.url), 
          name: item.name
        }
        )}
        style={styles.flatListCell}>
          <Image
          style={styles.pokemonImage}
          source={{uri: getPokemonImage(item.url)}}
          ></Image>
          <Text style={styles.pokemonName}>
            {item.name}
          </Text>
        </TouchableOpacity>
        );
      }}
    />
  );
}