import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    chatListItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        width: "100%",
        borderBottomColor: "#f9f9f9",
        borderBottomWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    avatar: {
        height: 60,
        width: 60,
        borderRadius: 50,
        backgroundColor: "gray",
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
        fontWeight: "bold",
    },
    createdAt: {
        fontSize: 14,
        color: "gray",
    },
    lastMessage: {
        fontSize: 15,
        color: "gray",
    },
});

export default styles;
