import React from "react";

import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function CardPersonagem({ personagem, onPress }) {

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={onPress}
            activeOpacity={0.8}
        >

            <Image
                source={{
                    uri: personagem?.character?.images?.jpg?.image_url,
                }}
                style={styles.image}
            />

            <View style={styles.info}>

                <Text style={styles.name}>
                    {personagem?.character?.name || "Sem nome"}
                </Text>

                <Text style={styles.detail}>
                    ID: {personagem?.character?.mal_id || "-"}
                </Text>

                <Text style={styles.detail}>
                    Papel: {personagem?.role || "Não informado"}
                </Text>

            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    card: {
        backgroundColor: "#1E293B",
        borderRadius: 14,
        marginBottom: 14,
        padding: 12,
        flexDirection: "row",
        alignItems: "center",
    },

    image: {
        width: 85,
        height: 105,
        borderRadius: 10,
        backgroundColor: "#334155",
    },

    info: {
        flex: 1,
        marginLeft: 14,
    },

    name: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },

    detail: {
        color: "#CBD5E1",
        fontSize: 14,
        marginTop: 4,
    },

});