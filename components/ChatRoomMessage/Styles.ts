import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        margin: 3,
        marginHorizontal: 7,
    },
    messageBox: {
        backgroundColor: "white",
        padding: 8,
        borderRadius: 10,
    },
    name: {
        color: Colors.light.tint,
        fontWeight: "bold",
        fontSize: 13,
        marginBottom: 1,
    },
    message: {
        //
    },
    createdAt: {
        textAlign: "right",
        fontSize: 11,
        color: "gray",
    },
});

export default styles;
