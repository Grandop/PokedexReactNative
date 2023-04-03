import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e76f51",
    height: "50%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  pokemonName: {
    textTransform: "capitalize",
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  pokemonBgView: {
    marginTop: 20,
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 30,
    backgroundColor: "white",
  },
  pokemonImage: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: 200,
  },
  footerView: {
    backgroundColor: "#fff",
    height: "50%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 100,
  },
  textStats: {
    color: "black",
    fontSize: 25,
    textTransform: "capitalize",
    marginBottom: 10,
  }
});

export default styles;