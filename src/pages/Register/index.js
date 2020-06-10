import React from 'react';
import { View, Image, Text } from 'react-native';

import logoImg from '../../assets/Imagem.png';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Register() {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImg} />
                <Text STYLE={style.headerText}>
                    Total de 0 casos.
        </Text>
            </View>
        </View>
    );
}