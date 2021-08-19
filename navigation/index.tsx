import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, View, Image } from "react-native";
import {
    Octicons,
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome5,
    AntDesign,
} from "@expo/vector-icons";

import Colors from "../constants/Colors";
import MainTabNavigator from "./MainTabNavigator";
import { RootStackParamList } from "../types";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import { useNavigation } from "@react-navigation/native";

function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}

export default Navigation;

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    const navigation = useNavigation();

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.light.tint,
                    shadowOpacity: 0, // IOS
                    elevation: 0, // Android
                },
                headerTintColor: Colors.light.background,
                headerTitleAlign: "left",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Stack.Screen
                name="Root"
                component={MainTabNavigator}
                options={{
                    title: "WhatsApp",
                    headerRight: () => (
                        <View
                            style={{
                                flexDirection: "row",
                                width: 60,
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginRight: 10,
                            }}
                        >
                            <Octicons
                                name="search"
                                size={24}
                                color={Colors.light.background}
                            />
                            <MaterialCommunityIcons
                                name="dots-vertical"
                                color={Colors.light.background}
                                size={24}
                            />
                        </View>
                    ),
                }}
            />
            <Stack.Screen
                name="ChatRoom"
                component={ChatRoomScreen}
                options={({ route }) => ({
                    title: route.params.name,
                    headerTitleStyle: {
                        fontWeight: "normal",
                        fontSize: 18,
                    },
                    headerLeft: () => {
                        return (
                            <View
                                style={{
                                    minWidth: 70,
                                    marginLeft: 10,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <AntDesign
                                    name="arrowleft"
                                    size={28}
                                    color="white"
                                    style={{ marginRight: 5 }}
                                    onPress={() => navigation.goBack()}
                                />
                                <Image
                                    source={{ uri: route.params.imageUri }}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 40,
                                    }}
                                />
                            </View>
                        );
                    },
                    headerRight: () => {
                        return (
                            <View
                                style={{
                                    width: 100,
                                    marginRight: 10,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}
                            >
                                <MaterialIcons
                                    name="call"
                                    size={24}
                                    color="white"
                                />
                                <FontAwesome5
                                    name="video"
                                    size={24}
                                    color="white"
                                />
                                <MaterialCommunityIcons
                                    name="dots-vertical"
                                    size={24}
                                    color="white"
                                />
                            </View>
                        );
                    },
                })}
            />
        </Stack.Navigator>
    );
};
