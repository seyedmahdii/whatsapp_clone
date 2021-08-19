import React from "react";
import { StyleSheet, ImageBackground, FlatList } from "react-native";
import BG from "../assets/images/BG.png";
import ChatRoomMessage from "../components/ChatRoomMessage/ChatRoomMessage";
import ChatRoomInput from "../components/ChatRoomInput/ChatRoomInput";

const ChatRoomScreen = () => {
    return (
        <ImageBackground source={BG} style={styles.container}>
            {/* <FlatList
                data={chats}
                renderItem={({ item }) => <ChatRoomMessage />}
                inverted
            /> */}
            <ChatRoomMessage />
            <ChatRoomMessage />
            <ChatRoomInput />
        </ImageBackground>
    );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
