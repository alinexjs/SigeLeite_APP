import { View, Text, Image, StyleSheet, Platform, ScrollView } from "react-native";
import React, { useState } from "react";
import { TextInput, RadioButton, Button } from 'react-native-paper';

import { LinearGradient } from "expo-linear-gradient";

export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [value, setValue] = useState("");

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={["#9482D8", "#FFFFFF"]}
                start={{ x: 0, y: 0 }}   // início à ESQUERDA
                end={{ x: 1, y: 0 }}     // final à DIREITA
                style={StyleSheet.absoluteFill}   // ocupa toda a tela
            />

            {/* LOGO */}
            <View style={styles.centerContainer}>
                <Image
                    source={require("../../assets/logo.png")} // <-- coloque sua imagem
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            {/* CONTENT */}
            <View style={styles.content}>
                <Text style={styles.textLogin}>Login</Text>

                {/* INPUT EMAIL */}
                <TextInput
                    label="Email"
                    mode="outlined"
                    value={email}
                    onChangeText={setEmail}

                    // Ícone
                    left={<TextInput.Icon icon="email" color="#9482D8" />}

                    // Estilos
                    style={styles.input}
                    outlineStyle={styles.inputOutline}
                    textColor="#4A4A4A"

                    outlineColor="#E2E8F0"
                    activeOutlineColor="#9482D8"

                    theme={{
                        colors: {
                            primary: "#9482D8",
                            onSurfaceVariant: "#64748B"     // cor do label e placeholder
                        }
                    }}
                />

                {/* INPUT SENHA */}
                <TextInput
                    label="Senha"
                    mode="outlined"
                    value={senha}
                    onChangeText={setSenha}

                    // Ícone de senha
                    left={<TextInput.Icon icon="lock" color="#9482D8" />}

                    secureTextEntry={true}

                    // Estilos
                    style={styles.input}
                    outlineStyle={styles.inputOutline}
                    textColor="#4A4A4A"

                    outlineColor="#E2E8F0"
                    activeOutlineColor="#9482D8"

                    theme={{
                        colors: {
                            primary: "#9482D8",
                            onSurfaceVariant: "#64748B"
                        }
                    }}
                />

                <Text style={{
                    fontWeight: 600,
                    width: "85%",
                    color: "#7466aaff",
                    fontSize: 15,
                    textAlign: "right",
                    marginTop: -5,
                }}>
                    Esqueceu a senha?
                </Text>

                {/* RADIO BUTTONS */}
                <RadioButton.Group onValueChange={setValue} value={value}>
                    <View style={styles.radioContainer}>

                        <View style={styles.radioItem}>
                            <RadioButton
                                value="ordenhador"
                                color="#9482D8"
                                uncheckedColor="#9482D8"
                            />
                            <Text style={styles.radioText}>Ordenhador</Text>
                        </View>

                        <View style={styles.radioItem}>
                            <RadioButton
                                value="administrador"
                                color="#9482D8"
                                uncheckedColor="#9482D8"
                            />
                            <Text style={styles.radioText}>Administrador</Text>
                        </View>

                    </View>
                </RadioButton.Group>


                <View style={styles.buttonContainer}>
                    <Button mode="contained" onPress={() => console.log('Pressed')}
                        style={styles.button}
                        labelStyle={{ fontSize: 16, fontWeight: "600" }}>
                        Entrar
                    </Button>
                </View>

                <Text style={{
                    fontWeight: "bold",
                    width: "85%",
                    color: "#7466aaff",
                    fontSize: 15,
                    textAlign: "center",
                    marginTop: 5,
                    textDecorationLine: "underline"
                }}>
                    Não tem uma conta ainda? Crie agora
                </Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    image: {
        width: 180,
        height: 180,
        marginTop: 30
    },
    content: {
        flex: 2,
        backgroundColor: "#ffffffff",
        width: "100%",
        paddingLeft: 40,
        paddingTop: 30,
        paddingBottom: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: "flex-start",
    },
    textLogin: {
        fontWeight: "600",
        fontSize: 26,
        textAling: "left",
        marginBottom: 20,
    },
    input: {
        width: "85%",
        backgroundColor: "white",
        borderRadius: 25,
        marginBottom: 5,
        marginBottom: 10,
        overflow: "hidden",
    },
    inputOutline: {
        borderRadius: 30,
        borderWidth: 1,
    },
    radioContainer: {
        width: "85%",           // alinha com os inputs
        flexDirection: "row",   // garante lado a lado
        alignItems: "center",
        marginTop: 25,           // distância do "Esqueceu a senha?"
    },
    radioItem: {
        flexDirection: "row",   // ícone + texto lado a lado
        alignItems: "center",
        marginRight: 60,        // separação entre as duas opções
    },
    radioText: {
        fontSize: 15,
        color: "#4A4A4A",
    },
    buttonContainer: {
        width: "90%",
        alignItems: "center",
        marginTop: 150,   // empurra para baixo
    },
    button: {
        width: "90%",        // deixa comprido como os inputs
        borderRadius: 40,
        paddingVertical: 5,  // aumenta a altura
        backgroundColor: "#9482D8", // cor opcional
    },



});