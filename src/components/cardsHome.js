import * as React from 'react';
import { Card } from 'react-native-paper';
import { Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function CardHome({
  title,
  subtitleLines,
  icon,
  iconLib = "entypo",
  iconSize = 24,
  iconColor = "#FFF",
  iconBgColor = "#9482D8"
}) {

  const IconComponent =
    iconLib === "material" ? MaterialCommunityIcons : Entypo;

  return (
    <Card
      style={{
        marginVertical: 8,
        paddingBottom: 10,
        backgroundColor: "#FFFFFF",
      }}
    >
      <Card.Title
        title={title}
        titleStyle={{
          fontSize: 18,
          fontWeight: "600",
          color: "#000"
        }}
        left={() => (
          <View
            style={{
              width: 45,
              height: 45,
              borderRadius: 45 / 2,
              backgroundColor: iconBgColor,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 12,
            }}
          >
            <IconComponent
              name={icon}
              size={iconSize}
              color={iconColor}
            />
          </View>
        )}
      />

      <Card.Content>
        {subtitleLines.map((line, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 6
            }}
          >
            <Text style={{ fontSize: 20, marginRight: 3 ,lineHeight: 10}}>•</Text>
            <Text style={{ fontSize: 14 }}>{line}</Text>
          </View>
        ))}
      </Card.Content>
    </Card>
  );
}
