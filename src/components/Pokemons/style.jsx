import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    flatListStyle: {
        backgroundColor: "#e76f51",
    },
    flatListCell: {
        flexDirection: "row",
        backgroundColor: "white",
        marginBottom: 15,
        marginHorizontal: 20,
        height: 200,
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 40,
        borderWidth: 3,
    },
    pokemonImage: {
        height: 140,
        width: 140,
        marginRight: 60,
    },
    pokemonName: {
        textTransform: "capitalize",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "left",
        color: "black",
    }
  });

export default styles;