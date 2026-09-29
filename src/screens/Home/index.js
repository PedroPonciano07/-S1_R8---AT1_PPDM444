import React from "react";

import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Home({ navigation }) {

    function acessarPersonagens() {
        navigation.navigate("Personagens");
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.content}>

                <Text style={styles.logo}>
                    🍥
                </Text>

                <Text style={styles.title}>
                    AnimeVerse
                </Text>

                <Text style={styles.subtitle}>
                    Explore o mundo dos animes
                </Text>

                <Text style={styles.description}>
                    Descubra personagens do anime Naruto
                    através de uma API pública e gratuita.
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={acessarPersonagens}
                    activeOpacity={0.8}
                >

                    <Text style={styles.buttonText}>
                        VER PERSONAGENS
                    </Text>

                </TouchableOpacity>

            </View>

            <Text style={styles.footer}>
                Dados fornecidos pela API Jikan
            </Text>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#0F172A",
    },

    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
    },

    logo: {
        fontSize: 75,
        marginBottom: 20,
    },

    title: {
        color: "#F97316",
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 10,
    },

    subtitle: {
        color: "#FFFFFF",
        fontSize: 21,
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 20,
    },

    description: {
        color: "#CBD5E1",
        fontSize: 16,
        lineHeight: 24,
        textAlign: "center",
        marginBottom: 40,
    },

    button: {
        backgroundColor: "#F97316",
        paddingVertical: 16,
        paddingHorizontal: 35,
        borderRadius: 12,
    },

    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },

    footer: {
        color: "#64748B",
        textAlign: "center",
        marginBottom: 20,
        fontSize: 12,
    },

});