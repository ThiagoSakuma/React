import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";

import logo from "../../assets/logo.png";

import styles from "./styles";

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const total = route.params.total;

    function navigateBack() {
        navigation.goBack();
      }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>
            <View style={styles.total}>
                <Text style={[styles.propriedade, { marginTop: 0 }]}>Total Proventos</Text>
                <Text style={styles.valor}>{Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(total.total_proventos)}</Text>

                <Text style={styles.propriedade}>Total Desconto</Text>
                <Text style={styles.valor}>{Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(total.total_desconto)}</Text>

                <Text style={styles.propriedade}>Total Liquido</Text>
                <Text style={styles.valor}>{Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(total.total_liquido)}</Text>
            </View>
        </View>
    );
}