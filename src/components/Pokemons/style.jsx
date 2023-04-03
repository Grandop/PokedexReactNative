import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bgView: {
        backgroundColor: "#e76f51",
    },
    textInputArea: {
        backgroundColor: "white",
        marginVertical: 20,
        marginHorizontal: 20,
        height: 50,
        justifyContent: "center",
        borderRadius: 20,
        paddingLeft: 10,
        borderWidth: 2,
    },
    textInput: {
        color: "black",
    },
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