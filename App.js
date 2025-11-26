import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./src/pages/Home";
import Login from "./src/pages/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}