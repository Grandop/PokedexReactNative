import React, {useState, useEffect} from "react";
import {
  Text, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  View, 
  TextInput
} from "react-native";
import axios from "axios";

import { 
  PokemonName, 
  PokemonImage, 
  PokemonURL 
} from "../../contexts/pokemonInfos";
import styles from "./style";

export default function Pokemons({navigation}) {
const { navigate } = navigation

const [pokemonData, setPokemonData] = useState([])
const [searchText, setSearchText] = useState("")

const getPokemons = async () => {
  let baseURL= "https://pokeapi.co/api/v2";
  let endPoint = "/pokemon?limit=200";
  try {
    const response = await fetch(`${baseURL}${endPoint}`);
    const json = await response.json();
    setSearchText(json.results);
    setPokemonData(json.results);
  } catch (error) {
    console.log(error);
  }
  // const { data } = await axios.get(`${baseURL}${endPoint}`)
  // setPokemonData(data);
  // setSearchText(data);
  // console.log(pokemonData)
  // console.log(se)
};

const getPokemonImage = (url) => {
  const id = url.split("/").filter(Boolean).at(-1)
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

useEffect(() => {
  getPokemons();
}, []);

const searchPokemons = (text) => {
  if(text.toLowerCase() === "") {
    setSearchText(pokemonData);
  } else {
    setSearchText(
      pokemonData.filter((item) => {
        if(item.name.includes(text.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
} 

  return (
    <View style={styles.bgView}>
      <View style={styles.textInputArea}>
        <TextInput 
        style={styles.textInput}
        placeholder="Pesquise um pokemon"
        placeholderTextColor="black"
        value={searchText}
        onChangeText={(userText) => searchPokemons(userText)}
        />
      </View>
      <FlatList 
        style={styles.flatListStyle}
        showsVerticalScrollIndicator={false}
        data={searchText}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return(
          <TouchableOpacity 
          onPress={() => navigate("DetailPokemon", 
          {
            pokemonPhoto: getPokemonImage(item.url), 
            name: item.name,
            url: item.url
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
    </View>
  );
}