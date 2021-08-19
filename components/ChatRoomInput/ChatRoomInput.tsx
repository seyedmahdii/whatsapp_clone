import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./Styles";
import {
    Entypo,
    FontAwesome5,
    Fontisto,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";

const ChatRoomInput = () => {
    const [message, setMessage] = useState("");

    const sendMessage = () => {
        console.warn(`Sending the message: ${message}`);
        setMessage("");
    };

    const sendVoice = () => {
        console.warn("sending voice");
    };

    const primaryButtonHandler = () => {
        if (message) {
            sendMessage();
        } else {
            sendVoice();
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.buttonContainer}>
                    <FontAwesome5 name="laugh-beam" size={24} color="gray" />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Type a message"
                        style={styles.input}
                        multiline
                        value={message}
                        onChangeText={(text) => setMessage(text)}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Entypo name="attachment" size={24} color="gray" />
                </View>
                {!message && (
                    <View style={styles.buttonContainer}>
                        <Fontisto name="camera" size={24} color="gray" />
                    </View>
                )}
            </View>
            <TouchableOpacity onPress={primaryButtonHandler}>
                <View style={styles.rightContainer}>
                    {message ? (
                        <MaterialIcons name="send" size={24} color="white" />
                    ) : (
                        <MaterialCommunityIcons
                            name="microphone"
                            size={24}
                            color="white"
                        />
                    )}
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ChatRoomInput;
