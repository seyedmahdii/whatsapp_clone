import React from "react";
import { View, Text, TouchableNativeFeedback } from "react-native";
import styles from "./Styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface contactsHeaderProps {
    icon: string;
    title: string;
    navigationTarget: string;
}

const ContactsHeaderItem = (props: contactsHeaderProps) => {
    const { icon, title, navigationTarget } = props;
    const navigation = useNavigation();

    return (
        <TouchableNativeFeedback
            onPress={() => navigation.navigate(navigationTarget)}
        >
            <View style={styles.contactsHeaderItem}>
                <View style={styles.avatarContainer}>
                    <AntDesign name={icon} color="white" size={24} />
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.textRow}>
                        <Text style={styles.name}>{title}</Text>
                    </View>
                </View>
            </View>
        </TouchableNativeFeedback>
    );
};

export default ContactsHeaderItem;
