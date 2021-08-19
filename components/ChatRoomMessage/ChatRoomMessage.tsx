import React from "react";
import { View, Text } from "react-native";
import styles from "./Styles";
import moment from "moment";

const ChatMessage = () => {
    const isMessageMine = true;

    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.messageBox,
                    {
                        backgroundColor: isMessageMine ? `#dcf8c5` : "white",
                        marginLeft: isMessageMine ? 50 : 0,
                        marginRight: isMessageMine ? 0 : 50,
                    },
                ]}
            >
                {!isMessageMine && <Text style={styles.name}>~hasan</Text>}
                <Text style={styles.message}>salam, che khabar</Text>
                <Text style={styles.createdAt}>
                    {/* {moment(message.createdAt).fromNow()} */}
                    20:47
                </Text>
            </View>
        </View>
    );
};

export default ChatMessage;
