import React from "react";
import { View, Text, TouchableNativeFeedback, Image } from "react-native";
import styles from "./Styles";
import { useNavigation } from "@react-navigation/native";

const Contact = () => {
    const navigation = useNavigation();

    return (
        <TouchableNativeFeedback
            onPress={() =>
                navigation.navigate("ChatRoom", {
                    id: 1,
                    name: "seyedjavaddd",
                    imageUri: "http://seyedmahdijalali.ir/images/about.jpg",
                })
            }
        >
            <View style={styles.contact}>
                <View style={styles.avatarContainer}>
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
                    </View>
                    <Text style={styles.bio} numberOfLines={1}>
                        this supposed to be the user's bio!!
                    </Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    );
};

export default Contact;
