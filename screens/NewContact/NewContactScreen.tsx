import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Styles";
import Colors from "../../constants/Colors";

const NewContactScreen = () => {
    const [email, setEmail] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.elementsContainer}>
                <View>
                    <Text style={styles.title}>Enter your contact's email</Text>
                    <View style={styles.inputsContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Add Contact"
                        onPress={() => alert("new user")}
                        color={Colors.light.secondaryButton}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default NewContactScreen;
