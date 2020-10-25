import React, {useState} from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import estiloColecao from './estiloColecao';
import Lista from '../../components/Lista/Lista';
import { MaterialIcons } from '@expo/vector-icons';

function Colecao({ navigation }) {

    const [colecao, setColecao] = useState([
        {
            id: '1',
            titulo: 'Nome do produto',
            descricao: 'Descrição',
            desenvolvedora: 'Empresa',
            anoPublicacao: 'Ano de desenvolvimento',
            foto: require('../../../assets/imagens/img.jpg'),
        },
        {
            id: '2',
            titulo: 'Nome do produto',
            descricao: 'Descrição',
            desenvolvedora: 'Empresa',
            anoPublicacao: 'Ano de desenvolvimento',
            foto: require('../../../assets/imagens/img.jpg'),
        },
        {
            id: '3',
            titulo: 'Nome do produto',
            descricao: 'Descrição',
            desenvolvedora: 'Empresa',
            anoPublicacao: 'Ano de desenvolvimento',
            foto: require('../../../assets/imagens/img.jpg'),
        },
        {
            id: '4',
            titulo: 'Nome do produto',
            descricao: 'Descrição',
            desenvolvedora: 'Empresa',
            anoPublicacao: 'Ano de desenvolvimento',
            foto: require('../../../assets/imagens/img.jpg'),
        },
    ]);

    const voltar = () => {
        navigation.navigate('Inicial')
    }

    return (
        <View style={estiloColecao.container}>
                    <View style={estiloColecao.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name='arrow-back' size={24} color='white'/>
                </TouchableOpacity>

                <Text style={estiloColecao.texto}>Coleção</Text>
                <MaterialIcons name='add' size={24} color='white' /> 
            </View>

            <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={colecao}
                renderItem={ ({item}) => <Lista data={item} />}
            />

        </View>
            );
}

export default Colecao;