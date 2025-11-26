import * as React from 'react';
import { Avatar, Card, } from 'react-native-paper';
import { View } from 'react-native';
import Logo from "../../assets/logo.png";
import FontAwesome from '@expo/vector-icons/FontAwesome';


const CardFooter = () => (
  <Card.Title style={{ backgroundColor: "#9482D8", width: "1000", marginHorizontal: -20, }}
    title="Sige"
    titleStyle={{
      fontSize: 20, color: "#FFFFFF", fontWeight: "bold", textShadowColor: "rgba(0,0,0,0.6)",
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 4, paddingLeft: 8
    }}

    subtitle="Leite"
    subtitleStyle={{
      fontSize: 20, color: "#FFFFFF", fontWeight: "bold", textShadowColor: "rgba(0,0,0,0.6)",
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 4, paddingLeft: 8,
    }}

    left={() => (
      <Avatar.Image style={{ backgroundColor: "#FFFFFF" }}
        size={60}
        source={Logo}
      />

    )}
    right={() => (
      <View style={{
        flexDirection: "row",
        paddingRight: 630,
        gap: 12,

      }}>

        {/* COLUNA ESQUERDA */}
        <View style={{ flexDirection: "column", gap: 10, }}>
          <FontAwesome name="github" size={20} color="#FFF" />
          <FontAwesome name="instagram" size={20} color="#FFF" />
        </View>

        {/* COLUNA DIREITA */}
        <View style={{ flexDirection: "column", gap: 10 }}>
          <FontAwesome name="whatsapp" size={20} color="#FFF" />
          <FontAwesome name="linkedin" size={20} color="#FFF" />
        </View>
      </View>
    )}
  />


);

export default CardFooter;