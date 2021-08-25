import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation/index";
import { AppProvider } from "./context";

export default function App() {
    return (
        <AppProvider>
            <SafeAreaProvider>
                <Navigation />
            </SafeAreaProvider>
        </AppProvider>
    );
}
