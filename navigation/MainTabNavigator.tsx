import { Ionicons, Fontisto } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import CameraScreen from "../screens/CameraScreen";
import ChatsScreen from "../screens/ChatsScreen";
import StatusScreen from "../screens/StatusScreen";
import CallsScreen from "../screens/CallsScreen";
import Colors from "../constants/Colors";
import { MainTabParamList } from "../types";

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

// Main Top Navigator
export default function MainTabNavigator() {
    return (
        <MainTab.Navigator
            initialRouteName="Chats"
            screenOptions={{
                tabBarActiveTintColor: Colors.light.background,
                tabBarStyle: {
                    backgroundColor: Colors.light.tint,
                },
                tabBarIndicatorStyle: {
                    backgroundColor: Colors.light.background,
                    height: 4,
                },
                tabBarLabelStyle: {
                    fontWeight: "bold",
                },
                tabBarShowIcon: true,
            }}
        >
            <MainTab.Screen
                name="Camera"
                component={CameraScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Fontisto name="camera" size={18} color={color} />
                    ),
                    tabBarShowLabel: false,
                }}
            ></MainTab.Screen>
            <MainTab.Screen
                name="Chats"
                component={ChatsScreen}
            ></MainTab.Screen>
            <MainTab.Screen
                name="Status"
                component={StatusScreen}
            ></MainTab.Screen>
            <MainTab.Screen
                name="Calls"
                component={CallsScreen}
            ></MainTab.Screen>
        </MainTab.Navigator>
    );
}
