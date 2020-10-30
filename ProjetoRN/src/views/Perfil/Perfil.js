import React from 'react';
import { StatusBar, Text, View, TouchableOpacity, Image } from 'react-native';
import estiloPerfil from './estiloPerfil';

function Perfil({ navigation }) {

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloPerfil.container}>
            <View style={estiloPerfil.borda}>
                
                <View style={estiloPerfil.fotoContainer}>
                <Text style={estiloPerfil.texto}>Perfil</Text>
                <Image
                style={estiloPerfil.foto}
                source={require('../../../assets/imagens/perfil.jpg')}
                />
                </View>

                <Text style={estiloPerfil.texto}>Matheus Siqueira Sordi</Text>
                <Text style={estiloPerfil.texto}>e</Text>
                <Text style={estiloPerfil.texto}>Guilherme Brito</Text>
                <Text style={estiloPerfil.texto}>2º DS-A</Text>

                <TouchableOpacity style={estiloPerfil.botaoContainer} onPress={voltar}>
                    <Text style={estiloPerfil.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Perfil;