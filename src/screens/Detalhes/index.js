import React from "react";

import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function Detalhes({
    route,
}) {

    const {
        personagem,
    } = route.params;

    const nome =
        personagem.character?.name ||
        "Nome não informado";

    const id =
        personagem.character?.mal_id ||
        "Não informado";

    const papel =
        personagem.role ||
        "Não informado";

    const imagem =
        personagem.character?.images?.jpg?.image_url;

    const url =
        personagem.character?.url ||
        "Não disponível";

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >

            <View style={styles.content}>

                <Image
                    source={{
                        uri: imagem,
                    }}
                    style={styles.image}
                />

                <Text style={styles.name}>
                    {nome}
                </Text>

                <View style={styles.card}>

                    <Text style={styles.label}>
                        ID do personagem
                    </Text>

                    <Text style={styles.value}>
                        {id}
                    </Text>

                </View>

                <View style={styles.card}>

                    <Text style={styles.label}>
                        Papel no anime
                    </Text>

                    <Text style={styles.value}>
                        {papel}
                    </Text>

                </View>

                <View style={styles.card}>

                    <Text style={styles.label}>
                        Anime
                    </Text>

                    <Text style={styles.value}>
                        Naruto
                    </Text>

                </View>

                <View style={styles.card}>

                    <Text style={styles.label}>
                        Fonte dos dados
                    </Text>

                    <Text style={styles.value}>
                        Jikan / MyAnimeList
                    </Text>

                </View>

                <View style={styles.about}>

                    <Text style={styles.aboutTitle}>
                        Sobre o personagem
                    </Text>

                    <Text style={styles.aboutText}>
                        Este personagem faz parte do
                        anime Naruto. As informações
                        apresentadas nesta tela foram
                        recebidas através da API pública
                        Jikan.
                    </Text>

                </View>

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#0F172A",
    },

    content: {
        alignItems: "center",
        padding: 25,
    },

    image: {
        width: 230,
        height: 320,
        borderRadius: 20,
        marginBottom: 20,
    },

    name: {
        color: "#F97316",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 25,
    },

    card: {
        width: "100%",
        backgroundColor: "#1E293B",
        borderRadius: 12,
        padding: 18,
        marginBottom: 12,
    },

    label: {
        color: "#94A3B8",
        fontSize: 14,
        marginBottom: 7,
    },

    value: {
        color: "#FFFFFF",
        fontSize: 17,
        fontWeight: "bold",
    },

    about: {
        width: "100%",
        backgroundColor: "#1E293B",
        borderRadius: 12,
        padding: 18,
        marginTop: 5,
        marginBottom: 30,
    },

    aboutTitle: {
        color: "#FFFFFF",
        fontSize: 19,
        fontWeight: "bold",
        marginBottom: 10,
    },

    aboutText: {
        color: "#CBD5E1",
        fontSize: 15,
        lineHeight: 23,
    },

});