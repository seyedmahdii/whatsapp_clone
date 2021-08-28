import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    elementsContainer: {
        flex: 1,
        padding: 20,
        justifyContent: "space-between",
    },
    title: {
        color: Colors.light.tint,
        textAlign: "center",
        marginVertical: 10,
    },
    secondaryTitle: {
        textAlign: "center",
        marginVertical: 10,
        color: "#4d4d4d",
    },
    inputsContainer: {
        padding: 20,
        marginBottom: 10,
    },
    input: {
        borderBottomColor: Colors.light.tint,
        borderBottomWidth: 2,
        marginBottom: 10,
    },
    buttonContainer: {
        width: "100%",
        alignItems: "center",
        marginBottom: 15,
    },
});

export default styles;
