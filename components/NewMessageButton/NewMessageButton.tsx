import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./Styles";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NewMessageButton = () => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Contacts")}
        >
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="message-reply-text"
                    size={28}
                    color="white"
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default NewMessageButton;
