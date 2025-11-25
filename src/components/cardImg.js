import * as React from "react";
import { Dimensions } from "react-native";
import { Card, Avatar } from "react-native-paper";

const { width } = Dimensions.get("window");

const CardImg = ({ image, title, subtitle }) => {
    return (
        <Card
            style={{
                width: width * 0.45,
                height: 104,
                margin: 10,
                borderTopLeftRadius: 50,
                borderBottomLeftRadius: 50,
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
            }}
        >
            <Card.Title
                style={{ paddingLeft: 0 }}
                title={title}
                subtitle={subtitle}
                titleStyle={{ fontSize: 16, textAlign: "right" }}
                subtitleStyle={{ fontSize: 14.5, textAlign: "right" }}
                leftStyle={{ marginLeft: 0 }}
                left={() => (
                    <Avatar.Image
                        style={{ marginRight: 10 }}
                        size={104}
                        source={image}
                    />
                )}
            />
        </Card>
    );
};

export default CardImg;
