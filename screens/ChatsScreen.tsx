import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ChatsListItem from "../components/ChatsListItem/ChatsListItem";
import NewMessageButton from "../components/NewMessageButton/NewMessageButton";

const ChatsScreen = () => {
    return (
        <View style={styles.container}>
            {/* <FlatList data={data} renderItem={({item}) => <ChatsListItem chatRoom={item} />} /> */}
            <ChatsListItem />
            <ChatsListItem />
            <ChatsListItem />
            <NewMessageButton />
        </View>
    );
};

export default ChatsScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ededed",
        flex: 1,
    },
});
