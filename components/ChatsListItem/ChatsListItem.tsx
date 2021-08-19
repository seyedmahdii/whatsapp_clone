import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import styles from "./Styles";
import { useNavigation } from "@react-navigation/native";

const ChatsListItem = () => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback
            onPress={() =>
                navigation.navigate("ChatRoom", {
                    id: 1,
                    name: "seyedjavaddd",
                    imageUri: "http://seyedmahdijalali.ir/images/about.jpg",
                })
            }
        >
            <View style={styles.chatListItem}>
                <View>
                    <Image
                        source={{
                            uri: "http://seyedmahdijalali.ir/images/about.jpg",
                        }}
                        style={styles.avatar}
                    />
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.textRow}>
                        <Text style={styles.name}>Seyed mahdii</Text>
                        <Text style={styles.createdAt}>
                            {/* {moment(chatRoom.lastMessage.createdAt).format(
                                "DD/MM/YYYY"
                            )} */}
                            20 Apr 2021
                        </Text>
                    </View>
                    <Text style={styles.lastMessage} numberOfLines={1}>
                        heloo. this is the last message!!
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ChatsListItem;
