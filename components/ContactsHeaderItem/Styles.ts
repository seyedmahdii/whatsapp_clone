import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    contactsHeaderItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        width: "100%",
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    avatarContainer: {
        height: 40,
        width: 40,
        borderRadius: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.light.secondaryButton,
    },
    avatar: {
        height: "100%",
        width: "100%",
        borderRadius: 50,
    },
    textContainer: {
        flex: 1,
        marginLeft: 15,
    },
    textRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
    },
    name: {
        fontSize: 17,
    },
});

export default styles;
