import { View, Text, StyleSheet, Platform, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Navbar from "../components/navbar.js";
import Navigation from "../components/navigation.js";
import Button from "../components/button.js";
import Card from "../components/card.js";
import CardHome from "../components/cardsHome.js";
import CardImg from "../components/cardImg.js";
import CardFooter from "../components/cardFooter.js";
import Aline from "../../assets/Aline.jpeg";
import Paula from "../../assets/Paula.jpg"
import Lucas from "../../assets/Lucas.jpg"
import Renato from "../../assets/Renato.jpg"


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
                iconLib="material"
                iconSize={32}
                subtitleLines={[
                  "Acesse o menu “Cadastrar”;",
                  "Preencha as informações necessárias;",
                  "E pronto o sistema já funcionará."
                ]}
              />

              <CardHome
                title="Produção"
                icon="bucket"
                iconSize={30}
                subtitleLines={[
                  "Vá até “Produção”;",
                  "Monitore a produção diária, mensal ou anual;",
                  "Os gráficos são atualizados automaticamente."
                ]}
              />

              <CardHome
                title="Relatórios"
                icon="bar-graph"
                iconSize={30}
                subtitleLines={[
                  "Tenha acesso as suas atividades no app;",
                  "Defina suas metas diárias em seu perfil;",
                  "Acompanhe a produção Geral de seus animais."
                ]}
              />
            </View>

            <Text style={styles.title2}>Desenvolvedores</Text>

            <View style={{ position: "relative", width: "100%" }}>

              {/* GRADIENTE */}
              <LinearGradient
                colors={["transparent", "#A59BDC"]}
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "200%",
                  left: "-50%",
                  height: 400,
                  zIndex: -1,
                }}
              />

              {/* CARDS */}
              <View
                style={{
                  width: "110%",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignSelf: "center",
                  marginBottom: 40

                }}
              >
                <CardImg image={Aline} title="Aline" subtitle="Garcia" icon="instagram" />
                <CardImg image={Paula} title="Paula" subtitle="Natali" />
                <CardImg image={Lucas} title="Lucas" subtitle="Galindo" />
                <CardImg image={Renato} title="Renato" subtitle="William" />
              </View>
            </View>
          </View>
          <View>
            <CardFooter />
            <Text style={{
              fontSize: 10,
              textAlign: "center",
              marginTop: 2,
              marginBottom: 8,
              fontWeight: "600",
            }}>
              2025-Todos os direitos reservados </Text>
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
