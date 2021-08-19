import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        margin: 7,
        flexDirection: "row",
        alignItems: "flex-end",
    },
    leftContainer: {
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 20,
        marginRight: 5,
        padding: 5,
    },
    inputContainer: {
        flex: 1,
    },
    input: {
        maxHeight: 100,
    },
    buttonContainer: {
        margin: 2,
        padding: 3,
    },
    rightContainer: {
        backgroundColor: Colors.light.tint,
        borderRadius: 40,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default styles;
