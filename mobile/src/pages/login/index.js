import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from './styles'
import logo from "../../assets/logo.png";
//import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();
 
    function navigateToHome() {
        navigation.navigate('Home')
    }

    async function handleLogin(e) {
        e.preventDefault();
        storeData = async() => {
            try {
                const response = await api.post('login', { email, senha});
                await AsyncStorage.setItem('id', response.data.id);
                await AsyncStorage.setItem('nome', response.data.nome);
        
            } catch(error) {
                alert('Falha no login, email ou senha incorreto');
            }
        }
    }

    return(
        <View style={styles.container}>
            <Image source={logo}></Image>
            <Text style={styles.txt}>Faça seu login</Text>
            <TextInput style={styles.input} placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}></TextInput>
            <TextInput style={styles.input} placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}></TextInput>
            <TouchableOpacity style={styles.button} onPress={navigateToHome}><Text>Entrar</Text></TouchableOpacity>
        </View>
    );
}