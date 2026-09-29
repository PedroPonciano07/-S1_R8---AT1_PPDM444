import React, { useEffect, useState } from "react";

import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

//import CardPersonagem from "./CardPersonagens.js";

const API_URL = "https://api.jikan.moe/v4/anime/20/characters";

export default function Personagens({ navigation }) {

    const [personagens, setPersonagens] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        carregarPersonagens();
    }, []);

    async function carregarPersonagens() {

        try {

            setCarregando(true);
            setErro(false);

            const resposta = await fetch(API_URL);

            if (!resposta.ok) {
                throw new Error("Erro ao acessar a API");
            }

            const dados = await resposta.json();

            setPersonagens(dados.data);

        } catch (error) {

            console.log("Erro na API:", error);

            setErro(true);

        } finally {

            setCarregando(false);

        }
    }

    function abrirDetalhes(item) {

        navigation.navigate(
            "Detalhes",
            {
                personagem: item,
            }
        );

    }

   function renderPersonagem({ item }) {
    return (
        <TouchableOpacity
            onPress={() => abrirDetalhes(item)}
            style={{
                backgroundColor: "#1E293B",
                padding: 20,
                marginBottom: 10,
                borderRadius: 10,
            }}
        >
            <Text style={{ color: "#FFFFFF", fontSize: 18 }}>
                {item.character.name}
            </Text>
        </TouchableOpacity>
    );
}

    if (carregando) {

        return (
            <View style={styles.center}>

                <ActivityIndicator
                    size="large"
                    color="#F97316"
                />

                <Text style={styles.loading}>
                    Carregando personagens...
                </Text>

            </View>
        );

    }

    if (erro) {

        return (
            <View style={styles.center}>

                <Text style={styles.error}>
                    Não foi possível carregar os personagens.
                </Text>

                <TouchableOpacity
                    style={styles.retryButton}
                    onPress={carregarPersonagens}
                >

                    <Text style={styles.retryText}>
                        TENTAR NOVAMENTE
                    </Text>

                </TouchableOpacity>

            </View>
        );

    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>

                <Text style={styles.title}>
                    Personagens de Naruto
                </Text>

                <Text style={styles.subtitle}>
                    Escolha um personagem para ver mais informações
                </Text>

            </View>

            <FlatList
                data={personagens}
                keyExtractor={(item) =>
                    item.character.mal_id.toString()
                }
                renderItem={renderPersonagem}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
            />

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#0F172A",
    },

    header: {
        padding: 20,
        paddingBottom: 10,
    },

    title: {
        color: "#FFFFFF",
        fontSize: 25,
        fontWeight: "bold",
    },

    subtitle: {
        color: "#94A3B8",
        fontSize: 14,
        marginTop: 6,
    },

    list: {
        padding: 15,
        paddingTop: 5,
    },

    center: {
        flex: 1,
        backgroundColor: "#0F172A",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
    },

    loading: {
        color: "#FFFFFF",
        fontSize: 16,
        marginTop: 15,
    },

    error: {
        color: "#FFFFFF",
        fontSize: 17,
        textAlign: "center",
        marginBottom: 20,
    },

    retryButton: {
        backgroundColor: "#F97316",
        paddingVertical: 13,
        paddingHorizontal: 25,
        borderRadius: 10,
    },

    retryText: {
        color: "#FFFFFF",
        fontWeight: "bold",
    },

});