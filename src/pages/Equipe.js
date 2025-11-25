import { View, Text } from "react-native";
import Navigation from "../components/navigation.js";

export default function Ordenhador() {
  return (
    <View style={{ flex: 1 }}>
      {/* Conteúdo no centro */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24 }}>Ordeenhador Tela</Text>
      </View>

      {/* Navigation no final da tela */}
      <Navigation />
    </View>
  );
}
