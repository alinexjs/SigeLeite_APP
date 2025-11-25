import * as React from 'react';
import { Avatar, Card } from 'react-native-paper';
import { View, Text } from 'react-native';

export default function CardHome({ title, subtitleLines, icon }) {
  return (
    <Card
      style={{
        marginVertical: 8,
        paddingBottom: 10,
        backgroundColor: "#ffffffff",
      }}
    >
      <Card.Title
        title={title}
        left={(props) => <Avatar.Icon {...props} icon={icon} />}
      />

      <Card.Content>
        {subtitleLines.map((line, index) => (
          <Text key={index} style={{ marginBottom: 4, fontSize: 14 }}>
            {line}
          </Text>
        ))}
      </Card.Content>
    </Card>
  );
}
