import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from "../../service/api";

import logo from "../../assets/logo.png";
import styles from './styles';

export default function Home() {
    const navigation = useNavigation();
    const [total, setTotal] = useState([]);

    function navigateToDetail(totals) {
        navigation.navigate('Detail', {totals});
    }

    async function loadTotais() {
    
        const response = await api.get('profile');
    
        setTotal(response.data);
      }
    
      useEffect(() => {
        loadTotais();
      }, []);
    

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} />
            </View>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.descricao}>Consulta dos ganhos e descontos</Text>
            <FlatList style={styles.totais}
                data={total}
                keyExtractor={totals => String(total.id)}
                renderItem={({item: totals}) => (
                    <View style={styles.total}>
                    <Text style={styles.propriedade}>Total Proventos</Text>
                    <Text style={styles.valor}>{Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(totals.total_proventos)}</Text>
                    <Text style={styles.propriedade}>Total Desconto</Text>
                    <Text style={styles.valor}>{Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(totals.total_desconto)}</Text>
                    <Text style={styles.propriedade}>Total Liquido</Text>
                    <Text style={styles.valor}>{Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(totals.total_liquido)}</Text>
                    <TouchableOpacity style={styles.button} onPress={()=> navigateToDetail(totals)}>
                        <Text style={styles.textButton}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#e02041" />
                    </TouchableOpacity>
                </View>
                )}
            />
        </View>
    );
}