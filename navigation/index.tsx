import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, View, Image } from "react-native";
import {
    Octicons,
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome5,
} from "@expo/vector-icons";

import Colors from "../constants/Colors";
import MainTabNavigator from "./MainTabNavigator";

function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}

export default Navigation;

const Stack = createStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.light.tint,
                    elvation: 0,
                    shadowOpacity: 0,
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
        </Stack.Navigator>
    );
};
