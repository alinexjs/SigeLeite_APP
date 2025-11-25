import { View, Text, StyleSheet, Platform, ScrollView } from "react-native";
import Navbar from "../components/navbar.js";
import Navigation from "../components/navigation.js";
import Button from "../components/button.js";
import Fundo from "../../assets/fundo.png";
import Card from "../components/card.js";
import CardHome from "../components/cardsHome.js";
import CardImg from "../components/cardImg.js";
import Aline from "../../assets/Aline.jpeg";
import Paula from "../../assets/Paula.jpg"
import Lucas from "../../assets/Lucas.jpg"
import Renato from "../../assets/Renato.jpg"
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
  return (
    <View style={styles.container}>
      <Navbar />

      {/* ROLAGEM */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.center}>

          <Text style={styles.title}>
            Sistema de Gerenciamento de
            <Text style={styles.highlight}> Produção de Leite</Text>
          </Text>

          <Button />

          <View style={{ marginTop: 40 }}>
            <Card />

            <Text style={styles.title2}>Como Funciona</Text>

            <View style={styles.cardHome}>

              <CardHome
                title="Registro dos Animais"
                icon="cow"
                subtitleLines={[
                  "Acesse o menu “Cadastrar”;",
                  "Preencha as informações necessárias;",
                  "E pronto o sistema já funcionará."
                ]}
              />

              <CardHome
                title="Produção"
                icon="cup"
                subtitleLines={[
                  "Vá até “Produção”;",
                  "Monitore a produção diária, mensal ou anual;",
                  "Os gráficos são atualizados automaticamente."
                ]}
              />

              <CardHome
                title="Relatórios"
                icon="file-chart"
                subtitleLines={[
                  "Tenha acesso as suas atividades no app;",
                  "Defina suas metas diárias em seu perfil;",
                  "Acompanhe a produção Geral de seus animais."
                ]}
              />

            </View>

            <Text style={styles.title2}>Desenvolvedores</Text>

<View style={{ position: "relative", width: "100%" }}>
  
  {/* GRADIENTE NO FUNDO DOS CARDS */}
  <LinearGradient
    colors={["transparent", "#A59BDC"]} // transparente → roxinho claro
    style={{
      position: "absolute",
      bottom: 0,
      width: "200%",
      height: 300, // Ajuste para subir mais ou menos
      zIndex: -1,
    }}
  />

  {/* SEUS CARDS */}
  <View
    style={{
      width: "110%",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      paddingHorizontal: 0,
    }}
  >
    <CardImg image={Aline} title="Aline" subtitle="Garcia" />
    <CardImg image={Paula} title="Paula" subtitle="Natali" />
    <CardImg image={Lucas} title="Lucas" subtitle="Galindo" />
    <CardImg image={Renato} title="Renato" subtitle="William" />
  </View>
</View>



          </View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FBFF"
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
  title2: {
    fontSize: 25,
    fontWeight: "500",
    color: "#000000",
    textAlign: "center",
    marginTop: 20,
  },
  cardHome: {
    marginTop: 10,
    padding: 10,
  },
});
