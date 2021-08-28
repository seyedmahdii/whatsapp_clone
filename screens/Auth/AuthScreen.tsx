import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import styles from "./Styles";
import Colors from "../../constants/Colors";
import { auth } from "../../firebase";
import { useWhatsAppContext } from "../../context";

const AuthScreen = ({}) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const { setLoggedUser } = useWhatsAppContext();
    console.log(typeof phone);
    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser: { user: {} }) => {
                authUser.user.updateProfile({
                    displayName: name,
                    phoneNumber: phone,
                    photoURL:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png",
                });
                setLoggedUser(authUser);
                navigation.navigate("Home");
            })
            .catch((error: { message: "" }) => {
                alert(error?.message);
                console.log("REGISTER ERROR ", error);
            });
    };

    const authHandler = () => {
        if (email && password) {
            auth.signInWithEmailAndPassword(email, password)
                .then((authUser: {}) => {
                    // successful login
                    console.log(authUser);
                    setLoggedUser(authUser);
                    navigation.navigate("Home");
                })
                .catch((error: {}) => {
                    register();
                    // alert(error);
                    console.log("LOGIN ERROR ", error);
                });
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.elementsContainer}>
                <View>
                    <Text style={styles.title}>Enter your phone number</Text>
                    <Text style={styles.secondaryTitle}>
                        WhatsApp will send you a SMS to confirm your phone
                        number.
                    </Text>
                    <View style={styles.inputsContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Full Name"
                            value={name}
                            onChangeText={(text) => setName(text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Phone"
                            keyboardType="numeric"
                            value={phone}
                            onChangeText={(text) => setPhone(text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                        />
                    </View>

                    <Text style={styles.secondaryTitle}>
                        This may cost you something
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Submit"
                        onPress={authHandler}
                        color={Colors.light.secondaryButton}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default AuthScreen;
