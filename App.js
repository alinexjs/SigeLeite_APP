import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from "./src/pages/Home";

export default function App() {
  return(
      <PaperProvider>
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
      </PaperProvider>
  
  )
}