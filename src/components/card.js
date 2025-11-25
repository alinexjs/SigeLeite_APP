import React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";
import { Card } from "react-native-paper";

import Logo2 from "../../assets/Logo2.png";
import Vaca from "../../assets/vacas.png";
import Vacas from "../../assets/vaca2.png";
import Mulher from "../../assets/mulher.png";

export default function Cardcomponent() {
  return (
    <Card style={styles.card}>

      {/* LOGO */}
      <View style={styles.logoBox}>
        <Image source={Logo2} style={styles.logo} />
        <View>
          <Text style={styles.appName}>Sige</Text>
          <Text style={[styles.appName, { marginTop: -6 }]}>Leite</Text>
        </View>
      </View>

      
      <View style={styles.rowContent}>

        {/* IMAGENS*/}
        <View style={styles.imagesContainer}>
          <Image source={Vaca} style={styles.imageLarge} />

          <View style={styles.bottomRow}>
            <Image source={Vacas} style={styles.imageSmall} />
            <Image source={Mulher} style={styles.imageSmall} />
          </View>
        </View>

        {/* TEXTOS AO LADO */}
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Bem Vindo(a) ao Nosso APP!</Text>

          <Text style={styles.textDescription}>
            Com ele, você tem mais controle e praticidade na rotina rural.
          </Text>

          <Text style={styles.textDescription}>
Nosso objetivo é facilitar seu trabalho, aumentar a produtividade e economizar tempo para melhores resultados.          </Text>
        </View>

      </View>

    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#D3D3D3",
    padding: 10,
    borderRadius: 15,
    margin: 3,
  },

  logoBox: {
    position: "absolute",
    top: 5,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 65,
    height: 65,
    resizeMode: "contain",
  },

  appName: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 24,
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },

  
  rowContent: {
    flexDirection: "row",
    marginTop: 80, 
  },

  imagesContainer: {
    width: "45%",
  },

  imageLarge: {
    width: "100%",
    height: 90,
    resizeMode: "cover",
    marginBottom: 10,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  imageSmall: {
    width: "48%",
    aspectRatio: 0.6,
    resizeMode: "cover",
  },

  /* TEXTOS */
  textContainer: {
    flex: 1,
    paddingLeft: 15,  
    justifyContent: "center",
  },

  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },

  textDescription: {
    fontSize: 12,
    color: "#FFFFFF",
    lineHeight: 12,
    marginBottom: 6,
  },
});
