import { View, Text, StyleSheet, Platform, } from "react-native";
import Navbar from "../components/navbar.js";
import Navigation from "../components/navigation.js";
import Button from "../components/button.js";
import Fundo from "../../assets/fundo.png";
import Card from "../components/card.js";
import CardHome from "../components/cardsHome.js";

export default function Home() {
  return (
    <View style={styles.container}>
      <Navbar />

      <View style={styles.center}>
        {/*<Image
          source={Fundo}
          style={styles.fundoImage}
          resizeMode="contain"
        />*/}

        <Text style={styles.title}>
          Sistema de Gerenciamento de
          <Text style={styles.highlight}> Produção de Leite</Text>
        </Text>

        <Button />
        <View style={{ marginTop: 40 }}>
          <Card />

          <Text style={styles.title2}>
         Como Funciona
        </Text>
        <View style={styles.cardHome}>
        <CardHome/>
        </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FBFF",
  },
  center: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#8C8C8C",
    textAlign: "center",
    fontFamily: Platform.OS === "android" ? "casual" : "Marker Felt",
  },
  highlight: {
    color: "#9482D8",

  },
  footer: {
    height: 70,
  },
  fundoImage: {
    position: "absolute",
    width: 200,
    height: 210,
  },
  title2: {
    fontSize: 25,
    fontWeight: "500",
    color: "#000000",
    textAlign: "center",
    marginTop:20
  },
  cardHome:{
    marginTop: 10,
    backgroundColor:"#FFFFFF",
    borderRadius: 14,
    
  }
});
